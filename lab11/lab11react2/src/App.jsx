import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


let initialTasks = [
  {
    id: 1,
    item: "Complete Lab 11",
    status: "not completed"
  },

  {
    id: 2,
    item: "JSX Events & State",
    status: "not completed"
  },
];


function App() {
  // const [count, setCount] = useState(0)



  return (
  <>
    <div>
      <h1>To-Do List</h1>
      <ul>
        {
          initialTasks.map(function (item) {
            return <li>
              <p>{item.item}</p>
            </li>;
          })
        }
      </ul>
    </div>
        
    {/* <i class="fa-solid fa-circle-xmark" style="color: rgb(220, 26, 26);"></i> */ }
    {/* text-decoration: line-through */ }

  {/* <div>
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
        </div> */}

  {/* <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button> */}

      <div className="ticks"></div>


      <div className="ticks"></div>
      <section id="spacer"></section>
</>
  )
}
export default App;
