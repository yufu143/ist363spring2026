import { useState } from 'react'
import Pioneer1 from './components/Pioneer1.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import About from './About';

const initialPioneers = [
  {}
];

function Home () {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

function About () {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('home');
  return (
    <>
      <nav>
        <div>
          <button onClick={() => setPage('home')}>Home</button>
        </div>
        <div> 
          <button onClick={() => setPage('about')}>About</button>
        </div> 
      </nav>

      {page === 'home' && <Home />}
      {page === 'about' && <About />} 
    </>
  );
}

export default App;
