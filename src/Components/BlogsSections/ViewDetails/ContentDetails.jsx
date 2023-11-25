import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { addToLs } from "../../LocalStorage/LocalStorage";
import data from "../../../../public/shopdata.json"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SeacheValueContext } from "../../root/Root";
import { useContext } from "react";

const ContentDetails = () => {
    const viewId=useParams();
    const {shopItemCount,setShopItemCount}=useContext(SeacheValueContext);
   // const data=useLoaderData();
    const viewContentData=data.find(item=>item.id===parseInt(viewId.id));

    const {img,name,short_description,price,description,id}=viewContentData;
    const BuyProduct=(id)=>{
        addToLs(id)
        setShopItemCount(shopItemCount+1);

        toast("Successfully buy and add shop list", {
            position: toast.POSITION.TOP_CENTER,
            className: "foo-bar"
          });
    }

    return (
        <div className="bg-blue-600 rounded-lg mt-2">
            <div className='mx-auto bg-white py-7 rounded-t-lg'>
                <img className='w-[200px] md:w-[260px] lg:w-[230px] mx-auto rounded' src={img} alt="donate image" />
            </div>
            <div className="p-4 flex flex-col justify-between ">
                <p className="w-fit bg-white text-black px-4 py-1 rounded">{name}</p>
                <h2 className='text-2xl text-black mt-3 font-semibold'>{short_description}</h2>

                <div className="mt-2 text-white">
                    <p>{description}</p>
                </div>
                
                <p style={{color:"black",fontWeight:600,marginTop:"7px"}}>Price: {price} tk</p>

                <div className="flex justify-end">
                        <button onClick={()=>BuyProduct(id)} className="px-5 py-2 mr-3 rounded bg-green-600 hover:bg-pink-600 text-white">Buy Now</button>
                        <NavLink to="/" className="px-5 py-2 rounded bg-green-600 hover:bg-pink-600 text-white">Back</NavLink>

                </div>

            </div>
        <ToastContainer/>

        </div>
    );
};

export default ContentDetails;