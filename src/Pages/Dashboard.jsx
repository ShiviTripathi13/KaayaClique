// import React from "react";
import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const getUser = async () => {
      try {
          const response = await axios.get("http://localhost:8000/login/sucess", { withCredentials: true });
  
          console.log("response",response)
      } catch (error) {
        navigate("*")
      }
  }
  
  
  useEffect(() => {
    getUser()
  }, [])

    return (
        <div className="flex flex-wrap justify-center bg-gradient-to-t from-grey-100 to-zinc-50 min-h-screen">
            <h1 className="text-4xl text-red-600 mt-4"> Dashboard</h1>
        </div>
    )
};

export default Dashboard;