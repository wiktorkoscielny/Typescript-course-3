import React, { useState } from 'react';
import List from './components/List'
// Styles
import './App.css'
import AddToList from './components/AddToList';

// interface to define the certen type
export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}


function App() {
// define a type by <>
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Władysław Kargul",
      url: "https://pbs.twimg.com/profile_images/1295983567/0172548_400x400.jpg",
      age: 54,
      note: "Nice but quarrelsome neighbor"
    },
    {
      name: "Kazimierz Pawlak",
      age: 56,
      url: "https://samequizy.pl/wp-content/uploads/2019/02/filing_images_eb60a03b8399.jpg",
      note: "Hates his neighbor",
    },
    {
      name: "LeBron James",
      age: 35,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team"
    }
  ])

  return (
    <div className='App'>
      <h1>Users</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
