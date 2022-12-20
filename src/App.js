import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Report from './Report';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={ <Home/>} />
        <Route path="/report" element={<Report/>} />
      </Routes>
    </Router>
  );
}

export default App;
