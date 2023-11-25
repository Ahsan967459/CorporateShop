import { NavLink } from "react-router-dom";


const ErrorElement = () => {
    return (
    <div className="flex justify-center items-center">
            <div className="w-full h-screen p-5 bg-white rounded-lg flex flex-col justify-center items-center relative">

            <div> <p className="text-green-700 font-semibold text-center mr-6 text-4xl">OOOPS!</p>
            <p className="text-3xl text-red-700 font-semibold"><span>404</span> Page Not Found....</p></div>
            <NavLink to="/" className="mt-4 bg-blue-600 py-1 px-4 text-white rounded">Go Home</NavLink>
            </div>

          </div>    );
};

export default ErrorElement;