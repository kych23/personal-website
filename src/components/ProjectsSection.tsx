import React from "react";
import { projects } from "@/lib/data";
import CardScroll from "./ui/card-scroll";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { Rocket } from "lucide-react";

export default function ProjectsSection() {
  // Transform projects data to match CardScroll component format
  const cardScrollProjects = projects.map((project, index) => ({
    id: project.title.toLowerCase().replace(/\s+/g, '-'),
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    achievements: project.achievements,
    github: project.github,
  }));

  return (
    <section id="projects" className="scroll-mt-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="py-4">
        <div className="container max-w-4xl mx-auto px-6 md:px-4">
          <MotionWrapper>
            <h2 className="text-4xl font-bold mb-1 text-center flex items-center justify-center">
              <motion.span
                className="mr-3"
                whileHover={{
                  scale: 1.1,
                  y: [-4, -8, -4, 0],
                  x: [0, 3, -3, 0],
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut",
                    times: [0, 0.3, 0.7, 1]
                  }
                }}
              >
                <Rocket className="w-8 h-8 text-purple-500" />
              </motion.span>
              Projects
            </h2>
          </MotionWrapper>
        </div>
      </div>

      <CardScroll
        items={cardScrollProjects}
        cardWidth={375}
        gap={16}
        stickyHeightVh={400}
      />
    </section>
  );
}
