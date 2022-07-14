import Nav from  './components/Nav'
import Footer from './components/Footer'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUS'
import Specialities from './Pages/Specialities'
import BmiCalculator from './Pages/For Patients/Bmi_Calculator'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

import Feedback from './Pages/Feedback'

function App() {
  return (
    <Router>
        <div className="App">
          <Nav/>
          <Routes>
            <Route exact path="/contactus" element={<ContactUs/>}/>
            <Route exact path="/aboutus" element={<AboutUs/>}/>
            <Route exact path="/specialities" element={<Specialities/>}/>
            <Route exact path="/bmicalculator" element={<BmiCalculator/>}/>
            <Route exact path="/feedback" element={<Feedback/>}/>
          </Routes>
          
          <Footer/>
        </div>
    </Router>
  
  );
}

export default App;
