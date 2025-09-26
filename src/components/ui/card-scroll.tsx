import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Code, Trophy } from "lucide-react";
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
};

export default function CardScroll({
  items,
  cardWidth = 420,
  gap = 20,
  stickyHeightVh = 300,
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
      aria-label="Projects"
      className="relative"
      style={{ height: `${stickyHeightVh}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden grid items-center bg-gradient-to-b from-background to-muted/20">
        <motion.div
          ref={trackRef}
          className="flex px-6 md:px-16 py-2 will-change-transform"
          style={{
            x: prefersReduced ? 0 : x,
            gap: `${gap}px`,
          }}
          aria-label="Horizontally scrolled cards"
          role="region"
          tabIndex={0}
        >
          {items.map((project) => (
            <motion.div
              key={project.id}
              className="flex-none"
              style={{
                width: `min(${cardWidth}px, 86vw)`,
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
                      <div className="flex items-center mb-2">
                        <Code className="w-4 h-4 mr-2 text-purple-500" />
                        <h4 className="text-sm font-medium">Technologies</h4>
                      </div>
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
                      <div className="flex items-center mb-2">
                        <Trophy className="w-4 h-4 mr-2 text-purple-500" />
                        <h4 className="text-sm font-medium">Key Achievements</h4>
                      </div>
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
                    <Github className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
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
          section[aria-label="Projects"] > div > div { transform: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          section[aria-label="Projects"] * { transition: none !important; }
          section[aria-label="Projects"] > div > div { transform: none !important; }
        }
      `}</style>
    </section>
  );
}