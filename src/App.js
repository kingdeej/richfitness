import './App.css';
import Footer from './components/Footer';
import Goals from './components/Goals';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Offer from './components/Offer';
import Plans from './components/Plans';

function App() {
  return (
    <div className="App">
        <Nav />
        <Hero />
        <Goals />
        <Offer />
        <Plans />
        <Footer />
    </div>
  );
}

export default App;