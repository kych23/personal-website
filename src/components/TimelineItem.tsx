import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Building2, Calendar, GraduationCap, MapPin, ExternalLink } from "lucide-react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  subtitle2?: string;
  date: string;
  location?: string;
  projectLink?: string;
  isLast?: boolean;
  index?: number;
  logoSrc?: string;
  logoAlt?: string;
  children?: React.ReactNode;
}

export default function TimelineItem({
  title,
  subtitle,
  subtitle2,
  date,
  location,
  projectLink,
  isLast = false,
  index = 0,
  logoSrc,
  logoAlt,
  children,
}: TimelineItemProps) {
  const [logoIsSquare, setLogoIsSquare] = React.useState<boolean | null>(null);

  return (
    <motion.div
      className="relative flex gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col items-center">
        {logoSrc ? (
          <motion.div
            className={cn(
              "flex h-16 w-16 rounded-lg border border-purple-500/30 z-10 overflow-hidden shadow-sm",
              logoSrc.includes("cornell_logo") 
                ? "bg-white" 
                : "bg-white dark:bg-muted",
              logoIsSquare === false ? "p-1" : ""
            )}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: index * 0.2 + 0.2,
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <img
              src={logoSrc}
              alt={logoAlt || subtitle}
              className={cn(
                "h-full w-full",
                logoIsSquare === false ? "object-contain" : "object-cover"
              )}
              onLoad={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (img.naturalWidth && img.naturalHeight) {
                  const ratio = img.naturalWidth / img.naturalHeight;
                  setLogoIsSquare(ratio > 0.9 && ratio < 1.1);
                }
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            className="flex h-[18px] w-[18px] rounded-full border border-purple-500/50 bg-background dark:bg-muted z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: index * 0.2 + 0.2,
            }}
            viewport={{ once: true, margin: "-50px" }}
          />
        )}
        {!isLast && (
          <motion.div
            className="w-px grow bg-gradient-to-b from-purple-500/50 to-pink-500/30 dark:from-purple-500/30 dark:to-pink-500/10"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          />
        )}
      </div>
      <div className={cn("pb-8", isLast ? "pb-0" : "")}>
        <motion.div
          className="flex flex-col gap-0.5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="font-medium text-base mb-1">{title}</h3>
          {subtitle2 && (
            <div className="flex items-center text-sm text-muted-foreground mb-1">
              <GraduationCap className="w-4 h-4 mr-2 text-purple-500" />
              <span className="font-medium">{subtitle2}</span>
            </div>
          )}
          <div className="flex items-center text-sm text-muted-foreground mb-1">
            <Building2 className="w-4 h-4 mr-2 text-purple-500" />
            {projectLink ? (
              <motion.a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                whileHover={{ scale: 1.02 }}
              >
                <span className="group-hover:underline">{subtitle}</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ) : (
              <span>{subtitle}</span>
            )}
          </div>
          {location && (
            <div className="flex items-center text-sm text-muted-foreground mb-1">
              <MapPin className="w-4 h-4 mr-2 text-purple-500" />
              <span>{location}</span>
            </div>
          )}
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Calendar className="w-4 h-4 mr-2 text-purple-500" />
            <span>{date}</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
