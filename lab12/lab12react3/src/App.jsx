import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import About from './About';

function Home () {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('home');
  return (
    < >
      
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('about')}>About</button>

      {/* {page === 'home' && <Home />}
      {page === 'about' && <About />}  */}
    </>
  );
}

export default App;
