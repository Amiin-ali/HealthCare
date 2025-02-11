import React, { useState } from 'react';
import './App.css';
import { FaPen } from "react-icons/fa";

function Patients() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <div className='fixed h-screen'>
        <div className="h-screen w-64 bg-[#333333] text-white p-5 flex flex-col">
          <img className='mb-4 w-50 ' src='logo-01.png '></img>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
            <FaPen className="text-white text-xl" />
              <a href="App.jsx" className="text-white text-lg">Dashboard</a>
            </li>
            <li className="flex items-center space-x-3">
              <FaPen className="text-[#F4DBBA] text-xl" />
              <a href="Patients.jsx" className="text-[#F4DBBA] text-lg">Patients</a>
            </li>
            <li className="flex items-center space-x-3">
            <FaPen className="text-white text-xl" />
              <a href="#" className="text-white text-lg">Doctors</a>
            </li>
            <li className="flex items-center space-x-3">
            <FaPen className="text-white text-xl" />
              <a href="#" className="text-white text-lg">Services</a>
            </li>
            <li className="flex items-center space-x-3">
            <FaPen className="text-white text-xl" />
              <a href="#" className="text-white text-lg">Reception</a>
            </li>
            <li className="flex items-center space-x-3">
            <FaPen className="text-white text-xl" />
              <a href="#" className="text-white text-lg">Expenses</a>
            </li>
            <li className="flex items-center space-x-3">
            <FaPen className="text-white text-xl" />
              <a href="#" className="text-white text-lg">User</a>
            </li>
            <li className="flex items-center space-x-3">
            <FaPen className="text-white text-xl" />
              <a href="#" className="text-white text-lg">Settings</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 ml-64">
        <div className="flex justify-between items-center mb-5">
          <button
            className="text-gray-800 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close Menu" : "Open Menu"}
          </button>
          <div className="font-bold text-xl">Dashboard</div>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Patients*/}
          
         
        </div>
      </div>
    </div>
  );
}

export default Patients;
