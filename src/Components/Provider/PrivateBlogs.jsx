import { useContext } from "react";
import { context } from "./ContextProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivateBlogs = ({children}) => {
    const {user,loading}=useContext(context);
    const location=useLocation();

    if(loading){
        return <>
             <div className="h-screen w-full flex justify-center items-center "> <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-error"></span> </div>
        </>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/signin"></Navigate>
};

PrivateBlogs.propTypes={
    children:PropTypes.node
}
export default PrivateBlogs;