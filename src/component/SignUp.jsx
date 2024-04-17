import React, { useState } from 'react';
import Google from '../assets/flat-color-icons_google.png';
import Facebookk from '../assets/facebook.png';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
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
    const { firstName, lastName, email, password, agreeTerms } = formData;

    if (firstName && lastName && email && password && agreeTerms) {
      navigate('/Goals');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className='container'>
      <div className=' flex flex-col p-8 h-[800px]'>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-sm mx-auto">
          <h2 className='font-semibold text-xl leading-[24.38px] text-black mt-[36px] mb-8'>Create an account</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 bg-gray-200 h-[50px]"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 bg-gray-200  h-[50px]"
          />
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
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-gray-700 font-medium text-xs leading-[21.35px]">
              By proceeding, I agree to all <span>T&C</span> and <span>Privacy Policy</span>
            </span>
          </label>
          <button type="submit" className="bg-gradient-to-br from-blue-500 to-blue-300 text-white font-bold py-2 rounded-md hover:bg-blue-600 mt-32">
            Create Account
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
            <p className='mb-4'>Already have an account? <span className='underline' onClick={() => navigate('/SignIn')}>Login</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
