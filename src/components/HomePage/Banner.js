

const Banner = () => {
    return (
        <div className="max-w-[1290px] mx-auto h-[500px] grid grid-cols-12 my-8">
            <div className="bg-[red] col-span-9"></div>
            <div className="bg-[green] col-auto grid grid-rows-2 col-start-10 col-end-13">
                <div className="bg-[#ffe8a1]"></div>
                <div className="bg-[black]"></div>
            </div>
        </div>
    );
};

export default Banner;