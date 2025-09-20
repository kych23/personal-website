import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

interface CoursePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  position: { x: number; y: number };
  courseNumber?: string;
}

export default function CoursePopup({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  position,
  courseNumber
}: CoursePopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          ref={popupRef}
          className="fixed z-50 w-80 max-w-sm"
          style={{
            left: Math.min(position.x, window.innerWidth - 320), // Keep within viewport
            top: Math.max(position.y - 10, 10), // Keep within viewport
          }}
        >
          <div className="bg-background/95 backdrop-blur-sm rounded-lg border border-purple-500/20 shadow-xl">
            {/* Header */}
            <div className="p-4 border-b border-purple-500/20">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  {courseNumber && (
                    <p className="text-sm text-purple-500 font-medium mb-1">{courseNumber}</p>
                  )}
                  <h3 className="text-lg font-semibold text-foreground leading-tight">{title}</h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-md hover:bg-muted/50 transition-colors flex-shrink-0"
                  aria-label="Close popup"
                >
                  <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4">
              <p className="text-muted-foreground leading-relaxed text-sm">
                {description}
              </p>
              <div className="mt-3 pt-3 border-t border-purple-500/20">
                <p className="text-xs text-muted-foreground">
                  Part of Cornell CS curriculum
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
