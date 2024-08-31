/**
 * AddThoughtForm component.
 * Allows user to enter text for a new thought. 
 * Handles text input change and form submission.
 * Passes new thought object to addThought prop on submit.
 */
import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './helpers';

export function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = ({ target }) => {
    setText(target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    };
    if (text.length > 0) {
      props.addThougth(thought); //con esta línea paso el objeto thougth recién creado a la función addThougth del componente padre App.js
    }
    setText("");
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}

// Un componente hijo no puede pasarle props directamente a su componente padre en React. Las props fluyen en una sola dirección, del padre hacia los hijos.

// Sin embargo, hay formas en que un componente hijo puede pasar datos de vuelta al padre:

// Callback Functions: El padre puede pasar una función callback al hijo a través de las props. El hijo luego puede llamar esta función callback y pasarle datos. Ej:
// // Padre 
// const handleChildData = (data) => {
//   // hacer algo con data
// }

// <Child callback={handleChildData} />

// // Hijo
// props.callback(someData)