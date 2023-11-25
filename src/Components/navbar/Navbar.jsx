import { NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useContext, useRef} from "react";
import { context } from "../Provider/ContextProvider";
import PropTypes from "prop-types";


const Navbar = ({seacheCategoryVal,shopItemCount}) => {

    const {user, SignOut ,loading}=useContext(context);
    const searcheField=useRef(null);
    const navigate=useNavigate();
    //user signout.........
    const SignOutuser=()=>{
        SignOut()
            .then(()=>{
                navigate("/signin")
            })
    }

    //get seacheField value..........
    const handleSeach=()=>{
      const seacheValue=searcheField.current.value;
      seacheCategoryVal(seacheValue);
    }


    const NavLinks=<>
            <NavLink className="px-[1px]" to="/" >Home</NavLink><p className="text-black font-bold mx-2">|</p>
            <NavLink to="/becomeSeller" >Become a Seller</NavLink>
            <NavLink className="mt-4 md:hidden" to="/shopcontent" >Shop List</NavLink>

         </>


    return (
        <div className="text-white relative">
            <div className="navbar h-[55px] md:h-[60px] lg:h-[70px] bg-blue-600 lg:flex justify-between">
                <div>
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-base-100  w-[160px] rounded-md">
                        {
                            NavLinks
                        }
                    </ul>
                    </div>
                    <div>
                        <img className="h-[36px] md:h-[46px] lg:h-[50px]" src="https://i.ibb.co/q793FzP/pngegg.png" alt="Corporate Shop" />
                    </div>
               </div>
                <div className="NavLinksActive hidden lg:flex lg:ml-12 ">
                    <ul className="menu menu-horizontal px-1">
                    {
                            NavLinks
                        }
                    </ul>
                </div>

                <div>
                    <div className="text-white mr-3 text-[26px] md:text-[33px] hidden md:block relative">
                        <NavLink to="/shopcontent"  >
                            <FaCartShopping></FaCartShopping>

                        </NavLink>
                        {
                          shopItemCount !=0 &&   <div className="absolute bg-black text-[0.6rem] w-[14px] h-[14px] text-center font-semibold top-[-2px] right-[-1px] rounded-full "><p>{shopItemCount}</p></div>
                        }
  
                    </div>
                    <div>
                        <div className="hidden sm:block mr-3">
                            <input ref={searcheField} className="w-[160px] md:w-[200px] lg:w-[250px]  p-1 md:p-[5px]  bg-white text-black rounded-l-md"
                                type="text"
                                placeholder="Search by category name....."
                                />
                            <button onClick={handleSeach} className="bg-[#FF444A] p-1 md:p-[5px]  md:w-20 lg:w-[70px] rounded-r-md"
                                >Search</button>

                        </div>
                    </div>
                    {
                        user&&<div className="mr-3 flex flex-col items-center justify-center text-[.7rem]">
                        <img className="w-[35px] h-[35px] rounded-[50%] mb-[2px]" src="https://i.ibb.co/Vgfg0Fx/images-1.jpg"></img>

                            {  
                            user &&<><p className="hidden md:block">{user.displayName}</p></> 
                            }
                        </div>
                    }
                     <div>
                        {user ? <button onClick={SignOutuser} className="bg-black py-1 px-2 sm:py-2 sm:px-4 rounded text-white text-semibold">Sign out</button> : <NavLink to="/signin" className="bg-black py-2 px-4 rounded text-white text-semibold">Login</NavLink>}
                    </div>
                </div>
             </div>
        </div>    );
};
Navbar.propTypes={
    seacheCategoryVal:PropTypes.func,
    shopItemCount:PropTypes.number
}

export default Navbar;