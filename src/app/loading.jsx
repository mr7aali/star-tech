const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-300">
      <div className="relative flex flex-col items-center space-y-6">
        {/* Spinner Animation */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Loading...
        </h1>

        {/* Subtext */}
        <p className="max-w-xs text-sm text-center text-gray-600 dark:text-gray-300">
          Please wait while we fetch your content.
        </p>

        {/* Pulse Effect Dots */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse animation-delay-0"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse animation-delay-200"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
