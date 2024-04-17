import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import Nav from './Nav';

const WorkoutSchedule = () => {
  const hoursOfDay = Array.from({ length: 12 }, (_, i) => {
    const hour = i + 6;
    return hour < 12 ? `${hour}:00 AM` : `${hour === 12 ? hour : hour - 12}:00 PM`;
  });

  return (
    <div className="container mx-auto py-8">
      <div className='flex gap-20 items-center'>
          <IoIosArrowBack className='font-semibold text-xl leading-[24.38px] text-black mt-[36px] mb-8'/>
          <h2 className='font-semibold text-xl leading-[24.38px] text-black mt-[36px] mb-8'>Workout Schedule</h2>
        </div>
      <div className="text-center mb-4">
        <h2 className="text-medium ">April 2024</h2>
      </div>

      <div className="flex justify-between border-b border-gray-300 pb-2 mb-4">
        <div></div>
        {Array(7)
          .fill()
          .map((_, index) => (
            <div key={index} className="text-center font-semibold">
              <div className="text-sm">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</div>
              <div className="text-xs">Apr {index + 1}</div>
            </div>
          ))}
      </div>

      {hoursOfDay.map((time, index) => (
        <div key={index} className="flex items-center border-b border-gray-300 py-2">
          <div className="w-20 text-right pr-2">{time}</div>
          <div className="flex-1 border-t border-gray-300"></div>
          <div className="ml-2">
            {index === 1 && (
              <p className="text-xs bg-blue-200 rounded-full p-1 mr-16">Ab Workout</p>
            )}
            {index === 1.5 && (
              <p className="text-xs bg-blue-200 rounded-full p-1 mr-16">Ab Workout</p>
            )}
            {index === 3 && (
              <p className="text-xs bg-blue-200 rounded-full p-1 mr-16">Upperbody Workout</p>
            )}
            {index === 6 && (
              <p className="text-xs bg-blue-200 rounded-full p-1 mr-16">Lowerbody Workout</p>
            )}
          </div>
        </div>
      ))}

      <Nav />
    </div>
  );
};

export default WorkoutSchedule;
