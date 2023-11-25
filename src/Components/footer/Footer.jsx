import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='w-full p-9 bg-white mt-4 text-black rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-3'>
            <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 hidden sm:block">
                    <h2 className="font-bold text-black text-3xl">Board</h2>
                    <p>Discover exclusive designs crafted with precision to elevate your corporate gifting experience. Our products blend style and utility, making them the perfect choice for any professional occasion.</p>
                </div>

                <div className="md:ml-8 md:col-span-3 grid grid-cols-3 gap-2">
                    <div>
                        <h2 className="sm:text-2xl font-semibold">COMPANY</h2>
                        <ul className="">
                            <li><NavLink className="hover:bg-white py-[2px] px-2 rounded-lg">Product</NavLink></li>
                            <li className="my-1"><NavLink className="hover:bg-white py-[2px] px-2 rounded-lg">Features</NavLink></li>
                            <li><NavLink className="hover:bg-white py-[2px] px-2 rounded-lg">Digital Payments</NavLink></li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="sm:text-2xl font-semibold ml-1">HELP</h2>
                        <ul className="">
                            <li><NavLink className="hover:bg-white py-[2px] px-2 rounded-lg">Support</NavLink></li>
                            <li className="my-1"><NavLink className="hover:bg-white py-[2px] px-2 rounded-lg">About us</NavLink></li>
                            <li><NavLink className="hover:bg-white py-[2px] px-2 rounded-lg">Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="">
                       <h2 className="sm:text-2xl font-semibold">RESOURCES</h2>
                        <ul className="">
                            <li><NavLink className="hover:bg-white py-[2px] px-2 rounded-lg">Youtube Playlist</NavLink></li>
                            <li className="my-1"><NavLink className="hover:bg-white py-[2px] px-2 rounded-lg">How To- Blog</NavLink></li>
                            <li><NavLink className="hover:bg-white py-[2px] px-2 rounded-lg">Term & Conditions</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;