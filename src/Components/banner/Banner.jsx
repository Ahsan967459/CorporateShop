const Banner = () => {
    return (
        <div className="text-black bg-blue-600">
         <div className="h-[200px] md:h-[360px] lg:h-[550px] bg-[url('https://i.ibb.co/FnmYwMX/MOS-Shopfront-202112.jpg')]  bg-center bg-no-repeat bg-cover bg-red-600 flex items-center justify-center relative mt-2">

            <div className="absolute">
                <div className="w-10/12 mx-auto text-center">
                    <h2 className="sm:text-2xl md:text-3xl lg:text-5xl font-bold">You can buy your necessary equipment our shop online.</h2>
                </div>    
                <div className="text-center mt-5">
                    <input className="w-[210px]  p-1 bg-white rounded-l-md"
                        type="text"
                        placeholder="Search by category name...."
                         />
                    <button className="bg-[#FF444A] p-1 md:p-2 lg:p-3 md:w-20 lg:w-[90px] rounded-r-md"
                        >Search</button>

                </div>
             </div>
          </div>


        </div>
    );
};

export default Banner;