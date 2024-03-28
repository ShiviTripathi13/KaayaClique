import React from "react";
import { NavLink } from "react-router-dom";
import google from "../assets/icons/google-ic.svg";
import loginimage from "../assets/images/login-page.jpeg";


const LoginAuth = () => {
    const loginWithGoogle = () => {
       window.open("http://localhost:8000/auth/google/callback", "_self");
    }
    return (
        
        //  <div className="flex flex-col justify-center border-blue-200 rounded-sm"> */}
        <div id= "authentication" className={" flex  lg:flex-row justify-center p-8 bg-gradient-to-b from-white via-pink-50 to-amber-50 w-screen min-h-screen"}>


            


            <div className={"grid grid-cols-2 sm:flex-wrap sm:justify-center basis-2/3  mt-12 mb-20 sm:mt-20 border border-gray-100 bg-slate-50 rounded-lg  w-auto h-auto"}>
                <div>
                {/* <form id={"authForm"} > */}
                <div className={"flex flex-wrap justify-center m-4 sm:basis-1/3 "}>
                    <h1 className={" font-serif text-center font-bold text-pink-500 text-xl sm:text-3xl animate-pulse italic "}>Login to continue</h1>
                </div>                
                <div className={"flex flex-col justify-end m-4"}>
                <label htmlFor="userName" className="items-start justify-start text-gray-500 font-serif font-semibold text-normal ml-3 mt-2">UserName</label>
                    <input id={"userName"}
                        type={"userName"}
                        placeholder={"Username"}
                        
                        autoComplete={"userName"}
                        className="items-start justify-start max-w-full mr-2 h-10 px-4 ml-2 mt-2 text-base bg-blue-100 placeholder-gray-400 italic font-serif border rounded-lg focus:shadow-outline"/>


                    <label htmlFor="email" className="items-start justify-start text-gray-500 font-serif font-semibold text-normal ml-3 mt-2">Email</label>
                    <input id={"email"}
                        type={"email"}
                        placeholder={"Email"}
                        
                        autoComplete={"email"}
                        className="items-start justify-start max-w-full mr-2 h-10 px-4 ml-2 mt-2 text-base bg-blue-100 placeholder-gray-400 italic font-serif border rounded-lg focus:shadow-outline"/>

                    <label htmlFor="password" className="items-start justify-start text-gray-500 font-serif font-semibold text-normal ml-3 mt-6">Password</label>
                    <input id={"password"}
                        type={"password"}
                        placeholder={"Password"}
                        
                        className="items-start justify-start max-w-full mr-2 h-10 px-4 ml-2 mt-2 text-base bg-blue-100 placeholder-gray-400 italic font-serif border rounded-lg focus:shadow-outline"></input>

                

                    <hr className={"bg-white mt-12 ml-6 mr-6"}></hr>
                    <p className={"text-center text-gray-300 mt-1"}>OR</p>
                    <span className={"text-center text-gray-300 mt-1"}>
                        Don't have an account?
                        <NavLink to={""} className={"text-cyan-500 underline ml-1 underline-offset-4 hover:text-cyan-300"}>   Sign Up Here</NavLink>
                    </span>
                    <button 
                        onClick={loginWithGoogle}
                        className=" mx-w-20 ml-4 mr-4 lg:ml-6 lg:mr-6 mt-6 mb-1 py-2 text-small font-medium text-center text-gray-50 bg-gradient-to-b from-blue-400 to-blue-300 rounded-lg  focus:ring-blue-200  hover:bg-gray-800">
                        <img src={google} alt={"google-icon"} className={" w-5 h-5 bg-white rounded-full inline-block mr-2 "}/>
                        Login with Google
                    </button>
                    
                    <NavLink to={"/"} target={"_self"} rel="noreferrer" className="flex justify-center ">
                        <button className="  lg:ml-6 lg:mr-6 mt-6  py-2 text-small font-medium text-center text-gray-50 bg-gradient-to-b from-blue-400 to-blue-300 rounded-lg  focus:ring-blue-200 p-4 hover:bg-gray-800">Back to Home </button>
                    </NavLink>
                </div>
                {/* </form> */}
                </div>
                <div className="flex object-cover sm:visible">
                    <img src= {loginimage} alt="login" className=" m-4  " />
                </div>

                
            </div>
            
            {/* <div id = "google-login-button" className="m-8">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded"
                        onClick={loginWithGoogle}>
                            Continue with Google
                </button>
            </div> */}
        </div>
        
    )
};

export default LoginAuth;