import React from 'react';

const Notes = () => {
  // const NOTES = [
  //   'c',
  //   'db',
  //   'd',
  //   'eb',
  //   'e',
  //   'f',
  //   'gb',
  //   'g',
  //   'ab',
  //   'a',
  //   'bb',
  //   'b',
  // ]
  const NOTES = [
    'a3', 'a-3',
    'b3',
    'c3', 'c-3',
    'd3', 'd-3',
    'e3',
    'f3', 'f-3',
    'g3', 'g-3',
    'a4', 'a-4',
    'b4',
    'c4', 'c-4',
    'd4', 'd-4',
    'e4',
    'f4', 'f-4',
    'g4', 'g-4',
    'a5', 'a-5',
    'b5',
    'c5', 'c-5',
    'd5', 'd-5',
    'e5',
    'f5', 'f-5',
    'g5', 'g-5',
  ]

  return (
    <div>
      {NOTES.map((note, index) => {
        // console.log(note);
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