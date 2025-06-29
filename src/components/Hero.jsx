export default function HeroSection() {
  const cols = 6;
  const rows = 7;

  const verticalLines = Array.from({ length: cols - 1 }, (_, i) => (
    <div
      key={`v-${i}`}
      className="absolute top-0 bottom-0 w-px bg-white/30"
      style={{ left: `${((i + 1) * 100) / cols}%` }}
    />
  ));

  const horizontalLines = Array.from({ length: rows - 1 }, (_, i) => (
    <div
      key={`h-${i}`}
      className="absolute left-0 right-0 h-px bg-white/30"
      style={{ top: `${((i + 1) * 100) / rows}%` }}
    />
  ));

  // Grid size
  const gridUnitWidth = 100 / cols;
  const gridUnitHeight = 100 / rows;

  return (
    <section className="relative w-full h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="relative w-[90vw] max-w-7xl h-[80vh] border border-neutral-800 rounded-md">
        {/* Grid lines */}
        {verticalLines}
        {horizontalLines}

        {/* Sparkles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl">
          ✦
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-white text-xl">
          ✦
        </div>

        {/* Content exactly framed by the grid */}
        <div
          className="absolute bg-[#111]  text-center shadow-lg px-8 py-10"
          style={{
            left: `${gridUnitWidth}%`,
            right: `${gridUnitWidth}%`,
            top: `${gridUnitHeight}%`,
            bottom: `${gridUnitHeight * 3}%`,
          }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            I design and build clean websites
          </h1>
          <p className="text-sm md:text-base text-gray-400 mb-6">
            Write anything here something about yourself to showcase what
            actually you doing or targeting etc.
          </p>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-400 to-yellow-300 text-sm font-medium text-black shadow hover:opacity-90 transition">
            Hire me
          </button>
        </div>
      </div>
    </section>
  );
}
