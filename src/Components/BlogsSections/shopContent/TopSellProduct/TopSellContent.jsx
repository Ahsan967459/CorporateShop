import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import PropTypes from "prop-types"

const TopSellContent = ({topCategoryContent}) => {
    const {img,name,short_description,price}=topCategoryContent;

    useEffect(()=>{
        AOS.init({duration: 1700});
    },[])

    return (
        <div data-aos="zoom-in" className="flex flex-col">
        <img className="h-[260px] md:h-[194px] lg:h-[220px] w-full rounded-t-[8px]" src={img} alt={short_description} />
        <div style={{backgroundColor:"blue",padding:"16px",flexGrow:"1",display:"flex",flexDirection:"column", borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px"}}>
            <div><span  style={{backgroundColor:"white",fontWeight:"600",color:"black",padding:"4px 10px",borderRadius: "4px"}}>{name}</span></div>
            <div className="grow">
                <h2 style={{color:"white" ,fontSize:"16px",fontWeight:"500",marginTop:"5px"}}>{short_description}</h2>
            </div>
            <div className="text-black bg-white px-2 py-1 text-semibold w-[120px] rounded mt-2">
                <p>Price: {price} tk</p>
            </div>
        </div>
    </div>
    );
};

TopSellContent.propTypes={
    topCategoryContent:PropTypes.object
}
export default TopSellContent;