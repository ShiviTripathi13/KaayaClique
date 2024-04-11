import React, {useState, useEffect} from "react";
// import { useAuth } from "../context/authContext";
import axios from "axios";
import UserMenu from "../../Components/Layout/UserMenu";

const Cart = () => {
    // const [auth, setAuth] = useAuth();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const getProducts = async () => {
        try{
            const {data} = await axios.get('/api/v1/product/all-products');
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProducts();
    }   
    , []);
    return(
        <div className="flex sm:flex-row flex-col justify-start p-2 min-h-screen">
            <div className="   mt-2" >
                <UserMenu />
            </div>
            <div className="flex flex-col w-full  overflow-scroll scroll-m-1  mt-2 p-2 sm:p-0 border border-pink-300 rounded-md bg-gradient-to-t from-pink-200 via-amber-100 to-gray-200 font-serif max-h-screen  ">
            <div><h1 className="text-2xl font-serif font-semibold m-4 ">Cart Items</h1></div>
                    <div className=" ">
                    {products?.map((product) => (
                        
                            <div key={product._id} className="flex  shadow-lg rounded-md m-2 ">
                                <div className="">
                                    <img className=" object-contain w-40  h-full" 
                                        src={`/api/v1/product/product-photo/${product._id}`}
                                        height={"100px"}
                                        width={"100px"}
                                        alt={""} />
                                       
                                </div>
                                <div className="px-6 py-4   w-full ">
                                    <div className="font-bold text-xl mb-2">{product.name}</div>
                                    <div className=" text-medium font-sans mb-2">Price: {product.price}</div>

                                    <div className="">
                                    <button className="  bg-gradient-to-b from-blue-500 to-blue-300 text-white p-2 m-2 rounded-md">
                                        More Details
                                    </button>
                                    <button className="  bg-gradient-to-b from-amber-500 to-amber-300 text-white p-2 m-2 rounded-md">
                                        Add to Cart
                                    </button>
                                </div>
                                
                                </div>
                            
                            {/* <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div> */}
                        </div>
                       
                    ))}
                </div>
                </div>
            

        </div>
    );
};

export default Cart;