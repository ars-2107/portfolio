// LeetCodeCard.js
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
        <div className="flex justify-center items-center text-white">
          <p>Loading stats...</p>
        </div>
      ) : stats ? (
        <>
          <p className="text-md font-semibold mb-4 text-white flex justify-between items-center">
            <div>
              <Image src={LeetCodeIcon} alt={`Leetcode Icon`} className="mt-2 mx-2 mb-4 inline" width={36} height={36} />
              <h3 className="text-xl font-semibold text-white inline">ars2107_</h3>
            </div>
            <p className="text-md text-gray-500">#{stats.ranking}</p>
          </p>

          <div className="grid grid-cols-5 gap-2 items-start">
            <div className="flex justify-center align-middle col-span-2">
              <div className="flex justify-center items-center w-36 h-36 rounded-full relative">
                <svg width="100%" height="100%" viewBox="0 0 36 36" className="absolute transform rotate-180">
                  <circle cx="18" cy="18" r="16" stroke="#eee" strokeWidth="2" fill="rgba(107, 33, 168, 0.1)" />
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
                <p className="text-white text-sm mb-1">Easy Solved:</p>
                <div className="w-full bg-gray-300 rounded-full h-1">
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
                <p className="text-white text-sm mb-1">Medium Solved:</p>
                <div className="w-full bg-gray-300 rounded-full h-1">
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
                <p className="text-white text-sm mb-1">Hard Solved:</p>
                <div className="w-full bg-gray-300 rounded-full h-1">
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
        <div className="flex justify-center items-center text-white">
          <p>Unable to load stats. Please try again later.</p>
        </div>
      )}
    </div>
  );
};

export default LeetCodeCard;
