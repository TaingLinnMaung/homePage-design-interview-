import React from 'react'
import { buttonInsideClass, buttonOutsideClass, mainPadding } from '../style/style'

const Footer = () => {
      const cols = 4;
  const rows = 3;

  let colsArr=[50,70,90]
  let rowsArr=[50,75]

  const verticalLines = Array.from({ length: cols - 1 }, (_, i) => (
    <div
      key={`v-${i}`}
      className="absolute top-0 bottom-0 w-[1px] bg-white/30"
      style={{ left: `${colsArr[i]}%` }}
    />
  ));

  const horizontalLines = Array.from({ length: rows - 1 }, (_, i) => (
    <div
      key={`h-${i}`}
      className="absolute left-0 right-0 h-[1px] bg-white/30"
      style={{ top: `${rowsArr[i]}%` }}
    />
  ));
  return (
    <>
    
    <div className={`${mainPadding} text-white py-5 mt-[100px] flex items-center mb-10`}>
        <div className='w-[60%]'>

         <h1 className="flex text-4xl  gap-4 items-center mb-10">
          Have idea about project?{" "}
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
        <p className='w-[100%] text-gray-400'>Write anything here something about yourself to showcase what actually you doing or targeting etc.</p>
        <div className={`${buttonOutsideClass} p-[1px] mt-10`}>
            <button className={`${buttonInsideClass} text-black px-3 py-1 text-md font-semibold`}>send us a message</button>
        </div>
        </div>
        <div className='w-[39%] h-100 relative'>
    {verticalLines}
          {horizontalLines}
          <div
            className={`absolute left-[50%] top-[49.5%] -translate-x-1/2 -translate-y-1/2 text-white text-4xl`}
          >
            ✦
          </div>
          <div className="absolute top-[70%] left-[67.4%]  text-white text-3xl z-50">
            ✦
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer