import Nav from  './components/Nav'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
