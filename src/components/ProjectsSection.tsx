import React from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github, Rocket, Code, Trophy } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center">
            <motion.span
              className="mr-2"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -10, 10, 0],
                y: [-2, 2, -1, 1, 0],
                transition: { duration: 0.4 }
              }}
            >
              <Rocket className="w-6 h-6 text-purple-500" />
            </motion.span>
            Projects
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col">
                <CardHeader className="bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  <CardTitle className="text-center md:text-left group-hover:text-purple-500 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4 pt-4">
                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-2">
                      <Code className="w-4 h-4 mr-2 text-purple-500" />
                      <h4 className="text-sm font-medium">Technologies</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-2 py-1 bg-purple-500/10 text-xs rounded-md border border-purple-500/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-2">
                      <Trophy className="w-4 h-4 mr-2 text-purple-500" />
                      <h4 className="text-sm font-medium">Key Achievements</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </CardContent>
                <CardFooter className="flex justify-center md:justify-start items-center border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link pt-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                  </motion.a>
                </CardFooter>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
