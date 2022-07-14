import Nav from  './components/Nav'
import Footer from './components/Footer'
import ContactUs from './Pages/ContactUs'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

import Feedback from './Pages/Feedback'

function App() {
  return (
    <Router>
        <div className="App">
          <Nav/>
          <Routes>
            <Route exact path="/contactus" element={<ContactUs/>}/>
            <Route exact path="/feedback" element={<Feedback/>}/>
          </Routes>
          
          <Footer/>
        </div>
    </Router>
  
  );
}

export default App;
