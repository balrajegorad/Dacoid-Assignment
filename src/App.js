import { Route, Routes } from 'react-router-dom';
import './App.css';
import TrackYourGoal from './component/TrackYourGoal';
import GetBurn from './component/GetBurn';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import Goals from './component/Goals';
import WorkoutTracker from './component/WorkoutTracker';
import WorkoutSchedule from './component/WorkoutSchedule';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TrackYourGoal />} />
      <Route path="/GetBurn" element={<GetBurn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Goals" element={<Goals />} />
      <Route path="/WorkoutTracker" element={<WorkoutTracker />} />
      <Route path="/WorkoutSchedule" element={<WorkoutSchedule />} />
    </Routes>
  );
}

export default App;
