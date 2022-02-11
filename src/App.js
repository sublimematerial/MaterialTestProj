import logo from './logo.svg';
import './App.css';

import { Route,  Routes } from 'react-router-dom';
import Home from './components/home';
import About from  './components/about';
import Contact from './components/contact';
import Cementtes from'./components/Worksheets/Cement/Compressivestrength' ;
import FinalSetting from './components/Worksheets/Cement/FinalSetting';
import DrySieving from './components/Worksheets/Cement/DrySeiving'
import Consistency from './components/Worksheets/Cement/Consistency';
import Soundness from './components/Worksheets/Cement/SoundenessLechatelier'
import SpecificGravity from './components/Worksheets/Cement/SpecificGravity';
import LossOfIgnition from './components/Worksheets/Cement/LossOfIgnition';
function App() {
  return (
    <div>
<Home/>
    <Routes>
    <Route
      path="/Home"  
      element={<Home />}
    />
     <Route
      path="/About"  
      element={<About />}
    />
     <Route
      path="/Contact"  
      element={<Contact />}
    />
     <Route
      path="/Cementtes"  
      element={<Cementtes />}
    />
       <Route
      path="/FinalSetting"  
      element={<FinalSetting />}
    />
      <Route
      path="/DrySieving"  
      element={<DrySieving />}
    />
       <Route
      path="/Consistency"  
      element={<Consistency />}
    />
     <Route
      path="/Soundness"  
      element={<Soundness />}
    />
     <Route
      path="/Specificgravity"  
      element={<SpecificGravity />}
    />
        <Route
      path="/LossOfIgnition"  
      element={<LossOfIgnition />}
    />
    
  </Routes>
  </div>
 
  );
}

export default App;
