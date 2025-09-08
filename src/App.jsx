import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

// --- UTILITIES ---
function cn(...inputs) {
  const classSet = new Set();
  inputs.forEach((input) => {
    if (typeof input === "string") {
      input.split(" ").forEach((cls) => cls && classSet.add(cls));
    } else if (typeof input === "object" && input !== null) {
      for (const key in input) {
        if (input[key]) {
          classSet.add(key);
        }
      }
    }
  });
  return Array.from(classSet).join(" ");
}

// Custom hook to calculate years of experience
const useYearsOfExperience = (startDate) => {
  const [yearsOfExperience, setYearsOfExperience] = useState("");

  useEffect(() => {
    const start = new Date(startDate);
    const now = new Date();
    
    // Calculate the difference in years
    const diffInMs = now - start;
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    
    // Round to nearest 0.5
    const roundedYears = Math.round(diffInYears * 2) / 2;
    
    // Format the display
    const wholeYears = Math.floor(roundedYears);
    const hasHalf = roundedYears % 1 !== 0;
    
    if (hasHalf) {
      setYearsOfExperience(`${wholeYears}.5+ Years Experience`);
    } else {
      setYearsOfExperience(`${wholeYears}+ Years Experience`);
    }
  }, [startDate]);

  return yearsOfExperience;
};

// --- SVG ICONS ---
const LinkedinIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.2 0-1.4-.5-2.5-1.3-3.4.1-.3.5-1.6 0-3.2 0 0-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1c-.5 1.6-.1 2.9 0 3.2C4.5 7.3 4 8.4 4 9.8c0 4.8 2.7 5.9 5.5 6.2-.6.5-.9 1.3-.9 2.5V22" />
  </svg>
);
const PortfolioIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);
const BlogIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12z"></path>
    <path d="M20.94 12a4.09 4.09 0 01-4.08 4.09A4.09 4.09 0 0112.78 12a4.09 4.09 0 014.08-4.09A4.09 4.09 0 0120.94 12z"></path>
    <path d="M24 12a2.94 2.94 0 01-2.94 2.94A2.94 2.94 0 0118.12 12a2.94 2.94 0 012.94-2.94A2.94 2.94 0 0124 12z"></path>
  </svg>
);
const PodcastIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  </svg>
);
const MailIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

// --- UI COMPONENTS ---

// 1. Elegant Animated Text
const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  stagger = 0.03,
  delay = 0.5,
}) => {
  const textArray = Array.isArray(text) ? text : [text];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <AnimatePresence>
        {textArray.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.split(" ").map((word, wordIndex) => {
              // Check if word is LinkedIn or email and wrap with special styling
              const isSpecialWord =
                word.toLowerCase() === "linkedin" ||
                word.toLowerCase() === "email";
              const wordSpan = isSpecialWord ? (
                <span className="font-semibold text-blue-600">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      className="inline-block"
                      initial="hidden"
                      animate="visible"
                      variants={variants}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay:
                          delay +
                          lineIndex * 0.1 +
                          wordIndex * 0.05 +
                          charIndex * stagger,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ) : (
                word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay:
                        delay +
                        lineIndex * 0.1 +
                        wordIndex * 0.05 +
                        charIndex * stagger,
                    }}
                  >
                    {char}
                  </motion.span>
                ))
              );

              return (
                <span key={wordIndex} className="inline-block">
                  {wordSpan}
                  <span className="inline-block">&nbsp;</span>
                </span>
              );
            })}
          </span>
        ))}
      </AnimatePresence>
    </Wrapper>
  );
};

// 2. Aurora Background
const AuroraBackground = () => (
  <>
    <div className="aurora-bg">
      <div className="aurora-bg__c-1"></div>
      <div className="aurora-bg__c-2"></div>
      <div className="aurora-bg__c-3"></div>
    </div>
    <style>{`
        .aurora-bg {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: 0;
            filter: blur(80px);
            opacity: 0.6;
        }
        .aurora-bg__c-1, .aurora-bg__c-2, .aurora-bg__c-3 {
            position: absolute;
            border-radius: 50%;
            animation: aurora-anim 10s infinite alternate;
        }
        .aurora-bg__c-1 {
            width: 50vw; height: 50vw;
            max-width: 500px; max-height: 500px;
            background: #38bdf8; /* sky-400 */
            top: 5%; left: 10%;
        }
        .aurora-bg__c-2 {
            width: 40vw; height: 40vw;
            max-width: 450px; max-height: 450px;
            background: #a78bfa; /* violet-400 */
            top: 30%; right: 15%;
            animation-delay: 4s;
        }
        .aurora-bg__c-3 {
            width: 35vw; height: 35vw;
            max-width: 300px; max-height: 300px;
            background: #f472b6; /* pink-400 */
            bottom: 10%; left: 25%;
            animation-delay: 8s;
        }
        @keyframes aurora-anim {
            0% { transform: scale(1) translate(0, 0); }
            50% { transform: scale(1.4) translate(40px, -30px); }
            100% { transform: scale(1) translate(0, 0); }
        }
    `}</style>
  </>
);

