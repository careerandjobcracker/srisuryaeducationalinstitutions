import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EventVideo {
  id: string;
  title: string;
}

const EventVideoSlider = ({ videos, title }: { videos: EventVideo[]; title: string }) => {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % videos.length);
    setPlaying(false);
  }, [videos.length]);

  const prev = () => {
    setCurrent((c) => (c - 1 + videos.length) % videos.length);
    setPlaying(false);
  };

  useEffect(() => {
    if (playing) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next, playing]);

  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground">
            {title}
          </h2>
        </div>
        <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-elevated bg-muted">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videos[current].id}?autoplay=1`}
                  title={videos[current].title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  onClick={() => setPlaying(true)}
                  className="w-full h-full relative cursor-pointer group"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videos[current].id}/hqdefault.jpg`}
                    alt={videos[current].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/30 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold flex items-center justify-center shadow-elevated">
                      <Play className="w-7 h-7 md:w-9 md:h-9 text-accent-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent">
                    <p className="text-primary-foreground text-sm md:text-base font-medium">{videos[current].title}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary/30 transition-colors z-10"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary/30 transition-colors z-10"
            aria-label="Next video"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setPlaying(false); }}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-gold w-6 md:w-8" : "bg-muted-foreground/40"
                }`}
                aria-label={`Video ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventVideoSlider;
