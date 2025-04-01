const LetterGlitch = () => {
  return (
    <div className="flex justify-center w-full md:pt-24">
      <div className="group w-full max-w-[500px]">
        <a
          href="/titulo-profesional-tecnico.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-transparent border border-[var(--white-icon-tr)] h-full flex flex-col">
            <div className="w-full h-40 md:h-72 bg-[#1414149c]">
              <img
                src="/titulo-profesional-tecnico.jpg"
                alt="image"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3 md:p-6 flex-grow flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0">
                <div>
                  <h4 className="text-lg md:text-2xl font-semibold">
                    Professional Title
                  </h4>
                  <span className="py-0.5 text-xs md:text-sm text-[var(--white-icon)] block">
                    Information Systems Development
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    target="_blank"
                    href="/CV-Gabriel-Polack-Software-Developer.pdf"
                    aria-label="Preview"
                    className="size-10 md:size-14 flex justify-center items-center text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-1 border-[var(--white-icon-tr)] p-1.5 md:p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-5 md:size-7"
                    >
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1" />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="/titulo-profesional-tecnico.jpg"
                    aria-label="Preview"
                    className="size-10 md:size-14 flex justify-center items-center text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-1 border-[var(--white-icon-tr)] p-1.5 md:p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5 md:size-7"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LetterGlitch;
