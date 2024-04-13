import React, {useEffect, useState} from "react";
import useCategory from "../hooks/useCategory";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const CategoryWiseProduct = () => {
    const navigate = useNavigate();
    const categories = useCategory();
    const params = useParams();
   
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const getProductsByCat = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product/product-category/${(params.slug).slice(1)}`);
            
            setProducts(data?.products);
            setCategory(data?.category);
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    }
    useEffect(() => {
        if(params?.slug){
            getProductsByCat();
        }
    }
    , [params?.slug]);
    return (
        <div className="min-h-screen m-4 p-2">
            <h1 className="font-serif text-2xl font-semibold text-pink-400">Category: {(category.name).charAt(0).toUpperCase() + (category.name).slice(1)}</h1>
            <h3 className="font-sans italic font-light text-pink-200">{products.length} results found</h3>
            
            <div className=" grid grid-cols-4 rounded-lg overflow-scroll">
                    {products?.map((product) => (
                        
                            <div key={product._id} className=" shadow-lg rounded-md m-2 ">
                                <div className="">
                                    <img className=" object-cover h-full w-full  " 
                                        src={`/api/v1/product/product-photo/${product._id}`}
                                       
                                        alt={""} />
                                       
                                </div>
                                <div className="px-6 py-4   w-full ">
                                    <div className="font-serif mb-2">{product.name.substring(0,20)}</div>
                                    <div className=" text-medium font-serif font-semibold mb-2"> ${product.price}</div>

                                    <div className="">
                                    <button onClick={() => navigate(`/product/${product.slug}`)}
                                            className="  bg-gradient-to-b from-blue-500 to-blue-300 text-white m-2 p-2 rounded-md">
                                        More Details
                                    </button>
                                    <button className="  bg-gradient-to-b from-amber-500 to-amber-300 text-white m-2 p-2 rounded-md">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                
        </div>
    )
}

export default CategoryWiseProduct;