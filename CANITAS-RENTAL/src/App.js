import './App.css';
import Navbar from './components/Navbar/Navbar'
import HeroImage from './components/HeroImage/HeroImage';
import Activities from './components/Activities/Activities';
import LoginModal from './components/LoginModal/LoginModal'
import Form from './components/Form/Form'
import CheckAvailabilityMobile from './components/CheckAvailabilityMobile/CheckAvailabilityMobile';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <HeroImage />
      </header>
      <main>
        <CheckAvailabilityMobile />
        <Activities />
        <Form />
      </main>
    </div>
  );
}

export default App;
