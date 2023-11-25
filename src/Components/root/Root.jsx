import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import { StoreDonateData } from '../LocalStorage/LocalStorage';

export const SeacheValueContext=createContext("");

const Root = () => {

    let [shopItemCount,setShopItemCount]=useState(0);
    const [seacheValue,seacheCategoryVal]=useState("");
    const navigation=useNavigation();


    useEffect(()=>{
      const LocastorageData=StoreDonateData();
      const LsItemCount=LocastorageData.length;
      setShopItemCount(LsItemCount);
    },[]);

    const shopInf={seacheValue,shopItemCount,setShopItemCount}

    return (
      <>
        <div className='mx-5 md:container max-w-[1400px] md:mx-auto'>
            <Navbar seacheCategoryVal={seacheCategoryVal} shopItemCount={shopItemCount}></Navbar>

              <SeacheValueContext.Provider value={shopInf}>
              {
                navigation.state==="loading" ? 
                <div className="h-screen w-full flex justify-center items-center "> <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-error"></span> </div>
                :
                <Outlet/>
               }               
              </SeacheValueContext.Provider>

        </div>
      </>
    );
};

export default Root;