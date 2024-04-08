import React from "react";

const CreateProduct = () => {
    return (
        <div>
            <h1 className="text-2xl m-4 text-red-500 italic font-serif font-bold text-center">Create Product</h1>
            <div className="flex flex-col justify-center">
                <form className="flex flex-col justify-center">
                    <label htmlFor="name" className="m-2">Name</label>
                    <input type="text" name="name" id="name" className="m-2 p-2 border border-gray-400 rounded-md" />
                    <label htmlFor="price" className="m-2">Price</label>
                    <input type="number" name="price" id="price" className="m-2 p-2 border border-gray-400 rounded-md" />
                    <label htmlFor="description" className="m-2">Description</label>
                    <textarea name="description" id="description" className="m-2 p-2 border border-gray-400 rounded-md"></textarea>
                    <label htmlFor="image" className="m-2">Image</label>
                    <input type="file" name="image" id="image" className="m-2 p-2 border border-gray-400 rounded-md" />
                    <button type="submit" className=" flex justify-center  m-6  py-2 text-small font-medium text-center text-gray-50 bg-gradient-to-b from-blue-400 to-blue-300 rounded-lg  focus:ring-blue-200 p-4 hover:bg-gray-800"> Create Product </button>
                </form>
            </div>
        </div>
    );
}
export default CreateProduct;