// --- DATA ---
const LINKS = [
  {
    href: "https://www.linkedin.com/in/anupamdagar/",
    Icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Anupam-dagar",
    Icon: GithubIcon,
    label: "GitHub",
  },
  {
    href: "https://portfolio.anupamdagar.com/",
    Icon: PortfolioIcon,
    label: "Portfolio",
  },
  { href: "https://medium.com/@siriusdagar", Icon: BlogIcon, label: "Blog" },
  {
    href: "https://www.heroku.com/podcasts/codeish/43-the-github-student-developer-pack/",
    Icon: PodcastIcon,
    label: "Podcast",
  },
  { href: "mailto:dagaranupam@gmail.com", Icon: MailIcon, label: "Email" },
];

// --- MAIN APP COMPONENT ---
export default function PersonalWebsite() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Calculate years of experience from July 1, 2020
  const experienceText = useYearsOfExperience("2020-07-01");

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const rotateX = useTransform(mouseY, [0, 500], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 500], [-10, 10]);

  // Define the background motion value for the spotlight
  const backgroundMotionValue = useTransform(
    [mouseX, mouseY],
    ([newX, newY]) =>
      `radial-gradient(120px at ${newX}px ${newY}px, rgba(180,220,255,0.85) 0%, rgba(120,200,255,0.25) 60%, transparent 100%)`
  );

  return (
    <main
      className="relative h-screen w-screen overflow-hidden bg-gray-50 font-sans"
      onMouseMove={handleMouseMove}
    >
      <AuroraBackground />
      <motion.div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background: backgroundMotionValue,
          mixBlendMode: "soft-light",
          transition: "background 0.2s",
        }}
      />

      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center text-center"
        style={{}}
      >
        <div className="flex flex-col items-center p-4">
          <AnimatedText
            el="h1"
            text="Anupam Dagar"
            className="text-5xl font-bold tracking-tight text-gray-900 md:text-7xl lg:text-8xl"
            delay={0}
          />
          <AnimatedText
            text={`SDE-3 at Captain Fresh • ${experienceText}`}
            className="mt-4 text-base tracking-wide text-gray-600 md:text-xl"
            delay={0.4}
          />
          {/* <AnimatedText 
                text="Let's connect! Reach out to me on LinkedIn or send me an email" 
                className="mt-6 mb-2 text-lg font-medium text-gray-800 text-center"
                delay={0.4}
            /> */}
          {/* <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 mt-2 mb-6"
            > */}
          {/* Primary CTAs: LinkedIn and Email */}
          {/* <a
                href="https://www.linkedin.com/in/anupamdagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/90 border-2 border-blue-500/20 hover:border-blue-500/40 text-blue-600 px-6 py-2.5 text-lg font-semibold shadow-lg shadow-blue-500/20 backdrop-blur-sm transition-all duration-200 hover:shadow-blue-500/30 hover:transform hover:scale-[1.02]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="mailto:dagaranupam@gmail.com"
                className="flex items-center gap-2 rounded-full bg-white/90 border-2 border-blue-500/20 hover:border-blue-500/40 text-blue-600 px-6 py-2.5 text-lg font-semibold shadow-lg shadow-blue-500/20 backdrop-blur-sm transition-all duration-200 hover:shadow-blue-500/30 hover:transform hover:scale-[1.02]"
                aria-label="Email"
              >
                <MailIcon className="h-5 w-5" />
                Email
              </a>
            </motion.div> */}
        </div>
        {/* Secondary links (GitHub, Portfolio, Blog, Podcast) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-2 flex flex-wrap items-center justify-center gap-4"
        >
          {/* {LINKS.filter(l => l.label !== 'LinkedIn' && l.label !== 'Email').map(({ href, Icon, label }, index) => ( */}
          {LINKS.map(({ href, Icon, label }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative flex items-center rounded-full p-3 transition-colors duration-300 hover:bg-gray-900/5 overflow-hidden"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover="hover"
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.4 + index * 0.1,
              }}
            >
              <Icon className="h-6 w-6 text-gray-500 transition-colors duration-300 group-hover:text-gray-900 flex-shrink-0" />
              <motion.span
                className="ml-2 text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-gray-900 whitespace-nowrap"
                variants={{
                  hover: { width: "auto", opacity: 1 }
                }}
                initial={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ overflow: "hidden" }}
              >
                {label}
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
