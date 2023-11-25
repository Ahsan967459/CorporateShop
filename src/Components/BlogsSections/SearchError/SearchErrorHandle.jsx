const SearchErrorHandle = () => {
    return (
        <div className="w-full col-span-4 h-[440px] md:h-[580px] lg:h-[700px] bg-white text-black rounded flex justify-center items-center">
            <div>
               <p className="text-3xl font-semibold text-center"> Can't Find any items this category.</p>
               <p className="text-2xl font-semibold">Please, Search category name like Dress,Furniture,Sport</p>
            </div>
        </div>
    );
};

export default SearchErrorHandle;