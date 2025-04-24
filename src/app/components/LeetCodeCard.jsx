import React from "react";
import { Roboto } from 'next/font/google';
import Image from "next/image";

import LeetCodeIcon from "../../../public/images/stats/leetcode-icon.svg";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const LeetCodeCard = ({ stats, loadingStats }) => {

  return (
    <div className={`bg-zinc-950 w-[550px] flex-none mx-5 shadow-md rounded-lg p-3 pr-6 border border-purple-800 mb-4 ${roboto.className}`}>
      {loadingStats ? (
        <div className="flex justify-center items-center text-white h-48 relative">
          <div className="w-10 h-10 border-4 border-purple-800 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : stats ? (
        <>
          <p className="text-md font-semibold text-white flex justify-between items-center">
            <div>
              <Image src={LeetCodeIcon} alt={`Leetcode Icon - ars portfolio apoorv sharma space developer`} className="mt-2 mx-2 mb-4 inline" width={36} height={36} />
              <h3 className="text-xl font-semibold text-white inline">ars2107_</h3>
            </div>
            <p className="text-md text-gray-500">#{stats.ranking}</p>
          </p>

          <div className="grid grid-cols-5 gap-2 items-start mb-2">
            <div className="flex justify-center align-middle col-span-2">
              <div className="flex justify-center items-center w-36 h-36 rounded-full relative">
                <svg width="100%" height="100%" viewBox="0 0 36 36" className="absolute transform rotate-180">
                  <circle cx="18" cy="18" r="16" stroke="#1C0E2B" strokeWidth="2" fill="rgba(0, 0, 0, 0)" />
                </svg>
                <svg width="100%" height="100%" viewBox="0 0 36 36" className="absolute transform -rotate-90">
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    stroke="#eab308"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="100.53"
                    strokeDashoffset={100.53 - (100.53 * (stats.totalSolved / stats.totalQuestions))}
                  />
                </svg>
                <p className="-z-0 text-white text-2xl font-bold">{stats.totalSolved}</p>
              </div>
            </div>

            <div className="col-span-3">
              <div className="mb-1">
                <p className="text-white text-sm mb-1">Easy</p>
                <div className="w-full bg-[#1C0E2B] rounded-full h-1">
                  <div
                    className="bg-green-500 h-1 rounded-full"
                    style={{ width: `${(stats.easySolved / stats.totalEasy) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {stats.easySolved} / {stats.totalEasy}
                </p>
              </div>

              <div className="mb-1">
                <p className="text-white text-sm mb-1">Medium</p>
                <div className="w-full bg-[#1C0E2B] rounded-full h-1">
                  <div
                    className="bg-yellow-500 h-1 rounded-full"
                    style={{ width: `${(stats.mediumSolved / stats.totalMedium) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {stats.mediumSolved} / {stats.totalMedium}
                </p>
              </div>

              <div className="mb-1">
                <p className="text-white text-sm mb-1">Hard</p>
                <div className="w-full bg-[#1C0E2B] rounded-full h-1">
                  <div
                    className="bg-red-500 h-1 rounded-full"
                    style={{ width: `${(stats.hardSolved / stats.totalHard) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {stats.hardSolved} / {stats.totalHard}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-48 text-purple-800 text-lg font-semibold">
          <svg className="mb-2" fill="#6b21a8" height="32px" width="32px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310.806 310.806">
            <path d="M305.095,229.104L186.055,42.579c-6.713-10.52-18.172-16.801-30.652-16.801c-12.481,0-23.94,6.281-30.651,16.801
              L5.711,229.103c-7.145,11.197-7.619,25.39-1.233,37.042c6.386,11.647,18.604,18.883,31.886,18.883h238.079
              c13.282,0,25.5-7.235,31.888-18.886C312.714,254.493,312.24,240.301,305.095,229.104z M155.403,253.631
              c-10.947,0-19.82-8.874-19.82-19.82c0-10.947,8.874-19.821,19.82-19.821c10.947,0,19.82,8.874,19.82,19.821
              C175.223,244.757,166.349,253.631,155.403,253.631z M182.875,115.9l-9.762,65.727c-1.437,9.675-10.445,16.353-20.119,14.916
              c-7.816-1.161-13.676-7.289-14.881-14.692l-10.601-65.597c-2.468-15.273,7.912-29.655,23.185-32.123
              c15.273-2.468,29.655,7.912,32.123,23.185C183.284,110.192,183.268,113.161,182.875,115.9z"/>
          </svg>
          <p className="mt-2">Unable to load stats. Please try again later.</p>
        </div>
      )}
    </div>
  );
};

export default LeetCodeCard;
