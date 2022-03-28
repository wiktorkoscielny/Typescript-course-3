import React from 'react';
import { IState as IProps } from '../App'

  // this is a type of react function component and its define the props of IProps 
  // this is how to pass props in react ts
const List: React.FC<IProps> = ( { people } ) => {

//Functions in TypeScript, its return the type of jsx element
const renderList = (): JSX.Element[] => {
    return people.map((person) => {
        return (
            <li className='List'>
            <div className='List-header'>
                <img 
                className='List-img'
                src={person.url}
                />
                <h2>{person.name}</h2>
            </div>
            <p>{person.age} years old</p>
            <p className='List-note'>{person.note}</p>
        </li>
        )
    })
}

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List;