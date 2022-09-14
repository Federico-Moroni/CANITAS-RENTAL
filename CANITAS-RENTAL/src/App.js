import './App.css';
import Navbar from './components/Navbar/Navbar'
import HeroImage from './components/HeroImage/HeroImage';
import Activities from './components/Activities/Activities';
import Form from './components/Form/Form'
import CheckAvailabilityMobile from './components/CheckAvailabilityMobile/CheckAvailabilityMobile';
import Cottages from './components/Cottages/Cottages';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <HeroImage />
      </header>
      <main>
        <Activities />
        <Form />
        <Cottages />
      </main>
    </div>
  );
}

export default App;
