import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from "./Pages/Homepage";
import Leaderboard from "./Pages/Leaderboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DetailThreaad from "./Pages/DetailThread";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/detail/:id' element={<DetailThreaad />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
