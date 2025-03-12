import React, { useState, useEffect } from "react";
import { doc, onSnapshot, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebase";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [animateLikes, setAnimateLikes] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const storedIsLiked = localStorage.getItem("websiteIsLiked");
    if (storedIsLiked) {
      setIsLiked(storedIsLiked === "true");
    }

    // Listen for realtime updates from Firestore
    const likeDocRef = doc(db, "likes", "counter");
    const unsubscribe = onSnapshot(likeDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const currentLikes = docSnap.data().likes;
        setLikes(Math.max(0, currentLikes));
        setAnimateLikes(true);
        setTimeout(() => setAnimateLikes(false), 300);
      } else {
        console.log("Document does not exist.");
      }
    });

    return () => unsubscribe();
  }, []);

  const triggerLikeAnimation = () => {
    setTriggerAnimation(true);
    setTimeout(() => {
      setTriggerAnimation(false);
    }, 300);
  };

  const handleLike = async () => {
    if (isProcessing) return;

    if (isLiked) {
      triggerLikeAnimation();
      return;
    }

    try {
      setIsProcessing(true);
      const likeDocRef = doc(db, "likes", "counter");
      await updateDoc(likeDocRef, {
        likes: increment(1),
      });
      setIsLiked(true);
      localStorage.setItem("websiteIsLiked", "true");
      triggerLikeAnimation();
    } catch (error) {
      console.error("Error updating likes:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isClient) return null;

  const borderColorClass = isLiked
    ? "border-[var(--sec)]"
    : "border-[var(--white-icon)]";

  const svgClasses = `
    w-6 h-6 transition-all duration-300 ease-in-out 
    ${isLiked ? "text-[var(--sec)] scale-110" : "text-[var(--white-icon)] group-hover:text-[var(--white)] group-hover:scale-105"}
    ${triggerAnimation ? " animate-scale" : ""}
  `;

  return (
    <div className="flex items-center text-white">
      <button
        onClick={() => window.open("https://www.upwork.com/freelancers/~0180bc0ba4ba024471", "_blank")}    
        disabled={isProcessing}
        className={`
          group relative w-40 h-10 flex items-center justify-center p-3
          rounded-full transition-all duration-300 ease-in-out transform border-2 ${borderColorClass}
          ${!isLiked ? "md:hover:border-[var(--white)]" : ""}
          ${triggerAnimation ? " animate-scale" : ""}
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person-lines-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
        </svg>
        <span
          className={`
          text-sm pl-3 transition-all duration-300 ease-in-out ${animateLikes ? "animate-scale" : ""}
          text-[var(--white)]
        `}
        >
          UpWork
        </span>
      </button>
    </div>
  );
};

export default LikeButton;
