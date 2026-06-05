import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  image: string;
  title: string;
  subtitle?: string;
  centerImage?: boolean;
  duration?: number;
  titleOnTop?: boolean;
}

const ImageSlider = ({ slides }: { slides: Slide[] }) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const duration = slides[current]?.duration || 6000;
    const timer = setInterval(next, duration);
    return () => clearInterval(timer);
  }, [next, current, slides]);

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
              <div className="flex-1 flex items-center justify-center pt-4 md:pt-8 w-full">
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  width={1200}
                  height={800}
                  fetchPriority={current === 0 ? "high" : "auto"}
                  decoding="async"
                  className="max-h-[45vh] md:max-h-[58vh] max-w-[95%] object-contain rounded-xl shadow-elevated"
                />
              </div>
              {slides[current].title && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="text-center pb-8 md:pb-12 pt-3 md:pt-4 space-y-1 md:space-y-2"
                >
                  <h1 className="text-xl md:text-4xl font-display font-bold text-primary leading-tight">
                    {slides[current].title}
                  </h1>
                  {slides[current].subtitle && (
                    <p className="text-lg md:text-3xl font-display font-bold text-primary leading-tight">
                      {slides[current].subtitle}
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          ) : slides[current].titleOnTop ? (
            <div className="w-full h-full flex flex-col bg-white">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="text-center pt-6 md:pt-10 pb-3 md:pb-6 px-4"
              >
                <h1 className="text-2xl md:text-5xl font-display font-bold text-primary leading-tight">
                  {slides[current].title}
                </h1>
                {slides[current].subtitle && (
                  <p className="text-sm md:text-lg text-muted-foreground mt-2">
                    {slides[current].subtitle}
                  </p>
                )}
              </motion.div>
              <div className="flex-1 overflow-hidden">
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  width={1600}
                  height={900}
                  fetchPriority={current === 0 ? "high" : "auto"}
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            <>
              <img
                src={slides[current].image}
                alt={slides[current].title}
                width={1600}
                height={900}
                fetchPriority={current === 0 ? "high" : "auto"}
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/60" />
              {/* Title at top */}
              <div className="absolute top-0 left-0 right-0 z-10">
                <div className="container">
                  <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground leading-tight pt-6 md:pt-10"
                  >
                    {slides[current].title}
                  </motion.h1>
                </div>
              </div>
              {/* Subtitle bottom-left, Buttons bottom-right */}
              <div className="absolute bottom-0 left-0 right-0 z-10">
                <div className="container pb-10 md:pb-14 flex items-end justify-between gap-4">
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="text-sm sm:text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-md"
                  >
                    {slides[current].subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col sm:flex-row gap-2 sm:gap-3 shrink-0"
                  >
                    <a href="/contact" className="px-5 sm:px-7 py-2 sm:py-2.5 bg-gold text-accent-foreground rounded-md font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base text-center">
                      Apply Now
                    </a>
                    <a href="/about" className="px-5 sm:px-7 py-2 sm:py-2.5 border border-primary-foreground/30 text-primary-foreground rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors text-sm sm:text-base text-center">
                      Learn More
                    </a>
                  </motion.div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/30 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/30 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-6 md:w-8" : "bg-primary/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
