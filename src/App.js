import './App.css';
import Footer from './components/Footer';
import Goals from './components/Goals';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Plans from './components/Plans';

function App() {
  return (
    <div className="App">
        <Hero />
        <Goals />
        <Offer />
        <Plans />
        <Footer />
    </div>
  );
}

export default App;