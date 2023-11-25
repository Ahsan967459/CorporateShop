import { useState } from "react";
import Footer from "../../footer/Footer";

const BecomeSeller = () => {
     
    const [createSuccess,setCreateBecomeAcc]=useState(null);

    const SuccesfullyCreate=(e)=>{
           e.preventDefault();
           setCreateBecomeAcc(true)
           e.target.email.value="";
           e.target.phone.value="";
          
    }

    

    return (
        <div className="relative text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0 mt-2">
                <div className=" bg-[rgb(255,99,71)]">
                    <div className="p-2">
                        <h2 className="text-white text-4xl sm:text-6xl font-bold">Bangladesh's #1 <br></br>Marketplace</h2> 
                        <p className="text-2xl font-semibold text-white mr-2 mt-3">Create a Online shop seller account 5 minutes and reach millons of customers today!</p>
                  </div>
                  <div className="w-full mt-4">
                    <img className="w-full" src="https://i.ibb.co/0hzKLmn/undefined.webp" alt="" />
                  </div>
                </div>
                <div className=" bg-[rgb(255,99,71)] flex flex-col items-center justify-center pb-3">
                    <div className="lg:flex text-white justify-center items-center mt-4 text-center">
                        <h3>
                            Want to sell from overseas to Bangladesh?
                        </h3><button className="ml-3 border-2 border-white py-1 px-2 rounded-lg">Register as Global Seller</button>
                    </div>
                    <div className="w-11/12 md:w-9/12 bg-white  md:p-2 rounded-lg p-[2px] text-black flex flex-col mt-5">
                        <h3 className="text-3xl text-black text-center">Create an Account</h3>
                        <p className="text-gray-600 text-center mt-2">Welcome! Millions of Online shop users are waiting to buy your product.</p>


                        <form onSubmit={SuccesfullyCreate} className="flex flex-col items-center mt-3">
                            <label className="w-full w-11/12 md:w-11/12 mt-2" htmlFor="phone">Email :</label>
                            <input className="w-11/12 md:w-11/12 rounded py-[5px] px-3 bg-white border-[2px] border-black text-black mt-2" type="email" name="email" placeholder="Enter your contact email"  required/>

                            <label className="w-full w-11/12 md:w-11/12 mt-4" htmlFor="phone">Phone :</label>
                            <input className="w-11/12 md:w-11/12 rounded py-[5px] px-3 bg-white border-[2px] border-black text-black mt-2" type="number" name="phone" placeholder="your contact phone number"  required/>
                            <div>
                                <input type="submit"
                                  value="Create Account"  className="px-9 py-2 bg-blue-600 rounded my-5 text-white" />
                            </div>
                        </form>

                    </div>

                </div>
            </div>

         <div className="bg-white text-black p-8">
            <h2 className="text-5xl text-black mb-4 font-semibold">Why Sell on Online Shop</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Reach</h3>
                    <p>Millions of customers on Online shop, Bangladesh's most visited shopping destination</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Marketing Tools</h3>
                    <p>Find new customers & grow more with advertising and our whole range of marketing tools</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Support&Training</h3>
                    <p>Learn all about ecommerce for free and get help with seller support and Daraz University</p>
                </div>

                </div>
            </div>

           {
            createSuccess && <div className="w-full h-[100%] absolute bg-gray-600/70 z-10 flex flex-col justify-center items-center top-0">
                <div className="w-[400px] h-[200px] p-5 bg-white rounded-lg flex flex-col justify-center items-center relative">

                <div> <p className="text-[20px] text-green-700 font-semibold">Account Creation Successfully.</p><p className="text-[20px] text-red-700 font-semibold">Please, keep your email and phone number active at all times.</p></div>
                <div className="absolute bottom-3 right-4">
                    <button onClick={()=>setCreateBecomeAcc(false)} className="bg-green-600 text-white py-1 px-3 rounded" >Back</button>
                </div>

            </div>
         </div>
        }
      <Footer></Footer>
    </div>

    );
};

export default BecomeSeller;