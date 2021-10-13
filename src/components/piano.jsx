import React, {useState, useEffect} from 'react';
import Key from './key.jsx';
import {makeStyles} from '@mui/styles';
// import song from '../sounds/song.mp3';

const useStyles = makeStyles({
  piano: {
    'display': 'flex',
    'flex-direction': 'row',
  }
})


const Piano = () => {
  const [pressedKeys, setPressedKeys] = useState([]);
  const [playing, setPlaying] = useState(true);
  const classes = useStyles();
  // const notes = [
  //   'c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab', 'a', 'bb', 'b'
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
  const keyToNote = {
    a: 'c',
    w: 'db',
    s: 'd',
    e: 'eb',
    d: 'e',
    f: 'f',
    u: 'gb',
    j: 'g',
    i: 'ab',
    k: 'a',
    o: 'bb',
    l: 'b'
  }
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

  const playNote = (note) => {
    if (note) {
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.play();
    }
  }


  const handleKeyDown = (e) => {
    if (e.repeat) {
      return
    }
    console.log('down')
    let key = e.key;
    // // console.log(Object.keys(keyToNote).includes(key)) --- checks for valid keys (ones with associated notes)
    let updatedKeys = pressedKeys
    if (!pressedKeys.includes(key) && Object.keys(keyToNote).includes(key)){
      updatedKeys.push(key);
      console.log(updatedKeys)
      setPressedKeys(updatedKeys);
    }
    console.log('relative note with given key', keyToNote[key])
    playNote(keyToNote[key])
  }
  const handleKeyUp = (e) => {
    if (e.repeat) {
      return
    }
    console.log('up')
    let key = e.key;
    if (pressedKeys.includes(key)) {
      let updatedKeys = pressedKeys
      updatedKeys.splice(updatedKeys.indexOf(key), 1);
      setPressedKeys(updatedKeys)
      console.log(updatedKeys)
    }
  }
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('keydown', handleKeyDown)
    console.log('rendered')
  })
  useEffect(() => {
    console.log('pressedKeys has changed')
  }, [pressedKeys])

  return (
    <div className={classes.piano}>
      <h1>Piano!</h1>
      {NOTES.map((note, index) => {
        return <Key
        note={note}
        key={index}
        pressedKeys={pressedKeys}
        />
      })}
      {/* <audio controls>
        <source src={'./song.mp3'} type="audio/mpeg"></source>
      </audio> */}
    </div>
  )
}

export default Piano;