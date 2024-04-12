import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    // const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try{
            const {data} = await axios.get(`/api/v1/product/single-product/${params.slug}`);
            console.log("data in single product: ", data);
            setProduct(data?.product);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if(params?.slug){
            getProducts();
        }
    }   
    , [params?.slug]);

    return (
        <div className="flex flex-col w-full  overflow-scroll scroll-m-1  m-2 p-2 sm:p-0 border border-pink-300 rounded-md bg-gradient-to-t from-pink-200 via-amber-100 to-gray-200 font-serif min-h-screen  ">
            {/* <div><h1 className="text-2xl font-serif font-semibold m-4 ">Welcome to KaayaClique!</h1></div> */}
                    <div className=" flex rounded-lg overflow-scroll">
                        
                                <div className="">
                                    <img className=" object-cover h-full w-full  " 
                                        src={`/api/v1/product/product-photo/${product._id}`}
                                       
                                        alt={""} />
                                       
                                </div>
                                <div className="px-6 py-4   w-full ">
                                    <div className="font-serif mb-2">{product.name}</div>
                                    <div className=" text-medium font-serif font-semibold mb-2"> ${product.price}</div>

                                    <div className="">
                                    {/* <button onClick={() => navigate(`/product/${product.slug}`)}
                                            className="  bg-gradient-to-b from-blue-500 to-blue-300 text-white m-2 p-2 rounded-md">
                                        More Details
                                    </button> */}
                                    <button className="  bg-gradient-to-b from-amber-500 to-amber-300 text-white m-2 p-2 rounded-md">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        
                    
                </div>
               
            </div>
    );
}
export default ProductDetails;