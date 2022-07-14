import Nav from  './components/Nav'
import Footer from './components/Footer'
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUS'
import Specialities from './Pages/Specialities'
import BmiCalculator from './Pages/For Patients/Bmi_Calculator'
import Appointment from './Pages/For Patients/BookAppointment'
import Hospitals from './Pages/Hospitals'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Chennai from './Pages/Hopitals/Chennai'
import Coimbatore from './Pages/Hopitals/Coimbatore'
import Salem from './Pages/Hopitals/Salem'
import Kanyakumari from './Pages/Hopitals/Kanyakumari'
import Vaccination from './Pages/For Patients/Vaccination'
import Feedback from './Pages/Feedback'
import Symptoms from './Pages/For Patients/Symptoms'
import SymptomsAlpha from './Pages/For Patients/sympsDesc'
import SecondOpinion from './Pages/For Patients/secondOpinion'
function App() {
  return (
    <Router>
        <div className="App">
          <Nav/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/contactus" element={<ContactUs/>}/>
            <Route exact path="/aboutus" element={<AboutUs/>}/>
            <Route exact path="/specialities" element={<Specialities/>}/>
            <Route exact path="/bmicalculator" element={<BmiCalculator/>}/>
            <Route exact path="/bookappointment" element={<Appointment/>}/>
            <Route exact path="/hospitals" element={<Hospitals/>}/>
            <Route exact path="/hospitals/chennai" element={<Chennai/>}/>
            <Route exact path="/hospitals/coimbatore" element={<Coimbatore/>}/>
            <Route exact path="/hospitals/salem" element={<Salem/>}/>
            <Route exact path="/hospitals/kanyakumari" element={<Kanyakumari/>}/>

            <Route exact path="/vaccination" element={<Vaccination/>}/>
            <Route exact path="/secondopinion" element={<SecondOpinion/>}/>
            <Route exact path="/feedback" element={<Feedback/>}/>
            <Route exact path="/symptoms" element={<Symptoms/>}/>
            <Route exact path="/symptoms/alpha" element={<SymptomsAlpha/>}/>
          </Routes>
          
          <Footer/>
        </div>
    </Router>
  
  );
}

export default App;
