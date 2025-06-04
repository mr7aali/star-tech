import React from "react";

const Marquee = () => {
  return (
    <div className="px-4 mx-auto my-6 max-w-7xl sm:px-6 lg:px-8">
      <div className="relative px-5 py-0 overflow-hidden bg-white rounded-full shadow-md">
        <div className="animate-marquee whitespace-nowrap">
          <div className="sliding_text_wrap px-[80px] py-2 text-sm font-medium text-gray-800">
            June 5, 2025, our all outlets are open. Additionally, our online
            activities are open and operational.
          </div>
        </div>
        <div className="absolute top-0 left-0 w-3 h-full bg-white rounded-full"></div>
        <div className="absolute top-0 right-0 w-3 h-full bg-white rounded-full"></div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
          display: inline-block;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .sliding_text_wrap {
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
