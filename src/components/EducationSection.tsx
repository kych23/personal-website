import { education, coursework } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Award, GraduationCap, MapPin, Calendar, Building2, BookOpen } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import CoursePopup from "./ui/course-popup";
import { useState, useRef, useEffect } from "react";

function CourseworkTag({ 
  courseworkItem, 
  index, 
  onClick 
}: { 
  courseworkItem: { short_name: string; course: { number: string; title: string; description: string } }; 
  index: number;
  onClick: (courseworkItem: { short_name: string; course: { number: string; title: string; description: string } }, event: React.MouseEvent) => void;
}) {
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
      onClick={(e) => onClick(courseworkItem, e)}
      className="px-3 py-2 bg-background/60 backdrop-blur-sm rounded-lg text-[12px] sm:text-[13px] font-medium border border-purple-500/20 shadow-sm hover:border-purple-500/40 transition-all duration-300 cursor-pointer text-center whitespace-nowrap flex-shrink-0"
    >
      {courseworkItem.short_name}
    </motion.div>
  );
}

export default function EducationSection() {
  const [selectedCourse, setSelectedCourse] = useState<{ number: string; title: string; description: string } | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const clickedElementRef = useRef<HTMLElement | null>(null);

  const handleCourseClick = (courseworkItem: { short_name: string; course: { number: string; title: string; description: string } }, event: React.MouseEvent) => {
    const element = event.currentTarget as HTMLElement;
    clickedElementRef.current = element;
    
    const rect = element.getBoundingClientRect();
    setPopupPosition({
      x: rect.left + rect.width / 2,
      y: rect.top
    });
    setSelectedCourse(courseworkItem.course);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedCourse(null);
    clickedElementRef.current = null;
  };

  // Update popup position on scroll
  useEffect(() => {
    const updatePosition = () => {
      if (clickedElementRef.current && isPopupOpen) {
        const rect = clickedElementRef.current.getBoundingClientRect();
        setPopupPosition({
          x: rect.left + rect.width / 2,
          y: rect.top
        });
      }
    };

    if (isPopupOpen) {
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
    }

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isPopupOpen]);

  return (
    <section
      id="education"
      className="py-12 bg-gradient-to-b from-muted/30 to-background dark:from-muted/10"
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
                {edu.activities && edu.activities.length > 0 && (
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
                      {edu.activities.map((activity, i) => (
                        <motion.li
                          key={i}
                          className="text-muted-foreground relative pl-6"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                          viewport={{ once: true }}
                        >
                          {activity}
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
              <div className="flex flex-wrap gap-3">
                {coursework.map((courseworkItem, index) => (
                  <CourseworkTag 
                    key={courseworkItem.short_name || index} 
                    courseworkItem={courseworkItem} 
                    index={index} 
                    onClick={handleCourseClick}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Course Description Popup */}
      <CoursePopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title={selectedCourse?.title || ""}
        description={selectedCourse?.description || ""}
        courseNumber={selectedCourse?.number}
        position={popupPosition}
      />
    </section>
  );
}