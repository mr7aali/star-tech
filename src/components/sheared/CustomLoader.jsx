const CustomLoader = () => {
  return (
    <div className="max-w-[1290px] mx-auto mt-11 flex flex-wrap justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-16 h-16 border-4 border-orange-500 border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold text-center">Loading...</p>
      </div>
    </div>
  );
};

export default CustomLoader;
