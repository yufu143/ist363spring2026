import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const cardData = {
  card1: {
    data1: "Data Name",
    data2: "Data Description",
    data3: "Data Status",
    data4: "Data Version",
  },
  card2: {
    data1: "Data Name",
    data2: "Data Description",
    data3: "Data Status",
    data4: "Data Version",
  },
  card3: {
    data1: "Data Name",
    data2: "Data Description",
    data3: "Data Status",
    data4: "Data Version",
  }
}




function App() {
  const [count, setCount] = useState(0)

  const myName = "Yujia Fu";
  const schoolYear = "Senior";
  const myMajor = "Information Management and Technology";

  const person = {
    myName: "Yujia Fu",
    schoolYear: "Senior",
    myMajor: "Information Management and Technology",
  }

//  Lab 10 Question #1
  const students = [
    {
      suid: 123456, 
      name: 'Sue Flay', 
      year: 'senior', 
      major: 'Applied Data Analytics'
    }, 
    {
      suid: 234567, 
      name: 'Ella Vader', 
      year: 'junior', 
      major: 'Information Management and Technology'
    }, 
    {
      suid: 345678, 
      name: 'Chris P Bacon', 
      year: 'junior', 
      major: 'Innovation, Society and Technology'
    }
  ];

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <h3>Student Name</h3>
          <p>{myName}</p>
          <div>
              <ul>
                <li>{myName}</li>
                <li>{schoolYear}</li>
                <li>{myMajor}</li>
              </ul>
          </div>
          <div>
              <ul>
                <li>{person.myName}</li>
                <li>{person.schoolYear}</li>
                <li>{person.myMajor}</li>
              </ul>
          </div>

          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>



      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
