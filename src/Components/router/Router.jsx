import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Navbar from "../navbar/Navbar";
import HomeSection from "../BlogsSections/homePage/HomeSection";
import ContentDetails from "../BlogsSections/ViewDetails/ContentDetails";
import ShopContent from "../BlogsSections/shopContent/ShopContent";
import Signin from "../BlogsSections/SigninSignUp/Signin";
import SignUp from "../BlogsSections/SigninSignUp/SignUp";
import PrivateBlogs from "../Provider/PrivateBlogs";
import BecomeSeller from "../BlogsSections/becomeSeller/BecomeSeller";
import ErrorElement from "../ErrorElement/ErrorElement";


const routers=createBrowserRouter([
    {
        path:"/",
        errorElement:<ErrorElement/>,
        element:<Root/>,
        children:[{
            path:"/",
            element:<HomeSection/>,
            loader:()=>fetch("../../../../public/shopdata.json")
        },
        {
            path:"/content/details/:id",
            element:<PrivateBlogs><ContentDetails/></PrivateBlogs>,
            loader:()=>fetch("../../../../public/shopdata.json")
        },
        {
            path:"/shopcontent",
            element:<PrivateBlogs><ShopContent/></PrivateBlogs>,
            loader:()=>fetch("../../../../public/shopdata.json")
        },
        {
            path:"/signin",
            element:<Signin></Signin>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
            path:"/signout",
            element:<Signin/>
        },
        {
            path:"/becomeSeller",
            element:<PrivateBlogs><BecomeSeller/></PrivateBlogs>
        }
        ]
    }
])

export default routers;