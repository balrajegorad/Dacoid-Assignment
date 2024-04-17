import React, { useState } from 'react'
import Nav from './Nav'
import chart from '../assets/ChartFull.png' 
import UpperBody from '../assets/upper.png'
import FullBody from '../assets/fullbody.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import FImg from '../assets/finalimg.png'
import './workout.css'

const WorkoutTracker = () => {

  return (
    <div className='container flex flex-col p-8'>
      <div className='flex flex-col gap-12 mb-[100px] p-4'>
        <div className='flex gap-12 items-center'>
          <IoIosArrowBack className='font-semibold text-xl leading-[24.38px] text-black mt-[36px] mb-8'/>
          <h2 className='font-semibold text-xl leading-[24.38px] text-black mt-[36px] mb-8'>Workout Tracker</h2>
        </div>
        <div className='flex justify-center items-center'>
          <img src={chart} alt="" />
        </div>
        <div className='bg-gradient-to-br from-blue-300 to-blue-100 rounded-xl flex gap-4 p-4 justify-center items-center'>
          <div className='w-[20px] h-[20px]'><IoWarningOutline/></div>
          <p>You've burned fewer calories than yesterday. Time to get moving!</p>
        </div>
        <div>
          <h3 className='font-semibold text-lg leading-[24.38px] text-black '>Upcoming Workout</h3>
          <div className='flex gap-6 mx-4 mt-4 shadow-xl rounded-lg p-4 items-center'>
            <img src={FullBody} alt="" />
            <div className='flex flex-col gap-1'>
              <h4 className='font-normal text-base leading-[14.63px]'>Full Body Workout</h4>
              <p className='font-medium text-xs leading-[12.19px'>Today 3pm</p>
            </div>
            <div className='ml-8'>
              <label for="toggle" class="flex items-center cursor-pointer">
                  <div class="relative">
                   <input id="toggle" type="checkbox" class="hidden" />
                   <div class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                   <div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow top-0 left-0 transition"></div>
                  </div>
              </label>

            </div>
          </div>
          <div className='flex gap-6 mx-4 mt-4 shadow-xl rounded-lg p-4 items-center'>
            <img src={UpperBody} alt="" />
            <div className='flex flex-col gap-1'>
              <h4 className='font-normal text-base leading-[14.63px]'>Upper Body Workout</h4>
              <p className='font-medium text-xs leading-[12.19px'>4 Feb, 3:30 pm</p>
            </div>
            <div className='ml-8'>
              <label for="toggle" class="flex items-center cursor-pointer">
                  <div class="relative">
                   <input id="toggle" type="checkbox" class="hidden" />
                   <div class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                   <div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow top-0 left-0 transition"></div>
                  </div>
              </label>

            </div>
          </div>
        </div>
        <div>
          <h3 className='font-semibold text-lg leading-[24.38px] text-black '>Upcoming Workout</h3>
          <div className='mt-4 flex gap-8 items-center rounded-lg bg-blue-400 bg-opacity-60 p-2'>
            <div className='flex flex-col gap-2'>
              <h5 className='font-medium text-sm leading-4'>Full Body Workout</h5>
              <p className='font-medium text-xs leading-[12.19px]'>Arms</p>
              <p className='font-medium text-xs leading-[12.19px]'>Chest</p>
              <p className='font-medium text-xs leading-[12.19px]'>Back</p>
              <p className='font-medium text-xs leading-[12.19px]'>Legs</p>
            </div>
            <div className='ml-16'>
              <img src={FImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  )
}

export default WorkoutTracker
