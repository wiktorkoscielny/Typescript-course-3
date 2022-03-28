
import React, { useState } from 'react';
// interface to define the certen type
interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}


function App() {
// define a type by <>
  const [people, setPeople] = useState<IState["people"]>([])

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
}

export default App;
