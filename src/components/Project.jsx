import React from "react";
import { buttonOutsideClass, mainPadding } from "../style/style";

const Project = () => {
  return (
    <>
      <div className={`${mainPadding} text-white py-4 mt-5 pt-10`}>
        <h1 className="flex text-4xl  gap-4 items-center mb-[90px]">
          Some Featured projects{" "}
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
        <div className="bg-[#151515] my-5 p-20 flex rounded-lg">
          <div
            className={`bg-gradient-to-r inline-block from-[var(--secondary)]  to-[var(--primary)] h-[500px] w-[60%] rounded-none`}
          ></div>
          <div className="flex flex-col w-[39%] ps-20 justify-center gap-3 items-start ">
            <div className="py-[14px] px-[20px] h-[53px] inline-block border-1 rounded-full border-gray-400  bg-gradient-to-t inline-block from-gray-600 to-gray-1000 ">
              {" "}
              1
            </div>
            <h1 className="text-4xl text-bold">Project Name</h1>
          </div>
        </div>
        <div className="bg-[#151515] my-5 p-20 flex rounded-lg">
          <div
            className={`bg-gradient-to-r inline-block from-[var(--primary)]  to-[var(--secondary)] h-[500px] w-[60%] rounded-none`}
          ></div>
          <div className="flex flex-col w-[39%] ps-20 justify-center gap-3 items-start ">
            <div className="py-[14px] px-[20px] h-[53px] inline-block border-1 rounded-full border-gray-400  bg-gradient-to-t inline-block from-gray-600 to-gray-1000 ">
              {" "}
              2
            </div>
            <h1 className="text-4xl text-bold">Project Name</h1>
          </div>
        </div>
        <div className="bg-[#151515] my-5 p-20 flex rounded-lg">
          <div
            className={`bg-gradient-to-r inline-block from-[var(--secondary)]  to-[var(--primary)] h-[500px] w-[60%] rounded-none`}
          ></div>
          <div className="flex flex-col w-[39%] ps-20 justify-center gap-3 items-start ">
            <div className="py-[14px] px-[20px] h-[53px] inline-block border-1 rounded-full border-gray-400  bg-gradient-to-t inline-block from-gray-600 to-gray-1000 ">
              {" "}
              3
            </div>
            <h1 className="text-4xl text-bold">Project Name</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
