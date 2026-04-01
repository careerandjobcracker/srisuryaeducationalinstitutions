import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  centerImage?: boolean;
}

const ImageSlider = ({ slides }: { slides: Slide[] }) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full min-h-[60vh] md:min-h-[70vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          {slides[current].centerImage ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-white px-4">
              <div className="flex-1 flex items-center justify-center pt-4 md:pt-8">
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  className="max-h-[40vh] md:max-h-[55vh] object-contain rounded-xl shadow-elevated"
                />
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="text-center pb-8 md:pb-12 pt-3 md:pt-4 space-y-1 md:space-y-2"
              >
                <h1 className="text-xl md:text-4xl font-display font-bold text-primary leading-tight">
                  {slides[current].title}
                </h1>
                <p className="text-xs md:text-lg text-muted-foreground">
                  {slides[current].subtitle}
                </p>
              </motion.div>
            </div>
          ) : (
            <>
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
            </>
          )}
          {!slides[current].centerImage && (
            <div className="absolute inset-0 flex items-center">
              <div className="container">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="max-w-2xl space-y-6"
                >
                  <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight">
                    {slides[current].title}
                  </h1>
                  <p className="text-lg md:text-xl text-primary-foreground/80">
                    {slides[current].subtitle}
                  </p>
                  <div className="flex gap-4">
                    <a href="/contact" className="px-8 py-3 bg-gold text-accent-foreground rounded-md font-semibold hover:opacity-90 transition-opacity">
                      Apply Now
                    </a>
                    <a href="/about" className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors">
                      Learn More
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-8" : "bg-primary-foreground/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
