import { NavLink } from "react-router-dom";
import { addToLs } from "../../LocalStorage/LocalStorage";
import PropTypes from 'prop-types';
import { useContext} from "react";
import { SeacheValueContext } from "../../root/Root";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const HomeContent = ({contentData}) => {
    const {img,short_description,name,price,id}=contentData;
    const {shopItemCount,setShopItemCount}=useContext(SeacheValueContext);
    

    //Buy Products.......
    const buyProduct=()=>{
        addToLs(id);
        setShopItemCount(shopItemCount+1);
        //Buy product successfully..........
        toast("Successfully buy and add shop list", {
            position: toast.POSITION.TOP_CENTER,
            className: "foo-bar"
          });
    }

    


    return (

            <div  className="grow flex flex-col">
                <img className="h-[260px] md:h-[194px] lg:h-[220px] w-full rounded-t-[8px]" src={img} alt={short_description} />
                <div style={{ backgroundColor: "blue", padding: "16px", flexGrow: "1", display: "flex", flexDirection: "column", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px" }}>
                    <div><span style={{ backgroundColor: "white", fontWeight: "600", color: "black", padding: "4px 10px", borderRadius: "4px" }}>{name}</span></div>
                    <div className="flex-grow">
                    <h2 style={{ color: "white", fontSize: "16px", fontWeight: "500", marginTop: "5px" }}>{short_description}</h2>
                    </div>
                    <div className="text-black bg-white px-2 py-1 text-semibold w-[120px] rounded mt-2">
                    <p>Price: {price} tk</p>
                    </div>
                    <div className="flex justify-between mt-3 text-white">
                    <NavLink to={`/content/details/${id}`} className="bg-green-600 text-center grow mr-1 py-2 hover:bg-pink-600 rounded">View Details</NavLink>
                    <button onClick={buyProduct} className="bg-green-600 hover:bg-pink-600 text-center grow mr-1 py-2 rounded">Buy Now</button>
                    </div>
                </div>
                <ToastContainer/>
            </div>
           

      

    );
};

HomeContent.propTypes={
    contentData: PropTypes.object
}

export default HomeContent;