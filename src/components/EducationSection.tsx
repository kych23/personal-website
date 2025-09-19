import { education, coursework } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Award, GraduationCap, MapPin, Calendar, Building2, BookOpen } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

function CourseworkTag({ course, index }: { course: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.05 * index,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3 py-1 bg-background/60 backdrop-blur-sm rounded-lg text-sm border border-purple-500/20 shadow-sm hover:border-purple-500/40 transition-all duration-300"
    >
      {course}
    </motion.div>
  );
}

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center">
            <motion.span
              className="mr-2"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, -3, 3, 0],
                transition: { duration: 0.3 }
              }}
            >
              <BookOpen className="w-6 h-6 text-purple-500" />
            </motion.span>
            Education
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Education Timeline */}
          <div className="mb-8">
            {education.map((edu, index) => (
              <TimelineItem
                key={edu.institution}
                title={`${edu.major}`}
                subtitle={`${edu.institution}`}
                subtitle2={edu.minor}
                date={`${edu.period}`}
                location={edu.location}
                isLast={index === education.length - 1}
                index={index}
              >
                {edu.achievements && edu.achievements.length > 0 && (
                  <motion.div
                    className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                        <Award className="h-4 w-4 text-purple-500" />
                      </div>
                      <h4 className="text-sm font-medium">
                        Activities & Involvement
                      </h4>
                    </div>
                    <ul className="list-none ml-4 space-y-2 text-sm">
                      {edu.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="text-muted-foreground relative pl-6"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                          viewport={{ once: true }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </TimelineItem>
            ))}
          </div>

          {/* Right side - Relevant Coursework */}
          <motion.div
            className="lg:sticky lg:top-24"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-background/60 backdrop-blur-sm rounded-lg border border-purple-500/20 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                  <GraduationCap className="h-4 w-4 text-purple-500" />
                </div>
                <h3 className="text-lg font-medium">Relevant Coursework</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {coursework.map((course, index) => (
                  <CourseworkTag key={course} course={course} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}