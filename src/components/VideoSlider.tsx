import { Play } from "lucide-react";
import { useState } from "react";

interface Video {
  id: string;
  title: string;
  thumbnail?: string;
}

const VideoSlider = ({ videos }: { videos: Video[] }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="bg-secondary py-16">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">Campus Life</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Experience Sri Surya
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="relative rounded-xl overflow-hidden shadow-card group cursor-pointer aspect-video bg-muted">
              {activeVideo === video.id ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div onClick={() => setActiveVideo(video.id)} className="w-full h-full relative">
                  <img
                    src={video.thumbnail || `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/30 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-elevated">
                      <Play className="w-7 h-7 text-accent-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent">
                    <p className="text-primary-foreground text-sm font-medium">{video.title}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;
