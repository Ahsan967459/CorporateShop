import { useContext, useEffect, useState } from 'react';
import HomeContent from './HomeContent';
import "../../CSS/HomeSection.css"
import { SeacheValueContext } from '../../root/Root';
import TopSell from '../shopContent/TopSellProduct/TopSell';
import Banner from '../../banner/Banner';
import Footer from '../../footer/Footer';
import Marquee from "react-fast-marquee";
import "react-toastify/dist/ReactToastify.css";

import data from "../../../../public/shopdata.json"
import SearchErrorHandle from '../SearchError/SearchErrorHandle';

const HomeSection = () => {

 
    const [filterData, setFilterData] = useState([]);
    const [allCategory, setAllCategory] = useState([]);
    const [showCategory, setShowCategory] = useState(null);
    const [searcheValidation,setSearchValidation]=useState(false);
    const { seacheValue } = useContext(SeacheValueContext);

    const NewData=data;

        // show default category content in the home page..........
        useEffect(() => {
            if(Array.isArray(data)){
                const sliceData = data.slice(0, 8);
                setFilterData(sliceData);
                setAllCategory(sliceData);
            }
        }, [data.length]);

        
    // All category set .............
    const AllCategory = () => {
        setFilterData(allCategory);
        setShowCategory(null);
        setSearchValidation(false);
    }

        
    // filtering data by category........
    const categoryFilter = (categoryName) => {
        const categoryData = data.filter(item => item.category.toLowerCase().includes(categoryName.toLowerCase()));
        setFilterData(categoryData);
        setShowCategory(categoryName);
        setSearchValidation(false);
    }

    // searchData filtering.............
    useEffect(() => {
        if (seacheValue !== "") {
            const searchData = NewData.filter(item => item.category.toLowerCase().includes(seacheValue.toLowerCase()));
            setFilterData(searchData);
            if(!searchData.length){
                setSearchValidation(true);
            }
        }
    }, [seacheValue, data]);


    return (
        <>
            <div className='hidden sm:block'>
                <div className="flex bg-white mt-3 pr-3 text-black rounded ">
                    <div className="w-[130px] text-center bg-pink-600 py-[6px] lg:py-[10px] rounded-l text-white"><p>Our Service</p></div>
                    <Marquee>
                        <p className='ml-[40px]'>Welcome to the online shop, where quality meets sophistication in every product we offer. Explore our corporate shop and discover a world of elegance and functionality.</p>
                        <p className='ml-[40px]'>Your satisfaction is our priority. We strive to provide a seamless shopping experience, from browsing our products to swift and secure delivery. Your feedback is valuable to us as we continually enhance our services.</p>
                    </Marquee>
                </div>
            </div>
            <div className="sm:hidden">
                <Banner></Banner>
            </div>

            <div className="md:grid md:grid-cols-5 mt-3 md:mt-3">
                <div className='md:pr-2'>
                    <div className='bg-white md:h-[100%] md:w-full text-black rounded-lg mb-2 md:mb-0 px-2 lg:px-9 py-3'>
                        <h2 className='text-2xl text-black font-bold my-1 md:my-0 md:mb-3 text-center'>Category</h2>

                        <ul className='flex flex-wrap md:block'>
                            <li onClick={() => AllCategory()} className='md:mb-2 mr-4 md:mr-0 mt-2 md:mt-5 md:mb-5'>
                                <div className={`rounded py-1 p-[6px] md:p-0 md:py-2 ${showCategory ? "bg-green-600" : "NavActive"}`}>
                                    <button className='w-full text-center px-3 text-white'>All</button>
                                </div>
                            </li>

                            <li onClick={() => categoryFilter("dress")} className='md:mb-2 mr-4 md:mr-0 mt-2 md:mt-5 md:mb-5'>
                                <div className={`rounded py-1 p-[6px] md:p-0 md:py-2 ${showCategory === "dress" ? "NavActive" : " bg-green-600"}`}>
                                    <button className='w-full text-center px-3 text-white'>Dress</button>
                                </div>
                            </li>

                            <li onClick={() => categoryFilter("furniture")} className='md:mb-2 mr-4 md:mr-0 mt-2 md:mt-5 md:mb-5'>
                                <div className={`rounded py-1 p-[6px] md:p-0 md:py-2 ${showCategory === "furniture" ? "NavActive" : " bg-green-600"}`}>
                                    <button className='w-full text-center px-3 text-white'>Furniture</button>
                                </div>
                            </li>

                            <li onClick={() => categoryFilter("sports")} className='md:mb-2 mr-4 md:mr-0 mt-2 md:mt-5 md:mb-5'>
                                <div className={`rounded py-1 p-[6px] md:p-0 md:py-2 ${showCategory === "sports" ? "NavActive" : " bg-green-600"}`}>
                                    <button className='w-full text-center px-3 text-white'>Sports</button>
                                </div>
                            </li>

                            <li>
                                <div className={`rounded py-1 p-[6px] md:p-0 md:py-2 ${showCategory === "electronics" ? "NavActive" : " bg-green-600"} md:mb-2 mr-4 md:mr-0 mt-2 md:mt-5 md:mb-5`}>
                                    <button className='w-full text-center px-3 text-white'>#Electronics</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
              
               {searcheValidation ? <SearchErrorHandle/> : <div className='col-span-4 grid md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    {filterData.map(contentData => <HomeContent key={contentData.id} contentData={contentData} />)}
                </div>
               }
            </div>

            <TopSell></TopSell>
            <Footer></Footer>
        </>
    );
};

export default HomeSection;
