// src/App.jsx

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutTeam from './components/AboutTeam';
import Contact from './components/Contact'; 

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <main>
        <Hero />
        <AboutTeam />
        <Contact /> 
      </main>
    </div>
  );
}

export default App;