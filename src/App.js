import React, { useState } from 'react';
import { AddThoughtForm } from './components/AddThoughtForm';
import { Thought } from './components/Thought';
import { generateId, getNewExpirationTime } from './components/helpers';
import './App.css';

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThougth = (thought) => { //el valor de thougth se obtiene en el elemento hijo addThougthForm
    setThoughts((prev) => {
      return [thought, ...prev]
    })
  };

  const removeThought = (thoughtIdToRemove) => { //el id del thought que se quiere eliminar se obtiene en el elemento hijo Thought
    setThoughts((thoughts) => {
      return thoughts.filter((thought) =>
        thought.id !== thoughtIdToRemove);
    })
  }



  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThougth={addThougth} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
      </main>
    </div>
  );
}
