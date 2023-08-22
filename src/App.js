import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from "./Pages/Homepage";
import Leaderboard from "./Pages/Leaderboard";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
