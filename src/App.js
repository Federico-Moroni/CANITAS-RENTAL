import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import HeroImage from './components/HeroImage/HeroImage';
import Activities from './components/Activities/Activities';
import LoginModal from './components/LoginModal/LoginModal'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <HeroImage />
      </header>
      <main>
        <Activities />
        <LoginModal />
      </main>
    </div>
  );
}

export default App;
