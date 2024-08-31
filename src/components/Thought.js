/**
 * Renders a Thought component to display a single thought.
 * 
 * Props:
 * - thought: The thought object to display.
 * - removeThought: Callback to remove the thought.
 * 
 * Has a useEffect hook to automatically remove the thought 
 * when its expiration time is reached.
 * 
 * Renders the thought text and a remove button.
*/
import React, { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props; //destruturación de los props que serán pasados por el componente padre

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const timeOut = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);

    return () => {
      clearTimeout(timeOut);
    }
  }, [thought])

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
