import { useState } from "react";
// import './App.css'

const students = [
  { suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics' },
  { suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology' },
  { suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology' }
];

function App() {

  let [filteredStudents, setFilteredStudents] = useState(students);

  const handleChange = (event) => {

    const filtered = students.filter(student =>
      student.name.toLowerCase().includes(event.target.value.toLowerCase()));

    setFilteredStudents(filtered)
  };

  
  const [name, setName] = useState("mario");

  let handleClick = () => {
    if (name === "mario") {
      setName("luigi");
    } else {
      setName("mario");
    }

    console.log(
      "You clicked a button. The initial value of name was: " + name,
    );
  }
  
  
const [liked, setLiked] = useState("🤍 Click to Like");

  const handleLike = () => {
    if (liked === "🤍 Click to Like") {
      setLiked("❤️ Liked");
    } else {
      setLiked("🤍 Click to Like");
    }
  };
  

  return (
    <>
      <div>
        <h1>Students</h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange} />
        <ul>
          {filteredStudents.map(function (item) {
            return (
              <li key={item.suid}>
                Name: {item.name}
                <br />
                Year: {item.year}
                <br />
                Major: {item.major}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h1>Using State</h1>
        <p>{name}</p>
        <button onClick={handleClick}>Click Me!</button>
      </div>

      <div>
        <h1>Event Handling w/ Images</h1>
        <div className="clickable" onClick={handleLike}>
          <img src="https://picsum.photos/200" />
          <p>{liked}</p>
        </div>
      </div>
    </>
  );
};

export default App;