// components/HeroCard.tsx
export default function HeroCard() {
  return (
    <div className="hero-card-container w-full max-w-md mx-auto">
      <div className="hero-card-main relative bg-slate-800 rounded-xl overflow-hidden border border-white/10 p-1 animate-card-entrance group cursor-pointer">
        {/* Decorative Animated Border */}
        <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-xl hero-card-decorative-border" />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 hero-card-overlay" />

        {/* Image/Content */}
        <div className="relative h-96 w-full bg-slate-700 overflow-hidden rounded-lg">
          {/* Replace with your image */}
          <div className="hero-card-image w-full h-full bg-gradient-to-br from-slate-600 to-slate-800" />
        </div>

        {/* Floating UI Element */}
        <div className="absolute bottom-6 left-6 right-6 z-20 hero-card-ui bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center hero-card-ui-icon">
              🚀
            </div>
            <div>
              <h3 className="font-bold text-white">Project Launch</h3>
              <p className="text-xs text-slate-300">Ready for takeoff</p>
            </div>
          </div>
          <span className="hero-card-ui-arrow text-2xl">→</span>
        </div>
      </div>
    </div>
  );
}
