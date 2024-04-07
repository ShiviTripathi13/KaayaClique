// import React from "react";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';


const Dashboard = () => {
    
    return (
        <>
          <div className="flex flex-wrap justify-center bg-gradient-to-t from-grey-100 to-zinc-50 min-h-screen">
              <h1 className="text-4xl text-red-600 mt-4"> Dashboard</h1>
          </div>
        </>
      
    )

};

export default Dashboard;