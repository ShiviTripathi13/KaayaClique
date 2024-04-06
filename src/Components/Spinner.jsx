import {React, useState, useEffect} from "react";
import spinner from "../assets/icons/icon-spinner.png";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = () => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(5);
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter - 1);
        }, 1000);
        if (counter === 0) {
            navigate("/login", { state:  location.pathname  });
        }
        return () => clearInterval(interval);
    }
    , [counter, navigate, location]);

    return (
        <div className="flex flex-row justify-center items-center h-screen">
            
            <button type="button" className="bg-indigo-500 ... flex align-middle" disabled>
                <img src = {spinner} className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"/>
                Please Login...
            </button>
            <h1 className="text-2xl text-blue-400">Redirecting in {counter} seconds...</h1>
        </div>
    )
}

export default Spinner;