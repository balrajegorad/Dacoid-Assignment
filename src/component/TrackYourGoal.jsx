import React from 'react'
import TrackImg from '../assets/image13.png'
import arrowImg from '../assets/Group1.png'
import { useNavigate } from 'react-router-dom';

const TrackYourGoal = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <div className="container">
        {/* Height value is hardcoded based on Figma file */}
        <div className=' flex flex-col p-8 justify-between h-[800px]'>
          <div className='flex justify-end mt-[36px]'>
            <button className='font-medium text-base leading-tight text-blue-400 underline' onClick={() => navigate('/SignUp')}>Skip</button>
          </div>
          <div className='flex items-center justify-center'>
            <img src={TrackImg} alt="Track Your Goal Img" />
          </div>
          <div className='gap-4 flex flex-col'>
            <h2 className='font-semibold text-xl leading-[24.38px] text-black'>Track Your Goal</h2>
            <p className='font-medium text-base leading-[19.5px] text-gray-400'>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
          </div>
          <div className='flex justify-end'>
            <button onClick={() => navigate('/GetBurn')}><img src={arrowImg} alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackYourGoal
