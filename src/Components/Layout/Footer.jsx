import React from "react";
import linkedin from "../../assets/icons/linkedin-ic.png";
import github from "../../assets/icons/github-ic.png";
import discord from "../../assets/icons/discord-ic.png";
import instagram from "../../assets/icons/instagram-ic.png";
import { NavLink } from "react-router-dom";

const Footer = () => { 
    return (<>
        <div className="bg-gradient-to-b from-gray-700 to-gray-500">
        <div className=" grid grid-flow-col h-auto mt-0 py-0 items-start justify-center  ">
            <div className="grid grid-flow-row p-4">
                <NavLink to="/policy" className="justify-center flex ">
                    <h2 className=" mt-10 mb-4 px-8   text-xl text-gray-300 font-serif hover:text-blue-400">Privacy Policy</h2>
                </NavLink >              
            </div>
            <div className="grid grid-flow-row p-4">
                <NavLink to="/about" className="justify-center flex">
                    <h2 className=" mt-10 mb-4 px-8   text-xl text-gray-300 font-serif hover:text-blue-400">About</h2>
                </NavLink>              
            </div>
            <div className="grid grid-flow-row p-4">
                <NavLink to="/contact" className="justify-center flex">
                    <h2 className=" mt-10 mb-10 px-8   text-xl text-gray-300 font-serif hover:text-blue-400">Contact Us</h2>
                </NavLink>
                <div className="grid grid-flow-row justify-center text-blue-300  ">
                    <a href="https://linkedin.com/in/shivangi-tripathi-bu" target="_blank" rel="noreferrer" className="hover:text-blue-400 ">
                        {/* <img className="w-8 h-8 ml-4 mr-4" src={linkedin} alt="linkedin"/> */}
                        LinkedIn
                    </a>
                    <a href="https://github.com/ShiviTripathi13" target="_blank" rel="noreferrer" className="hover:text-blue-400 ">
                        {/* <img className="w-8 h-8 ml-4 mr-4" src={github} alt="github"/> */}
                        GitHub
                    </a>
                    <a href="https://discord.com/users/402203821258776064" target="_blank" rel="noreferrer" className="hover:text-blue-400 ">
                        {/* <img className="w-8 h-8 ml-4 mr-4" src={discord} alt="discord"/> */}
                        Discord
                    </a>
                    <a href="https://discord.com/users/402203821258776064" target="_blank" rel="noreferrer" className="hover:text-blue-400 ">
                        {/* <img className="w-8 h-8 ml-4 mr-4" src={instagram} alt="instagram"/> */}
                        Instagram
                    </a>
                </div>
                
            </div>
            
        </div>
        <div className="justify-center flex ">
                    <p className="   text-md text-zinc-300 font-serif">All Rights Reserved@KaayaClique</p>
        </div>
        </div>
        </>
    )
}

export default Footer;
                