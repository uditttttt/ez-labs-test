import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutTeam from './components/AboutTeam';
import Services from './components/Services'; 
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <main>
        <Hero />
        <AboutTeam />
        <Services /> 
        <Contact />
      </main>
    </div>
  );
}

export default App;