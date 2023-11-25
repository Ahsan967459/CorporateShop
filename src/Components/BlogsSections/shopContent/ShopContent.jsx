import { useLoaderData } from "react-router-dom";
import { StoreDonateData, removeToLs } from "../../LocalStorage/LocalStorage";
import ShopContentBlog from "./shopContentBlog";
import { useContext, useEffect, useState } from "react";
import { SeacheValueContext } from "../../root/Root";
import Footer from "../../footer/Footer";
import AllData from "../../../../public/shopdata.json"

const ShopContent = () => {
    //from localStorage..........
    const Data=StoreDonateData();
    //const AllData=useLoaderData();
    const [shopData,setShopData]=useState([]);
    const {shopItemCount,setShopItemCount}=useContext(SeacheValueContext);
   //get shop data from localStorage id.......
    useEffect(()=>{
        const filterData=[];
        for(const shopId of Data){
            for(const shopD of AllData)
            if(shopId==shopD.id){
               filterData.push(shopD);
            }
        }
        setShopData(filterData)
    },[shopData.length])


        //remove buy shopBlogs..........
        const removeShopBlogs = (idx) => {
            const newShopData = [...shopData];
            newShopData.splice(idx, 1);
            setShopData(newShopData);
        };
    
    const RemoveShopContent=(Id)=>{
        let idxOfRemoveCon; 
        for (let i = 0; i < Data.length; i++) {
          
          
            if (shopData[i].id === Id) {
              console.log("same");
              idxOfRemoveCon =i;
              break;
            }
          }
          
        if(idxOfRemoveCon!=undefined){
            removeToLs(Id);
            removeShopBlogs(idxOfRemoveCon);
        }
        setShopItemCount(shopItemCount-1);
    }

    return (
        <>
            {
                shopData.length ?
                <div className="mt-2 min-h-[500px] md:min-h-[600px] min-lg:h-[630px] bg-white">
                    <div className="p-4 grid lg:grid-cols-2 gap-2 rounded">
                        {
                        shopData.map((data,idx)=><ShopContentBlog key={idx} data={data} RemoveShopContent={RemoveShopContent}  shopData={data}/>)
                        } 

                    </div>                                 
                </div>
                :
                <div className="h-[500px] md:h-[600px] lg:h-[630px] bg-white mt-2 rounded flex items-center justify-center">
                    <div className="text-3xl text-black font-bold"><p>You haven't bought anything.</p></div>
                </div>

            }
           <Footer></Footer>
        </>

    );
};

export default ShopContent;