import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/hrader';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Homepage />
    </div>
  );
}

export default App;
