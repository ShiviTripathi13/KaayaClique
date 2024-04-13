import React, {useState, useEffect} from "react";
import { useCartContext } from "../../context/CartContext";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Cart = () => {
    const [auth, setAuth] = useAuth();
    const [cart, setCart] = useCartContext();
    const [userdata, setUserdata] = useState({});
    const navigate = useNavigate();

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Credentials": true,
    }

    const getGoogleUserData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/login/sucess", { withCredentials: true, headers: headers }); 
            setUserdata(response.data.user);
        } catch (err) {
            console.log("error", err);
        }
    }

    // total price
    const getTotalPrice = () => {
        try{
            let total = 0;
            cart.map((item) => {
                total += item.price;
            });
            return total;
        } catch (error) {
            console.log(error);
        }
    }

    // remove cart item
    const removeCartItem = (productId) => {
       try{
            const newCart = cart.filter((item) => item._id !== productId);
            setCart(newCart);
            localStorage.setItem("cart", JSON.stringify(newCart));
       } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getGoogleUserData();
    }   
    , []);
    return(
        <div className="flex flex-col justify-start p-2 min-h-screen">
            
            <div className=" w-full min-h-screen overflow-scroll scroll-m-1  mt-2 p-2 sm:p-0 border border-pink-300 rounded-md bg-gradient-to-t from-pink-200 via-amber-100 to-gray-200 font-serif max-h-screen  ">
                <div><h3 className="text-2xl font-serif font-semibold m-4 ">Cart Items</h3></div>
                <div className="m-4">
                    <h1 className="text-md font-serif font-normal  ">
                    {cart?.length>=1 ?  `You have ${cart.length} items in your cart.  ${
                                        (auth?.token) || (Object?.keys(userdata)?.length > 0 ) ? " " : " Please login to checkout" 
                                        }`
                                    : "Your cart is empty"}
                    </h1>
                </div>
                <div className="flex flex-row ml-2 p-2">
                    {/* <h1>Hello {Object?.keys(userdata)?.length > 0 ? userdata.displayName : auth.user?.name}</h1> */}
                    
                    
                

            <div className="grid grid-flow-row sm:basis-3/4 overflow-y-scroll scroll-m-1  m-2 p-2 sm:p-0 rounded-md bg-gradient-to-t from-pink-200 via-amber-100 to-gray-200 font-serif max-h-screen ">
                {cart?.map((item) => (
                    <div  className="flex flex-row p-2 m-2 border-b border-pink-300 rounded-md ">
                        <div className="m-2">
                            <img className="object-cover h-24 w-24" src={`/api/v1/product/product-photo/${item._id}`} alt={item.name} />
                        </div>
                        <div className="m-2">
                            <h1 className="text-md font-serif font-semibold">{item.name}</h1>
                            <h1 className="text-md font-serif font-normal">Price: ${item.price}</h1>
                            <div className="flex flex-row">
                            <div><h1 className="text-md mt-2 mr-2 font-serif font-normal">Quantity: </h1></div>
                            <div><button className=" max-w-fit font-serif ml-2 bg-gradient-to-br from-red-600 to-red-200   text-gray-50  p-2 rounded-md"    
                                    onClick={() => removeCartItem(item._id)}>
                                Delete   
                            </button>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div >
            
            <div className="flex flex-col text-center sm:basis-1/4 max-h-96 bg-gradient-to-t from-pink-200 via-amber-100 to-gray-200 rounded-md   p-2 m-2">
                
                <div>
                    <h1 className="text-md font-serif font-semibold">Cart Summary</h1>
                </div>
                <hr className="bg-gray-300 mb-6 h-0.5 "></hr>
                <div>
                    <h1 className="text-md font-serif ">Total Items: {cart.length}</h1>
                    <h1 className="text-md font-serif ">Total Price: ${getTotalPrice()}</h1>
                </div>
                <div className="flex justify-center items-end mt-20 font-medium">
                    <button className=" max-w-fit max-h-fit  m-2 bg-gradient-to-br from-amber-300 to-amber-100 text-gray-600 p-2 rounded-md"
                        onClick={() => navigate("/home")}>
                        Continue Shopping
                    </button>
                </div>
                <div className="flex justify-center items-end font-medium">
                <button className=" max-w-fit m-2  bg-gradient-to-br from-amber-300 to-amber-100   text-gray-600  p-2 rounded-md"
                        onClick={() => navigate("/checkout")}>
                    Proceed to Checkout
                </button>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Cart;