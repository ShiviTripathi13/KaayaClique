import React from "react";
import UserMenu from "../../Components/Layout/UserMenu";

const Orders = () => {
    return (
        <div title={"Orders"} className="flex sm:flex-row flex-col justify-start items-start mt-4 bg-gradient-to-t from-pink-100 via-yellow-50 to-gray-50 font-serif  min-h-screen px-2 py-2">
            <div className=" sm:basis-1/4 sm:m-0 m-2" >
                <UserMenu />
            </div>
            <div className="flex flex-col sm:basis-2/3 px-2 card sm:w-auto w-64 border rounded-md border-pink-300 h-80 bg-gradient-to-t from-pink-100 via-amber-50 to-gray-100 ml-2 ">
                <h1 className=" text-2xl font-bold  py-2">Order Details</h1>
                <hr className="bg-zinc-400"></hr>
            </div>
        </div>
    );
}

export default Orders;