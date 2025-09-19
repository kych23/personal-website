import ThemeToggle from "./ui/theme-toggle";
import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full px-4">
      {/* Oval Background Overlay */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[90%] max-w-4xl h-16 bg-white/10 dark:bg-black/10 backdrop-blur-2xl rounded-full border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 dark:shadow-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative container max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          className="flex items-center text-lg font-semibold text-foreground"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {personalInfo.name}
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {["education", "experience", "skills", "projects"].map(
            (item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="transition-all duration-300 hover:text-foreground text-foreground/70 hover:scale-105 px-3 py-2 rounded-full hover:bg-background/20"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            )
          )}
        </nav>

        <div className="flex items-center space-x-3">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground rounded-full hover:bg-background/20 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden relative z-40 mx-4 mt-2 rounded-2xl bg-background/90 dark:bg-background/70 backdrop-blur-xl border border-border/20 shadow-xl"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col p-4 space-y-2 text-sm font-medium">
              {["experience", "skills", "projects", "education"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="transition-all duration-300 hover:text-foreground text-foreground/70 hover:bg-background/20 px-4 py-3 rounded-xl"
                    onClick={toggleMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
