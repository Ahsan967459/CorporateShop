import PropTypes from "prop-types";
import { MdCancel } from "react-icons/md";

const ShopContentBlog = ({shopData,RemoveShopContent}) => {
   const {img,name,short_description,price,id}=shopData;
   
    return (
        <div className="flex text black items-center justify-between text-white bg-pink-600 md:mb-2 lg:mb-0 p-2 rounded">
            <div className="flex">
                <img className="w-[80px] md:w-[80px] lg-w-[90px] mr-2 rounded" src={img} alt="gg" />
                <div >
                    <p className="px-2 p-1 rounded bg-white text-black md:inline hidden md:block">{name}</p>
                    <h2>{short_description}</h2>
                    <p className="text-black">price: {price} tk</p>
                </div>
            </div>
            <button onClick={()=>RemoveShopContent(id)} className="mr-3 text-2xl">
               <MdCancel/>
            </button>
        </div>
    );
};

ShopContentBlog.propTypes={
    shopData: PropTypes.object,
    RemoveShopContent: PropTypes.func
}
export default ShopContentBlog;