import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  key: {
    'background': 'white',
    'height': '300px',
    'width': '60px',
    'border': '2px solid black',
    'z-index': '1'
  },
  'key-text': {
    'position': 'relative',
    'text-align': 'center',
    'color': 'black',
    'font-weight': 600,
    'font-size': '24px',
    'margin-top': '240px',
    'pointer-events': 'none',
  },
  sharpKey: {
    'position': 'relative',
    'background': 'black',
    'margin-right': '-17px',
    'margin-left': '-17px',
    'height': '200px',
    'width': '30px',
    'z-index': '2',
  },
  pressedSharpNote: {
    'position': 'relative',
    'background': 'blue',
    'margin-right': '-17px',
    'margin-left': '-17px',
    'height': '200px',
    'width': '30px',
    'z-index': '2',
  },
  pressedNote: {
    'background': 'blue',
    'height': '300px',
    'width': '60px',
    'border': '2px solid black',
    'z-index': '1'
  }
})


const Key = ({note, pressedKeys}) => {
  const noteToKey = {
    c: 'a',
    db: 'w',
    d: 's',
    eb: 'e',
    e: 'd',
    f: 'f',
    gb: 'u',
    g: 'j',
    ab: 'i',
    a: 'k',
    bb: 'o',
    b: 'l',
  }
  const [isPressed, setIsPressed] = useState(false);

  const noteIsSharp = (note) => {
    return note.length > 1;
  }
  const classes = useStyles();


  const keyIsPressed = (note, pressedKeys) => {
    return pressedKeys.includes(noteToKey[note])
  }

  let keyClassName = ''
  if (keyIsPressed(note, pressedKeys)) {
    if (noteIsSharp(note)) {
      keyClassName = classes.pressedSharpNote
    } else {
      keyClassName = classes.pressedNote
    }
  } else {
    if (noteIsSharp(note)) {
      keyClassName = classes.sharpKey
    } else {
      keyClassName = classes.key
    }
  }


  if (noteIsSharp(note)) {
    return (
      <div className={keyClassName}>
      </div>
    )
  } else {
    return (
      <div className={keyClassName} >
        <div className={classes['key-text']}>
          {note.toUpperCase()}
        </div>
      </div>
    )
  }
}

export default Key;