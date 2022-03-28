
import React, { useState } from 'react';



function App() {

  const [people, setPeople] = useState([
  {
    name: "Jan Kowalski",
    url: "",
    age: 36,
    note: "experienced user"
  }, 
  {
    name: "Bogdan Nowak",
    url: "",
    age: 22,
    note: "new user"
  }

]);

people.map(person => {
  person.age
})

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
}

export default App;
