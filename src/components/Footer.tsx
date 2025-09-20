import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Code, Github, Linkedin, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/10 py-6 bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Left side - Built with */}
          <motion.p
            className="text-sm text-muted-foreground flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            Built with{" "}
            <motion.span
              className="inline-block mx-1"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Code className="w-4 h-4 text-purple-500" />
            </motion.span>
          </motion.p>

          {/* Center - Social Media Links */}
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={personalInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Right side - Copyright */}
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
