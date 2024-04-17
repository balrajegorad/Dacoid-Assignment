import React from 'react';
import { useState } from 'react';
import profile from '../assets/profile.png'
import camera from '../assets/camera.png'
import chart from '../assets/chart.png'
import home from '../assets/home.png'
import serchbtn from '../assets/searchbtn.png'
import { useNavigate } from 'react-router-dom';

const Nav = () => {

  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('#');
  
  return (
      <nav className="bg-white px-7 z-20 fixed left-1/2 transform -translate-x-1/2
     bottom-0 flex gap-8 w-full justify-center items-center">
      <a href="#" onClick={() => setActiveNav('#')} className={`flex items-center justify-center  rounded-full text-gray-500 ${activeNav === '#' ? 'bg-primary' : ''}`}>
       <img src={home} alt="" onClick={()=>{navigate('../WorkoutSchedule')}}/> 
      </a>
      <a href="" onClick={() => setActiveNav('#about')} className={`flex items-center justify-center rounded-full text-gray-500 ${activeNav === '#about' ? 'bg-primary' : ''}`}>
       <img src={chart} alt="" />  
      </a>
      <a href="" onClick={() => setActiveNav('#experience')} className={`flex items-center justify-center rounded-full mb-8 ${activeNav === '#experience' ? 'bg-primary' : ''}`}>
        <img src={serchbtn} alt="" />
      </a>
      <a href="" onClick={() => setActiveNav('#services')} className={`flex items-center justify-center rounded-full text-gray-500 ${activeNav === '#services' ? 'bg-primary' : ''}`}>
       <img src={camera} alt="" />  
      </a>
      <a href="" onClick={() => setActiveNav('#contact')} className={`flex items-center justify-center rounded-full text-gray-500 ${activeNav === '#contact' ? 'bg-primary' : ''}`}>
        <img src={profile} alt="" /> 
      </a>
    </nav>
  );
};

export default Nav;
