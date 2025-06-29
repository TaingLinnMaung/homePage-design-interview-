import React from "react";
import { mainPadding } from "../style/style";

const Testimonial = () => {
  return (
    <>
      <div className={`${mainPadding} text-white py-4 mt-5 pt-10`}>
        <h1 className="flex text-4xl  gap-4 items-center mb-[90px]">
          Client testimonials{" "}
          <svg
            width="30"
            height="31"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5 36.5C15.469 27.9501 8.54135 21.0287 0 21.0287C8.56041 21.0287 15.5 14.0762 15.5 5.5C15.5309 14.0499 22.4586 20.9713 31 20.9713C22.4394 20.9713 15.5 27.9238 15.5 36.5Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.5 15.5C28.485 11.363 25.1329 8.0139 21 8.0139C25.1421 8.0139 28.5 4.64977 28.5 0.5C28.5149 4.63704 31.8671 7.9861 36 7.9861C31.8578 7.9861 28.5 11.3502 28.5 15.5Z"
              fill="white"
            />
          </svg>
        </h1>
        <div className="flex gap-[80px]">
          {/* box */}
          <div className="relative">

          <div className="  border border-gray-400 bg-[#101111] rounded-2xl px-4 py-6 w-[450px] bg-gradient-to-r inline-block from-[var(--secondary)]  to-[var(--primary)]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="text-gray-300">Client Name ,</div>
                  <div className="text-sm text-gray-500">Project Designer</div>
                </div>
              </div>
              <div>
                <svg
                  width="37"
                  height="27"
                  viewBox="0 0 45 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5579 23.6429C19.5579 28.6823 16.0877 32.5 10.807 32.5C5.52632 32.5 1 28.2241 1 20.5887C1 11.1207 8.09123 3.02709 17.2947 1.5V7.15025C12.014 8.21921 8.09123 12.0369 8.09123 16.4655C8.99649 15.8547 10.2035 15.3965 12.1649 15.3965C16.0877 15.3965 19.5579 18.298 19.5579 23.6429ZM44 23.6429C44 28.6823 40.3789 32.5 35.0982 32.5C29.9684 32.5 25.2912 28.2241 25.2912 20.5887C25.2912 11.1207 32.3825 3.02709 41.7368 1.5V7.15025C36.4561 8.21921 32.5333 12.0369 32.5333 16.3128C33.4386 15.702 34.7965 15.3965 36.607 15.3965C40.5298 15.3965 44 18.298 44 23.6429Z"
                    fill="url(#paint0_linear_1_180)"
                    stroke="url(#paint1_linear_1_180)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_180"
                      x1="43.8287"
                      y1="14.9836"
                      x2="1.15714"
                      y2="15.432"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7A87FB" />
                      <stop offset="1" stop-color="#FFD49C" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_180"
                      x1="1"
                      y1="2"
                      x2="47.5"
                      y2="33"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop
                        offset="0.294339"
                        stop-color="white"
                        stop-opacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="p-2 text-md text-gray-500 mt-6">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the{" "}
            </p>
          </div>
          <div className="absolute top-0 translate-x-[2px] translate-y-[2px] bg-[#101111] rounded-2xl px-4 py-6 w-[450px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="text-gray-300">Client Name ,</div>
                  <div className="text-sm text-gray-500">Project Designer</div>
                </div>
              </div>
              <div>
                <svg
                  width="37"
                  height="27"
                  viewBox="0 0 45 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5579 23.6429C19.5579 28.6823 16.0877 32.5 10.807 32.5C5.52632 32.5 1 28.2241 1 20.5887C1 11.1207 8.09123 3.02709 17.2947 1.5V7.15025C12.014 8.21921 8.09123 12.0369 8.09123 16.4655C8.99649 15.8547 10.2035 15.3965 12.1649 15.3965C16.0877 15.3965 19.5579 18.298 19.5579 23.6429ZM44 23.6429C44 28.6823 40.3789 32.5 35.0982 32.5C29.9684 32.5 25.2912 28.2241 25.2912 20.5887C25.2912 11.1207 32.3825 3.02709 41.7368 1.5V7.15025C36.4561 8.21921 32.5333 12.0369 32.5333 16.3128C33.4386 15.702 34.7965 15.3965 36.607 15.3965C40.5298 15.3965 44 18.298 44 23.6429Z"
                    fill="url(#paint0_linear_1_180)"
                    stroke="url(#paint1_linear_1_180)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_180"
                      x1="43.8287"
                      y1="14.9836"
                      x2="1.15714"
                      y2="15.432"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7A87FB" />
                      <stop offset="1" stop-color="#FFD49C" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_180"
                      x1="1"
                      y1="2"
                      x2="47.5"
                      y2="33"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop
                        offset="0.294339"
                        stop-color="white"
                        stop-opacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="p-2 text-md text-gray-500 mt-6">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the{" "}
            </p>
          </div>
          </div>
          {/* box */}
          {/* box */}
          <div className="relative">

          <div className="  border border-gray-400 bg-[#101111] rounded-2xl px-4 py-6 w-[450px] bg-gradient-to-r inline-block from-[var(--secondary)]  to-[var(--primary)]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="text-gray-300">Client Name ,</div>
                  <div className="text-sm text-gray-500">Project Designer</div>
                </div>
              </div>
              <div>
                <svg
                  width="37"
                  height="27"
                  viewBox="0 0 45 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5579 23.6429C19.5579 28.6823 16.0877 32.5 10.807 32.5C5.52632 32.5 1 28.2241 1 20.5887C1 11.1207 8.09123 3.02709 17.2947 1.5V7.15025C12.014 8.21921 8.09123 12.0369 8.09123 16.4655C8.99649 15.8547 10.2035 15.3965 12.1649 15.3965C16.0877 15.3965 19.5579 18.298 19.5579 23.6429ZM44 23.6429C44 28.6823 40.3789 32.5 35.0982 32.5C29.9684 32.5 25.2912 28.2241 25.2912 20.5887C25.2912 11.1207 32.3825 3.02709 41.7368 1.5V7.15025C36.4561 8.21921 32.5333 12.0369 32.5333 16.3128C33.4386 15.702 34.7965 15.3965 36.607 15.3965C40.5298 15.3965 44 18.298 44 23.6429Z"
                    fill="url(#paint0_linear_1_180)"
                    stroke="url(#paint1_linear_1_180)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_180"
                      x1="43.8287"
                      y1="14.9836"
                      x2="1.15714"
                      y2="15.432"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7A87FB" />
                      <stop offset="1" stop-color="#FFD49C" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_180"
                      x1="1"
                      y1="2"
                      x2="47.5"
                      y2="33"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop
                        offset="0.294339"
                        stop-color="white"
                        stop-opacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="p-2 text-md text-gray-500 mt-6">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the{" "}
            </p>
          </div>
          <div className="absolute top-0 translate-x-[2px] translate-y-[2px] bg-[#101111] rounded-2xl px-4 py-6 w-[450px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="text-gray-300">Client Name ,</div>
                  <div className="text-sm text-gray-500">Project Designer</div>
                </div>
              </div>
              <div>
                <svg
                  width="37"
                  height="27"
                  viewBox="0 0 45 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5579 23.6429C19.5579 28.6823 16.0877 32.5 10.807 32.5C5.52632 32.5 1 28.2241 1 20.5887C1 11.1207 8.09123 3.02709 17.2947 1.5V7.15025C12.014 8.21921 8.09123 12.0369 8.09123 16.4655C8.99649 15.8547 10.2035 15.3965 12.1649 15.3965C16.0877 15.3965 19.5579 18.298 19.5579 23.6429ZM44 23.6429C44 28.6823 40.3789 32.5 35.0982 32.5C29.9684 32.5 25.2912 28.2241 25.2912 20.5887C25.2912 11.1207 32.3825 3.02709 41.7368 1.5V7.15025C36.4561 8.21921 32.5333 12.0369 32.5333 16.3128C33.4386 15.702 34.7965 15.3965 36.607 15.3965C40.5298 15.3965 44 18.298 44 23.6429Z"
                    fill="url(#paint0_linear_1_180)"
                    stroke="url(#paint1_linear_1_180)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_180"
                      x1="43.8287"
                      y1="14.9836"
                      x2="1.15714"
                      y2="15.432"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7A87FB" />
                      <stop offset="1" stop-color="#FFD49C" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_180"
                      x1="1"
                      y1="2"
                      x2="47.5"
                      y2="33"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop
                        offset="0.294339"
                        stop-color="white"
                        stop-opacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="p-2 text-md text-gray-500 mt-6">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the{" "}
            </p>
          </div>
          </div>
          {/* box */}
        </div>
        <div className="flex gap-[50px] mt-[50px]">
          {/* box */}
          <div className="relative">

          <div className="  border border-gray-400 bg-[#101111] rounded-2xl px-4 py-6 w-[450px] bg-gradient-to-r inline-block from-[var(--secondary)]  to-[var(--primary)]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="text-gray-300">Client Name ,</div>
                  <div className="text-sm text-gray-500">Project Designer</div>
                </div>
              </div>
              <div>
                <svg
                  width="37"
                  height="27"
                  viewBox="0 0 45 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5579 23.6429C19.5579 28.6823 16.0877 32.5 10.807 32.5C5.52632 32.5 1 28.2241 1 20.5887C1 11.1207 8.09123 3.02709 17.2947 1.5V7.15025C12.014 8.21921 8.09123 12.0369 8.09123 16.4655C8.99649 15.8547 10.2035 15.3965 12.1649 15.3965C16.0877 15.3965 19.5579 18.298 19.5579 23.6429ZM44 23.6429C44 28.6823 40.3789 32.5 35.0982 32.5C29.9684 32.5 25.2912 28.2241 25.2912 20.5887C25.2912 11.1207 32.3825 3.02709 41.7368 1.5V7.15025C36.4561 8.21921 32.5333 12.0369 32.5333 16.3128C33.4386 15.702 34.7965 15.3965 36.607 15.3965C40.5298 15.3965 44 18.298 44 23.6429Z"
                    fill="url(#paint0_linear_1_180)"
                    stroke="url(#paint1_linear_1_180)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_180"
                      x1="43.8287"
                      y1="14.9836"
                      x2="1.15714"
                      y2="15.432"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7A87FB" />
                      <stop offset="1" stop-color="#FFD49C" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_180"
                      x1="1"
                      y1="2"
                      x2="47.5"
                      y2="33"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop
                        offset="0.294339"
                        stop-color="white"
                        stop-opacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="p-2 text-md text-gray-500 mt-6">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the{" "}
            </p>
          </div>
          <div className="absolute top-0 translate-x-[2px] translate-y-[2px] bg-[#101111] rounded-2xl px-4 py-6 w-[450px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="text-gray-300">Client Name ,</div>
                  <div className="text-sm text-gray-500">Project Designer</div>
                </div>
              </div>
              <div>
                <svg
                  width="37"
                  height="27"
                  viewBox="0 0 45 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5579 23.6429C19.5579 28.6823 16.0877 32.5 10.807 32.5C5.52632 32.5 1 28.2241 1 20.5887C1 11.1207 8.09123 3.02709 17.2947 1.5V7.15025C12.014 8.21921 8.09123 12.0369 8.09123 16.4655C8.99649 15.8547 10.2035 15.3965 12.1649 15.3965C16.0877 15.3965 19.5579 18.298 19.5579 23.6429ZM44 23.6429C44 28.6823 40.3789 32.5 35.0982 32.5C29.9684 32.5 25.2912 28.2241 25.2912 20.5887C25.2912 11.1207 32.3825 3.02709 41.7368 1.5V7.15025C36.4561 8.21921 32.5333 12.0369 32.5333 16.3128C33.4386 15.702 34.7965 15.3965 36.607 15.3965C40.5298 15.3965 44 18.298 44 23.6429Z"
                    fill="url(#paint0_linear_1_180)"
                    stroke="url(#paint1_linear_1_180)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_180"
                      x1="43.8287"
                      y1="14.9836"
                      x2="1.15714"
                      y2="15.432"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7A87FB" />
                      <stop offset="1" stop-color="#FFD49C" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_180"
                      x1="1"
                      y1="2"
                      x2="47.5"
                      y2="33"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop
                        offset="0.294339"
                        stop-color="white"
                        stop-opacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="p-2 text-md text-gray-500 mt-6">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the{" "}
            </p>
          </div>
          </div>
          {/* box */}
          {/* box */}
          <div className="relative">

          <div className="  border border-gray-400 bg-[#101111] rounded-2xl px-4 py-6 w-[450px] bg-gradient-to-r inline-block from-[var(--secondary)]  to-[var(--primary)]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="text-gray-300">Client Name ,</div>
                  <div className="text-sm text-gray-500">Project Designer</div>
                </div>
              </div>
              <div>
                <svg
                  width="37"
                  height="27"
                  viewBox="0 0 45 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5579 23.6429C19.5579 28.6823 16.0877 32.5 10.807 32.5C5.52632 32.5 1 28.2241 1 20.5887C1 11.1207 8.09123 3.02709 17.2947 1.5V7.15025C12.014 8.21921 8.09123 12.0369 8.09123 16.4655C8.99649 15.8547 10.2035 15.3965 12.1649 15.3965C16.0877 15.3965 19.5579 18.298 19.5579 23.6429ZM44 23.6429C44 28.6823 40.3789 32.5 35.0982 32.5C29.9684 32.5 25.2912 28.2241 25.2912 20.5887C25.2912 11.1207 32.3825 3.02709 41.7368 1.5V7.15025C36.4561 8.21921 32.5333 12.0369 32.5333 16.3128C33.4386 15.702 34.7965 15.3965 36.607 15.3965C40.5298 15.3965 44 18.298 44 23.6429Z"
                    fill="url(#paint0_linear_1_180)"
                    stroke="url(#paint1_linear_1_180)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_180"
                      x1="43.8287"
                      y1="14.9836"
                      x2="1.15714"
                      y2="15.432"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7A87FB" />
                      <stop offset="1" stop-color="#FFD49C" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_180"
                      x1="1"
                      y1="2"
                      x2="47.5"
                      y2="33"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop
                        offset="0.294339"
                        stop-color="white"
                        stop-opacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="p-2 text-md text-gray-500 mt-6">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the{" "}
            </p>
          </div>
          <div className="absolute top-0 translate-x-[2px] translate-y-[2px] bg-[#101111] rounded-2xl px-4 py-6 w-[450px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="text-gray-300">Client Name ,</div>
                  <div className="text-sm text-gray-500">Project Designer</div>
                </div>
              </div>
              <div>
                <svg
                  width="37"
                  height="27"
                  viewBox="0 0 45 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5579 23.6429C19.5579 28.6823 16.0877 32.5 10.807 32.5C5.52632 32.5 1 28.2241 1 20.5887C1 11.1207 8.09123 3.02709 17.2947 1.5V7.15025C12.014 8.21921 8.09123 12.0369 8.09123 16.4655C8.99649 15.8547 10.2035 15.3965 12.1649 15.3965C16.0877 15.3965 19.5579 18.298 19.5579 23.6429ZM44 23.6429C44 28.6823 40.3789 32.5 35.0982 32.5C29.9684 32.5 25.2912 28.2241 25.2912 20.5887C25.2912 11.1207 32.3825 3.02709 41.7368 1.5V7.15025C36.4561 8.21921 32.5333 12.0369 32.5333 16.3128C33.4386 15.702 34.7965 15.3965 36.607 15.3965C40.5298 15.3965 44 18.298 44 23.6429Z"
                    fill="url(#paint0_linear_1_180)"
                    stroke="url(#paint1_linear_1_180)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_180"
                      x1="43.8287"
                      y1="14.9836"
                      x2="1.15714"
                      y2="15.432"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7A87FB" />
                      <stop offset="1" stop-color="#FFD49C" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_180"
                      x1="1"
                      y1="2"
                      x2="47.5"
                      y2="33"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop
                        offset="0.294339"
                        stop-color="white"
                        stop-opacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="p-2 text-md text-gray-500 mt-6">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the{" "}
            </p>
          </div>
          </div>
          {/* box */}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
