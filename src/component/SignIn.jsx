import React, { useState } from 'react';
import Google from '../assets/flat-color-icons_google.png';
import Facebookk from '../assets/facebook.png';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeTerms: false,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = formData;

    if ( email && password) {
      navigate('/WorkoutTracker');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className='container'>
      <div className=' flex flex-col p-8 h-[800px]'>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-sm mx-auto">
          <h2 className='font-semibold text-xl leading-[24.38px] text-black mt-[36px] mb-8'>Welcome Back</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 bg-gray-200  h-[50px]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 bg-gray-200  h-[50px]"
          />

          <p className='font-medium text-sm leading-[14.63px] text-gray-500 underline'>Forgot your password?</p>
          
          <button type="submit" className="bg-gradient-to-br from-blue-500 to-blue-300 text-white font-bold py-2 rounded-md hover:bg-blue-600 mt-32">
            Sign In
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <div className='flex gap-2 items-center'>
            <div className='h-[1px] w-full bg-gray-500'></div>
            <p>Or</p>
            <div className='h-[1px] w-full bg-gray-500'></div>
          </div>
          <div className='flex gap-2 mx-auto'>
            <div className='flex items-center justify-center border rounded-lg border-gray-500 h-[44px] w-[44px]'>
              <img src={Google} alt='Google' />
            </div>
            <div className='flex items-center justify-center border rounded-lg border-gray-500 h-[44px] w-[44px]'>
              <img src={Facebookk} alt='Facebook' />
            </div>
          </div>
          <div>
            <p className='mb-4'>Don’t have an account yet?<span className='underline' onClick={() => navigate('/SignUp')}>Create an account</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
