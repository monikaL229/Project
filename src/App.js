import './App.css';
import Hero from './Components.js/Header/Hero/Hero';
import Program from './Components.js/Program/Program';
import Reasons from './Components.js/Reasons/Reasons';
import Plans from './Components.js/Plans/plans';
import Testimonials from './Components.js/Testimonials/Testimonials';
import Join from './Components.js/Join/Join';
import Footer from './Components.js/FOOTER/Footer';

function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
  