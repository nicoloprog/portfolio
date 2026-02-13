"use client";
import Link from "next/link";
import { use, useEffect, useRef } from "react";
export default function HeroCard() {
  // On précise le type <HTMLVideoElement> et on initialise à null
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Maintenant TypeScript sait que c'est une vidéo et accepte playbackRate
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="hero-card-container w-full max-w-2xl mx-auto">
      <Link href="#contact" className="block">
        <div className="hero-card-main relative bg-slate-800 rounded-xl overflow-hidden border border-white/10 p-1 animate-card-entrance group cursor-pointer">
          {/* Decorative Border */}
          <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-xl hero-card-decorative-border" />

          {/* Video Section */}
          <div className="relative h-86 md:h-120 w-full bg-slate-700 overflow-hidden rounded-lg">
            <video
              ref={videoRef}
              src="/technologie.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Floating UI Card */}
          <div className="absolute bottom-6 left-6 right-6 z-20 hero-card-ui bg-gray-800/80 backdrop-blur-md border border-white/10 rounded-lg p-4 flex items-center justify-between transition-all group-hover:bg-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <img
                  src="/hacker.gif"
                  alt="icon"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div>
                <h3 className="font-bold text-white">
                  Lancement d'un site web
                </h3>
                <p className="text-xs text-slate-300">Propulsez votre idée !</p>
              </div>
            </div>
            <div className="hero-card-ui-arrow text-2xl transition-transform group-hover:translate-x-1">
              →
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
