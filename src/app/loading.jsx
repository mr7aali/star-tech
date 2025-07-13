const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f7f8fa] to-white transition-colors duration-300">
      <div className="flex relative flex-col items-center space-y-8">
        {/* Gradient Spinner Animation */}
        <div className="flex relative justify-center items-center w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-t-4 border-[#3749bb] border-r-[#ef4a23] border-b-[#3749bb] border-l-[#ef4a23] animate-spin"></div>
          <div className="z-10 w-10 h-10 bg-white rounded-full"></div>
        </div>

        {/* Loading Text */}
        <h1 className="text-3xl font-bold text-[#3749bb] tracking-wide">
          Loading...
        </h1>

        {/* Subtext */}
        <p className="max-w-xs text-base text-center text-gray-600">
          Please wait while we fetch your content.
        </p>

        {/* Pulse Effect Dots */}
        <div className="flex mt-2 space-x-2">
          <div className="w-3 h-3 bg-[#3749bb] rounded-full animate-pulse animation-delay-0"></div>
          <div className="w-3 h-3 bg-[#ef4a23] rounded-full animate-pulse animation-delay-200"></div>
          <div className="w-3 h-3 bg-[#3749bb] rounded-full animate-pulse animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
