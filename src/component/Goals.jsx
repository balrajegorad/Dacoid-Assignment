import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Goals = () => {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState({
    weightLoss: false,
    muscleGain: false,
    flexibility: false,
    generalFitness: false,
    eventTraining: false,
    mindfulness: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedGoals((prevSelectedGoals) => ({
      ...prevSelectedGoals,
      [name]: checked,
    }));
  };

  const handleConfirmClick = () => {
    const isAnyGoalSelected = Object.values(selectedGoals).some((value) => value);
    if (isAnyGoalSelected) {
      navigate('/WorkoutTracker');
    } else {
      console.error('Please select at least one goal');
    }
  };

  return (
    <div className="container flex flex-col p-8">
      <div className="w-full flex justify-center items-center">
        <h2 className="font-semibold text-xl leading-[24.38px] text-black mt-[36px] mb-8">
          What are your goals?
        </h2>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className={`flex items-center justify-between bg-gray-200 rounded-lg p-4 ${selectedGoals.weightLoss ? 'bg-blue-200' : ''}`}>
          <label htmlFor="weightLoss" className="text-gray-800 font-medium">Weight Loss</label>
          <input
            type="checkbox"
            id="weightLoss"
            name="weightLoss"
            checked={selectedGoals.weightLoss}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-gray-600"
          />
        </div>
        <div className={`flex items-center justify-between bg-gray-200 rounded-lg p-4 ${selectedGoals.muscleGain ? 'bg-blue-200' : ''}`}>
          <label htmlFor="muscleGain" className="text-gray-800 font-medium">Muscle Gain</label>
          <input
            type="checkbox"
            id="muscleGain"
            name="muscleGain"
            checked={selectedGoals.muscleGain}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-gray-600"
          />
        </div>
        <div className={`flex items-center justify-between bg-gray-200 rounded-lg p-4 ${selectedGoals.flexibility ? 'bg-blue-200' : ''}`}>
          <label htmlFor="flexibility" className="text-gray-800 font-medium">Flexibility and Mobility</label>
          <input
            type="checkbox"
            id="flexibility"
            name="flexibility"
            checked={selectedGoals.flexibility}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-gray-600"
          />
        </div>
        <div className={`flex items-center justify-between bg-gray-200 rounded-lg p-4 ${selectedGoals.generalFitness ? 'bg-blue-200' : ''}`}>
          <label htmlFor="generalFitness" className="text-gray-800 font-medium">General Fitness</label>
          <input
            type="checkbox"
            id="generalFitness"
            name="generalFitness"
            checked={selectedGoals.generalFitness}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-gray-600"
          />
        </div>
        <div className={`flex items-center justify-between bg-gray-200 rounded-lg p-4 ${selectedGoals.eventTraining ? 'bg-blue-200' : ''}`}>
          <label htmlFor="eventTraining" className="text-gray-800 font-medium">Event-specific Training</label>
          <input
            type="checkbox"
            id="eventTraining"
            name="eventTraining"
            checked={selectedGoals.eventTraining}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-gray-600"
          />
        </div>
        <div className={`flex items-center justify-between bg-gray-200 rounded-lg p-4 ${selectedGoals.mindfulness ? 'bg-blue-200' : ''}`}>
          <label htmlFor="mindfulness" className="text-gray-800 font-medium">Mindfulness and Mental Health</label>
          <input
            type="checkbox"
            id="mindfulness"
            name="mindfulness"
            checked={selectedGoals.mindfulness}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-gray-600"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <button
          onClick={handleConfirmClick}
          className={`bg-gradient-to-br from-blue-500 to-blue-300 text-white font-bold py-2 w-[90%] mb-4 rounded-md
           hover:bg-blue-600 mt-16 ${!Object.values(selectedGoals).some((value) => value) ? 'pointer-events-none opacity-50' : ''}`}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Goals;
