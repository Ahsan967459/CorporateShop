import { useEffect, useState } from "react";
import data from "../../../../../public/shopdata.json";
import TopSellContent from "./TopSellContent";
 

const TopSell = () => {

    const [topCategory,setTopCategory]=useState([]);
   
    useEffect(()=>{
        const TopSell=data.filter(items=>items?.top==="topSell");
        setTopCategory(TopSell)
    },[]);


    return (
        <div className="flex flex-col text-black bg-white mt-2 p-3 rounded">
            <h2 className="text-3xl font-semibold text-center">Top Master Class List</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 mt-5 p-2">
                {
                    topCategory.map(data=><TopSellContent key={data.id} topCategoryContent={data}></TopSellContent>)
                }
            </div>
            
        </div>
    );
};

export default TopSell;