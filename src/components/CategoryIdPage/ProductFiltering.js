

const ProductFiltering = () => {
    return (
        <div style={{ boxShadow: "0 1px 1px rgba(0,0,0,.1)" }} className="bg-white rounded-md flex justify-between py-3 items-center px-5">
            <div>
                <h3 className="text-black font-semibold">Printer</h3>
            </div>
            <div>
                <label className="font-semibold opacity-75" htmlFor="">Show:</label>
                <select className="bg-gray-100 rounded-sm mx-2 py-1 px-2">
                    <option value="">10</option>
                    <option value="">20</option>
                    <option value="">30</option>
                </select>
                <label className="font-semibold opacity-75" htmlFor="">Sort By:</label>
                <select className="bg-gray-100 rounded-sm mx-2 py-1 px-2">
                    <option value="">Default</option>
                    <option value=""> {"Price(Low > Hight)"} </option>
                    <option value="">{"Price(Low < Hight)"}</option>
                </select>

            </div>

        </div>
    );
};

export default ProductFiltering;