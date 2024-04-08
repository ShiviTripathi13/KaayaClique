import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
    return (
        <div className="flex flex-col justify-start  p-2 bg-gradient-to-t from-pink-200 via-amber-100 to-gray-200  border rounded-md border-pink-300 sm:h-80 h-auto">
            <div>
                <h1 className="text-2xl font-bold ">Admin Menu</h1>
                <hr className="bg-zinc-400 mt-2 w-60"></hr>

            </div>
            <div className="flex flex-row justify-start mt-4 ">
                <div className="flex justify-start ">
                    <ul >
                        <li className="p-2 "><NavLink to="/dashboard/admin/display-users" className="  py-2 px-4  bg-zinc-200 hover:bg-pink-300 ">Display Users</NavLink></li>
                        <li className="p-2"><NavLink to="/dashboard/admin/create-products" className=" p-2  bg-zinc-200 hover:bg-pink-300 ">Create Products</NavLink></li>
                        <li className="p-2"><NavLink to="/dashboard/admin/create-category" className=" p-2  bg-zinc-200 hover:bg-pink-300 ">Create Category</NavLink></li>

                    </ul>
                </div>
            </div>
        </div>
    );
}


export default AdminMenu;