import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  github: string;
  poster?: string;
  videoSrc?: string;
};

type Props = {
  items: Project[];
  cardWidth?: number;
  gap?: number;
  stickyHeightVh?: number;
  title?: string;
};

export default function CardScroll({
  items,
  cardWidth = 420,
  gap = 20,
  stickyHeightVh = 300,
  title = "Projects",
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [{ dist }, setDims] = useState({ dist: 0 });

  useLayoutEffect(() => {
    const onResize = () => {
      const track = trackRef.current;
      if (!track || typeof window === 'undefined') return;
      const rowWidth = track.scrollWidth;
      const vw = window.innerWidth;
      const d = Math.max(0, rowWidth - vw);
      setDims({ dist: d });
    };
    onResize();
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }
  }, [items.length]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);

  const prefersReduced = useMemo(
    () => {
      if (typeof window === 'undefined') return false;
      return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    },
    []
  );

  return (
    <section
      ref={sectionRef}
      aria-label={title}
      style={{ height: `${stickyHeightVh}vh`, position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "grid",
          alignItems: "center",
          background: "radial-gradient(1000px 600px at 30% -10%, #1c1b22 0, #0e0e12 60%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "bold",
              color: "#e8e8ea",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            {title}
          </h2>
        </div>

        <motion.div
          ref={trackRef}
          style={{
            x: prefersReduced ? 0 : x,
            display: "flex",
            gap,
            padding: "0 clamp(24px, 6vw, 64px)",
            paddingTop: "8rem",
            paddingBottom: "2rem",
            willChange: "transform",
          }}
          aria-label="Horizontally scrolled cards"
          role="region"
          tabIndex={0}
        >
          {items.map((project) => (
            <motion.div
              key={project.id}
              style={{
                flex: `0 0 min(${cardWidth}px, 86vw)`,
              }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card 
                className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  <CardTitle className="text-center group-hover:text-purple-500 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow space-y-4 pt-4">
                  {/* Technologies */}
                  {!!project.technologies?.length && (
                    <div>
                      <h4 className="text-sm font-medium mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-purple-500/10 text-xs rounded-md border border-purple-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="px-2 py-1 bg-muted text-xs rounded-md border border-border">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Key Achievements */}
                  {!!project.achievements?.length && (
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.achievements.slice(0, 3).map((achievement, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                        {project.achievements.length > 3 && (
                          <li className="text-sm text-muted-foreground italic">
                            +{project.achievements.length - 3} more achievements
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex items-center justify-center py-4 border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg 
                      className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </motion.a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          section[aria-label="${title}"] > div > div { transform: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          section[aria-label="${title}"] * { transition: none !important; }
          section[aria-label="${title}"] > div > div { transform: none !important; }
        }
      `}</style>
    </section>
  );
}