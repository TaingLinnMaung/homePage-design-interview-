import { buttonInsideClass, buttonOutsideClass, mainPadding } from "../style/style";

export default function HeroSection() {
  const cols = 6;
  const rows = 7;

  const verticalLines = Array.from({ length: cols - 1 }, (_, i) => (
    <div
      key={`v-${i}`}
      className="absolute top-0 bottom-0 w-[1px] bg-white/30"
      style={{ left: `${((i + 1) * 100) / cols}%` }}
    />
  ));

  const horizontalLines = Array.from({ length: rows - 1 }, (_, i) => (
    <div
      key={`h-${i}`}
      className="absolute left-0 right-0 h-[1px] bg-white/30"
      style={{ top: `${((i + 1) * 100) / rows}%` }}
    />
  ));

  // Grid size
  const gridUnitWidth = 100 / cols;
  const gridUnitHeight = 100 / rows;

  return (
    <>
      <section className={`${mainPadding} relative w-full mt-8  text-white flex items-center justify-center `}>
        <div className="relative w-[100%]  h-[80vh] border border-neutral-800 rounded-md">
          {/* Grid lines */}
          {verticalLines}
          {horizontalLines}

          {/* Sparkles */}
          <div
            className={`absolute left-[.4%] top-[57%] -translate-x-1/2 -translate-y-1/2 text-white text-4xl`}
          >
            ✦
          </div>
          <div className="absolute top-[11.3%] left-[82.45%]  text-white text-4xl z-50">
            ✦
          </div>

          {/* Content exactly framed by the grid */}
          <div
            className="absolute bg-[#111] translate-x-[.5px] translate-y-[.5px] text-center shadow-lg px-8 py-10"
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
            <p className="text-sm md:text-base text-gray-400 mb-6 w-[60%] mx-auto">
              Write anything here something about yourself to showcase what
              actually you doing or targeting etc.
            </p>
            <div className={`${buttonOutsideClass}`}>
              <button
                className={`px-6 py-2 text-sm font-medium text-black shadow ${buttonInsideClass}`}
              >
                Hire me
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-[100vw] bottom-0 bg-white/30  h-[1px]"></div>
      </section>
      <div className={`${mainPadding} py-4 flex justify-between text-white text-xl`}>
        <div>Framer</div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.8572 0H11.1429V9.93067L4.12081 2.90862L2.90863 4.12081L9.93067 11.1429H0V12.8572H9.93066L2.90863 19.8792L4.12081 21.0913L11.1429 14.0693V24H12.8572V14.0693L19.8792 21.0913L21.0913 19.8792L14.0693 12.8572H24V11.1429H14.0693L21.0913 4.1208L19.8792 2.90862L12.8572 9.93066V0Z"
              fill="url(#paint0_linear_1_75)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_75"
                x1="0"
                y1="12"
                x2="24"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A87FB" />
                <stop offset="1" stop-color="#FFD49C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div>Workflow</div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.8572 0H11.1429V9.93067L4.12081 2.90862L2.90863 4.12081L9.93067 11.1429H0V12.8572H9.93066L2.90863 19.8792L4.12081 21.0913L11.1429 14.0693V24H12.8572V14.0693L19.8792 21.0913L21.0913 19.8792L14.0693 12.8572H24V11.1429H14.0693L21.0913 4.1208L19.8792 2.90862L12.8572 9.93066V0Z"
              fill="url(#paint0_linear_1_75)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_75"
                x1="0"
                y1="12"
                x2="24"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A87FB" />
                <stop offset="1" stop-color="#FFD49C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div>Figma</div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.8572 0H11.1429V9.93067L4.12081 2.90862L2.90863 4.12081L9.93067 11.1429H0V12.8572H9.93066L2.90863 19.8792L4.12081 21.0913L11.1429 14.0693V24H12.8572V14.0693L19.8792 21.0913L21.0913 19.8792L14.0693 12.8572H24V11.1429H14.0693L21.0913 4.1208L19.8792 2.90862L12.8572 9.93066V0Z"
              fill="url(#paint0_linear_1_75)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_75"
                x1="0"
                y1="12"
                x2="24"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A87FB" />
                <stop offset="1" stop-color="#FFD49C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div>Notion</div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.8572 0H11.1429V9.93067L4.12081 2.90862L2.90863 4.12081L9.93067 11.1429H0V12.8572H9.93066L2.90863 19.8792L4.12081 21.0913L11.1429 14.0693V24H12.8572V14.0693L19.8792 21.0913L21.0913 19.8792L14.0693 12.8572H24V11.1429H14.0693L21.0913 4.1208L19.8792 2.90862L12.8572 9.93066V0Z"
              fill="url(#paint0_linear_1_75)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_75"
                x1="0"
                y1="12"
                x2="24"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7A87FB" />
                <stop offset="1" stop-color="#FFD49C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className=" w-[100vw]  bg-white/30  h-[1px]"></div>
    </>
  );
}
