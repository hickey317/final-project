import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FindRoutes from './document/FindRoutes';
import Details from './document/Details';
import Achievements from './achievements/achievements';
import EnjoyClimbing from './enjoyClimbing/enjoyClimbing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/enjoy" element = {<EnjoyClimbing/>} />   
        <Route path = "/" element = {<FindRoutes />} />
        <Route path = "/upload" element = {<Details />} />
				<Route path = "/achievements" element = {<Achievements />} />
			</Routes>
    </Router>
  );
}

export default App;
