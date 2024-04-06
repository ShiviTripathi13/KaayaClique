import React, { useEffect } from "react";
import {NavLink} from "react-router-dom";
import logo from "../../assets/icons/Logo KaayaClique.png";
import menuicon from "../../assets/icons/icon-menu.png";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../context/authContext";


const Header = () => {
    const [userdata, setUserdata] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [auth, setAuth] = useAuth();
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Credentials": true,
    }
    const getGoogleUserData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/login/sucess", { withCredentials: true, headers: headers });
            
            setUserdata(response.data.user);
            // console.log("response data user", response);
        } catch (err) {
            console.log("error", err);
        }
    }

    const changeIsopen = () => {
        setIsOpen(!isOpen);
    }
    // logoout
    const logout = ()=>{
        // google logout handler
        if(Object?.keys(userdata)?.length > 0) {window.open("http://localhost:8000/logout","_self")}
        else{
            // logout handler
            setAuth({
                ...auth,
                user: null,
                token: ""
            });
            
            localStorage.removeItem("auth");
           
        }
    }

    useEffect(() => {
        getGoogleUserData()
        },
        []
    );
    return (
        <>        
        <header className="shadow-lg shadow-stone-300 bg-gradient-to-b from-pink-300 to-pink-50 font-serif font-semibold text-gray-100 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 ">
            <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                <div>
                    <img className="h-12 rounded-full" src={logo} alt="KaayaClique"/>
                    
                </div>
                <div><h1 className="text-2xl p-2 text-red-500 font-serif">KaayaClique</h1></div>
                <div className="sm:hidden ">
                    <button onClick={changeIsopen} className="block text-gray-500 hover:text-white pointer-events-auto focus:text-white focus:outline-none">
                        <img  src={menuicon} alt="menu" className="h-6 w-6 fill-current"/>
                    </button>
                </div>
            </div>
            <nav className= { `${isOpen ? 'grid justify-center' : 'hidden' } px-2 pt-2 pb-4 sm:flex sm:p-0 sm:justify-center`}>
                
                <NavLink to="/" className="  px-2 py-1 text-red-500 font-semibold rounded hover:bg-pink-50">Category</NavLink>
                <NavLink to="/" className="  px-2 py-1 text-red-500 font-semibold rounded hover:bg-pink-50">Brand</NavLink>
                <NavLink to="/" className="  px-2 py-1 text-red-500 font-semibold rounded hover:bg-pink-50">Home</NavLink>
                
                { (Object?.keys(userdata)?.length > 0) || (auth.user) ? (
                    <>
                        <NavLink to="/dashboard" className="mt-1  px-2 py-1 text-red-500 font-semibold rounded hover:bg-pink-50 sm:mt-0 sm:ml-2">Dashboard</NavLink>
                        <NavLink id = "cartimg" to="/cart" className=" px-2 py-1 text-red-500 font-semibold rounded hover:bg-pink-50 sm:mt-0 sm:ml-2">
                            {/* <img  src = {cart} className=" w-50 h-auto"></img> */}
                            Cart
                        </NavLink>
                        <NavLink onClick={logout} to="/" className="  mr-8 block px-2 py-1 text-red-500 font-semibold rounded hover:bg-pink-50 sm:mt-0 sm:ml-2" >Logout</NavLink>
                    </>
                ) : (
                <>
                
                    <NavLink to="/login" className="mt-1  block px-2 py-1 text-red-500 font-semibold rounded hover:bg-pink-50 sm:mt-0 sm:ml-2">Login</NavLink>
                    <NavLink to="/contact" className="mt-1  block px-2 py-1 text-red-500 font-semibold rounded hover:bg-pink-50 sm:mt-0 sm:ml-2">Contact Us</NavLink>
                </>
                )}
            </nav>
        </header>
        </>
    )
};

export default Header;