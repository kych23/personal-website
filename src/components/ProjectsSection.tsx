import React from "react";
import { projects } from "@/lib/data";
import CardScroll from "./ui/card-scroll";

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
      <CardScroll 
        items={cardScrollProjects}
        cardWidth={400}
        gap={32}
        stickyHeightVh={300}
        title="Projects"
      />
    </div>
  );
}
