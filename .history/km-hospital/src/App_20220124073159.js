import Nav from  './components/Nav'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

import Feedback from './Pages/Feedback'

function App() {
  return (
    <Router>
        <div className="App">
          <Nav/>
          <Routes>
            <Route exact path="/feedback" element={<Feedback/>}/>
          </Routes>
          <Footer/>
        </div>
    </Router>
  
  );
}

export default App;
