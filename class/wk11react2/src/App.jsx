import { useState } from "react";

const students = [
  { suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics' },
  { suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology' },
  { suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology' }
];

function App() {
  let [filteredStudents, setFilteredStudents] = useState(students);

  const handleChange = (event) => {
    setFilteredStudents(
      students.filter(student =>
        student.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }

  const Liked = () => {
    const [liked, setLiked] = useState("🤍 Click to Like");
  }

  const handleLike = () => {
    if (liked === "🤍 Click to Like") {
      setLiked(false);
    } else {
      setLiked(true);
    }
    
  }

  return (

    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <h1>Students</h1>
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

//     <div className="clickable" onClick={handleLike}>
//         <img src="https://picsum.photos/200" />
//          <p>{liked}</p>
//         </div>
  );
};

export default App;