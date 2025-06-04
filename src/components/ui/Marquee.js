import React from "react";

const Marquee = () => {
  return (
    <div className="px-4 mx-auto my-6 max-w-7xl sm:px-6 lg:px-8">
      <div className="relative px-5 py-3 overflow-hidden bg-white rounded-full shadow-md">
        <div className="px-3 text-sm font-medium text-gray-800 animate-marquee whitespace-nowrap">
          <p>
            {" "}
            26th October Thursday, our all outlets are open. Additionally, our
            online activities are open and operational.
          </p>
        </div>
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
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
