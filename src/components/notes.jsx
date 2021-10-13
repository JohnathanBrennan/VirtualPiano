import React from 'react';

const Notes = () => {
  const NOTES = [
    'c',
    'db',
    'd',
    'eb',
    'e',
    'f',
    'gb',
    'g',
    'ab',
    'a',
    'bb',
    'b',
  ]

  return (
    <div>
      {NOTES.map((note, index) => {
        console.log(note);
        return (
          <audio
            id={note}
            key={index}
            src={`./notes/${note}.mp3`}
          />
        )
      })}
    </div>
  )
}


export default Notes;