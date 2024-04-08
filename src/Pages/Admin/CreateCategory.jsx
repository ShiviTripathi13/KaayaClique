import React from "react";

const CreateCategory = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Create Category</h1>
            <div className="flex flex-col justify-center">
                <form className="flex flex-col justify-center">
                    <label htmlFor="name" className="m-2">Name</label>
                    <input type="text" name="name" id="name" className="m-2 p-2 border border-gray-400 rounded-md" />
                    
                    <label htmlFor="description" className="m-2">Description</label>
                    <textarea name="description" id="description" className="m-2 p-2 border border-gray-400 rounded-md"></textarea>
                    <label htmlFor="image" className="m-2">Image</label>
                    <input type="file" name="image" id="image" className="m-2 p-2 border border-gray-400 rounded-md" />
                    <button type="submit" className="m-2 p-2 bg-blue-500 text-white rounded-md">Create Category</button>
                </form>
            </div>
        </div>
    );
}
export default CreateCategory;