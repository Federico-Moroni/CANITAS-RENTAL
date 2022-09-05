import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import HeroImage from './components/HeroImage/HeroImage';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <HeroImage />
      </header>
    </div>
  );
}

export default App;
