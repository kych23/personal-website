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
    // @ts-ignore - client:only is an Astro directive
    <div client:only="react">
      <section id="projects" className="bg-gradient-to-b from-background to-muted/20">
        <div className="py-6">
          <div className="container max-w-4xl mx-auto px-6 md:px-4">
            <MotionWrapper>
              <h2 className="text-4xl font-bold mb-2 text-center flex items-center justify-center">
                <motion.span
                  className="mr-3"
                  whileHover={{ 
                    scale: [1, 1.3, 1.1, 1.2],
                    rotate: [0, 360, 720],
                    x: [0, 10, -10, 0],
                    transition: { 
                      duration: 1.2, 
                      ease: "easeInOut",
                      times: [0, 0.4, 0.8, 1]
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
          cardWidth={320}
          gap={24}
          stickyHeightVh={400}
        />
      </section>
    </div>
  );
}
