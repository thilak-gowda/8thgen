import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/hrader';
import Homepage from './pages/homepage';
import About from './pages/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Routes >
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/service' element={<Service />} /> */}
      </Routes>
      <div className="foter">
        <Footer />
      </div>
    </div>
  );
}

export default App;




