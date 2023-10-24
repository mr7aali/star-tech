

const Banner = () => {
    return (
        <div className="max-w-[1290px] mx-auto h-[500px] gap-5 grid grid-cols-12 my-8">
            <div className="bg-[red] col-span-9"></div>


            <div className=" gap-5 col-auto grid grid-rows-2 col-start-10 col-end-13">



                <div className="bg-[#ffe8a1]">
                    <h3 className="text-center">Compare Products</h3>
                    <p className="text-center">Choose Two Products to Compare</p>


                    <div  className="mx-5">
                    {/* <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/> */}
                        <input className="w-full my-2 outline-none py-2 pl-2 placeholder:text-[14px] before rounded-sm" placeholder="Search & Select Product" type="text" name="" id="" />
                        <input className="w-full my-2 outline-none py-2 pl-2 placeholder:text-[14px] before rounded-sm" placeholder="Search & Select Product" type="text" name="" id="" />
                        <input className="w-full my-2 outline-none py-2 pl-2 placeholder:text-[14px] before rounded-sm" type="button"  name="" id="" />
                    </div>


                </div>



                <div className="bg-[black]"></div>
            </div>



        </div>
    );
};

export default Banner;