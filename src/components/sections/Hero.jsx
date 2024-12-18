import portrait from "../../assets/images/portrait_hd.jpg";
import portrait_w from "../../assets/images/portrait_hd_w.jpg";
import resume from "../../assets/files/cv2024.pdf";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { useState } from "react";

export default function Hero() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isFlipping, setIsFlipping] = useState(false);

  const handleThemeToggle = () => {
    setIsFlipping(true);
    toggleTheme();
    setTimeout(() => setIsFlipping(false), 700);
  };

  const handleHover = (e) => {
    if (isFlipping) return;
    const currentRotation = isDarkMode ? 180 : 0;
    e.currentTarget.style.transform = `rotateY(${
      currentRotation + (isDarkMode ? -15 : 15)
    }deg)`;
  };

  const handleClick = (event) => {
    window.open(resume, "_blank");
    event.currentTarget.blur(); // Remove focus after click
  };

  return (
    <section className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
        {/* Image */}
        <div className="w-full max-w-xs mx-auto">
          {/* Perspective wrapper */}
          <div className="relative" style={{ perspective: "1000px" }}>
            {/* Overlay Text */}
            <div className="text-center">
              <div className="animate-bounce">
                <span className="text-xs uppercase tracking-widest font-semibold text-sky-600 dark:text-teal-400">
                  Switch perspectives—click and explore!
                </span>
              </div>
            </div>
            {/* Flip container */}
            <div
              className="relative aspect-[7/8] transition-all duration-700 cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                transform: isDarkMode ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
              onClick={handleThemeToggle}
              onMouseEnter={handleHover}
              onMouseLeave={(e) => {
                const baseRotation = isDarkMode ? 180 : 0;
                e.currentTarget.style.transform = `rotateY(${baseRotation}deg)`;
              }}
            >
              {/* Light mode image (front) */}
              <img
                src={portrait}
                alt="profile picture light"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                style={{ backfaceVisibility: "hidden" }}
              />
              {/* Dark mode image (back) */}
              <img
                src={portrait_w}
                alt="profile picture dark"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              />
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="space-y-4">
          <h1 className="mb-4 text-3xl font-semibold text-sky-950 dark:text-gray-200 md:text-4xl lg:text-5xl">
            Hi, my name is{" "}
            <span className="text-sky-600 dark:text-teal-400 font-extrabold">
              Ignacio.
            </span>
          </h1>
          <p className="text-lg text-sky-900 dark:text-gray-300">
            <span className="font-bold text-sky-900 dark:text-gray-300 underline decoration-2 decoration-sky-500 dark:decoration-teal-300">
              Full Stack Developer
            </span>{" "}
            with a creative and results-oriented mindset, combining a strong technical foundation with a unique perspective thanks to my previous experience in education. I am motivated by continuous learning and taking on new challenges.
          </p>
          <div className="flex gap-4 mb-4">
            <Link
              to="https://www.linkedin.com/in/ignacio-albiol/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-8 h-8 text-sky-900 dark:text-gray-200 hover:text-sky-600 dark:hover:text-teal-300 trasnform hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link
              to="https://github.com/nachoa88"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-8 h-8 text-sky-900 dark:text-gray-200 hover:text-sky-600 dark:hover:text-teal-300 trasnform hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>
          <button
            className="px-4 py-2 rounded-lg text-sm tracking-widest font-semibold uppercase text-sky-900 dark:text-gray-200 bg-sky-400 dark:bg-teal-600
              border-2 border-slate-950 shadow-[4px_4px_#0f172a] dark:shadow-[4px_4px_#0f172a] transition-all duration-300 ease-in-out
              hover:shadow-[6px_6px] hover:bg-slate-950 dark:hover:bg-slate-950 hover:text-gray-200 hover:shadow-sky-400 dark:hover:shadow-teal-600"
            onClick={handleClick}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
