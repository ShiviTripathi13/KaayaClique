import React, { useEffect } from "react";
import {NavLink} from "react-router-dom";
import logo from "../../assets/icons/Logo KaayaClique.png";
import menuicon from "../../assets/icons/icon-menu.png";
import cart from "../../assets/icons/icon-shopping-cart.png";
import axios from "axios";
import { useState } from "react";


const Header = () => {
    const [userdata, setUserdata] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Credentials": true,
    }
    const getUserData = async () => {
        try{
            const response = await axios.get("http://localhost:8000/login/sucess", { withCredentials: true, headers: headers });
            console.log("response data user", response);
            setUserdata(response.data.user);
        } catch(err){
            console.log("error", err);
        }
    }
    const changeIsopen = () => {
        setIsOpen(!isOpen);
    }
    // logoout
    const logout = ()=>{
        window.open("http://localhost:8000/logout","_self")
    }

    useEffect(() => {
        getUserData()},
        []
    );
    return (
        // <div id="header" className="flex sm:w-screen bg-gradient-to-b from-pink-300 to-pink-50 font-serif font-semibold text-gray-100">
        //     <nav className="flex flex-row justify-start w-full p-4">
        //         <div id="header-left" className="flex flex-row justify-start w-full p-4">
        //             <ul className="flex flex-wrap">
        //             <li>
        //                 <img src={logo} alt="logo" className="w-8 h-8 m-2 justify-center rounded-full"/>
        //             </li>
        //             <li><h1 className="text-4xl  font-serif">KaayaClique</h1></li>
        //             </ul>
        //         </div>
        //         <div className="relative sm:hidden flex flex-row p-4 justify-center mx-auto  lg:block ">
        //             <input
        //                 className="border-2 border-pink-300 bg-gray-100 h-10 pl-2 pr-8 rounded-lg text-md text-slate-50 focus:outline-none"
        //                 type="search" name="search" placeholder=""/>
        //             <button type="submit" className="absolute right-0 top-2 mt-5 mr-6">
        //                 <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
        //                     version="1.1" id="Capa_1" x="0px" y="0px"
        //                     viewBox="0 0 56.966 56.966" 
                            
        //                     width="512px" height="512px">
        //                 <path
        //                 d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
        //                 </svg>
        //             </button>
        //         </div>
        //         <div id="header-right" className="flex flex-row justify-end  w-full text-xl m-6">
        //             <ul className="flex flex-wrap italic text-xl">
        //                 <li>
        //                     <NavLink to="/" className="mr-4 ml-4">Home</NavLink>
        //                 </li>
        //                 {
        //                     Object?.keys(userdata)?.length > 0 ? (
        //                         <>
                                
        //                         <li>
        //                              <NavLink to="/dashboard" className="m-4">Dashboard</NavLink>
        //                         </li>
                                
        //                         <li>
        //                             <h1 className=" text-yellow-200 font-bold inline-block">{userdata?.displayName}</h1>
        //                         </li>                                
        //                         {/* <li>
        //                             <img src={userdata?.image} alt="logo" className="w-8 h-8 m-2 justify-center rounded-full"/>
        //                         </li> */}
        //                         <li>
        //                              <NavLink to="/cart" className="m-4">
        //                                 <img src = {cart} className="flex w-50 h-50"></img>
        //                              </NavLink>
        //                         </li>
        //                         <li > <button onClick={logout} className="ml-4 italic text-xl inline-block" >Logout</button>
        //                         </li> 
        //                      </>
        //                     ) : <>
        //                         <li>
        //                             <NavLink to="/login" className="mr-4 ml-4">Login</NavLink>
        //                         </li>
        //                         <li>
        //                         <NavLink to="/contact" className="mr-4 ml-4">Contact Us</NavLink>
        //                         </li>
        //                         </>
        //                 }
                        
                        
                       
                            
        //             </ul>
        //         </div>
        //     </nav>
        // </div>
        <>
        
        <header className="bg-gradient-to-b from-pink-300 to-pink-50 font-serif font-semibold text-gray-100 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
            <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                <div>
                    <img className="h-12 rounded-full" src={logo} alt="KaayaClique"/>
                    
                </div>
                <div><h1 className="text-2xl p-2 text-red-500 font-serif">KaayaClique</h1></div>
                <div className="sm:hidden ">
                    <button onClick={changeIsopen} className="block text-gray-500 hover:text-white pointer-events-auto focus:text-white focus:outline-none">
                        {/* <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg> */}

                        <img  src={menuicon} alt="menu" className="h-6 w-6 fill-current"/>
                    </button>
                </div>
            </div>
            <nav className= { `${isOpen ? 'grid justify-center' : 'hidden' } px-2 pt-2 pb-4 sm:flex sm:p-0 sm:justify-center`}>
                <div className="relative sm:hidden block px-2 py-1  justify-center mx-auto  lg:block ">
                        <input
                         className="border-2 border-pink-300 bg-gray-100 h-8 w-50 pl-2 pr-8 rounded-lg text-md text-slate-50 focus:outline-none"
                         type="search" name="search" placeholder=""/>

                        <button type="submit" className="absolute right-0 bottom-4 mt-5 mr-4 sm:absolute sm:right-0 sm:bottom-3 sm:mt-5 sm:mr-4">
                            <svg className="text-gray-600 h-4  w-4 fill-current" xmlns="http:www.w3.org/2000/svg"
                             version="1.1" id="Capa_1" x="0px" y="0px"
                             viewBox="0 0 56.966 56.966" 
                            
                             width="512px" height="512px">
                                <path
                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                            </svg>
                        </button>
                </div>
                <NavLink to="/" className="  px-2 py-1 text-red-500 font-semibold rounded hover:bg-pink-50">Home</NavLink>
                { Object?.keys(userdata)?.length > 0 ? (
                    <>
                        <NavLink to="/dashboard" className="mt-1  px-2 py-1 text-red-500 font-semibold rounded hover:bg-pink-50 sm:mt-0 sm:ml-2">Dashboard</NavLink>
                        <NavLink id = "cartimg" to="/cart" className=" px-2 py-1 text-red-500 font-semibold rounded hover:bg-pink-50 sm:mt-0 sm:ml-2">
                            <img  src = {cart} className=" w-50 h-auto"></img>
                        </NavLink>
                        <button onClick={logout} className="  block px-2 py-1 text-red-500 font-semibold rounded hover:bg-pink-50 sm:mt-0 sm:ml-2" >Logout</button>
                    </>
                ) : (
                <>
                
                    <NavLink to="/login" className="mt-1  block px-2 py-1 text-red-500 font-semibold rounded hover:bg-pink-50 sm:mt-0 sm:ml-2">Login</NavLink>
                    <NavLink to="/contact" className="mt-1  block px-2 py-1 text-red-500 font-semibold rounded hover:bg-pink-50 sm:mt-0 sm:ml-2">Contact Us</NavLink>
                </>
                )}
                {/* <ul className="block  italic text-xl">
                    <li>
                        <NavLink to="/" className="mr-4 ml-4">Home</NavLink>
                    </li>
                    {
                        Object?.keys(userdata)?.length > 0 ? (
                            <>
                        
                            <li>
                                <NavLink to="/dashboard" className="m-4">Dashboard</NavLink>
                            </li>
                        
                            <li>
                                <h1 className=" text-yellow-200 font-bold text-sm">{userdata?.displayName}</h1>
                            </li>                                
                            {/* <li>
                                <img src={userdata?.image} alt="logo" className="w-8 h-8 m-2 justify-center rounded-full"/>
                            </li> */}
                            {/* <li>
                                <NavLink to="/cart" className="m-4">
                                    <img src = {cart} className=" w-50 h-50"></img>
                                </NavLink>
                            </li>
                            <li > <button onClick={logout} className="ml-4 italic text-xl " >Logout</button>
                            </li> 
                        </>
                        ) : <>
                            <li>
                                <NavLink to="/login" className="mr-4 ml-4">Login</NavLink>
                            </li>
                            <li>
                            <NavLink to="/contact" className="mr-4 ml-4">Contact Us</NavLink>
                            </li>
                            </>
                    }   
                </ul> */} 
            </nav>
        </header>
        

        
        </>
    )
};

export default Header;