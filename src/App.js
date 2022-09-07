import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import HeroImage from './components/HeroImage/HeroImage';
import Activities from './components/Activities/Activities';



function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <HeroImage />
      </header>
      <main>
        <Activities />
      </main>
    </div>
  );
}

export default App;
