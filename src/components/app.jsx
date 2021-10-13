import React, {useState} from 'react';
import Piano from './piano.jsx';
import Notes from './notes.jsx';
import {makeStyles} from '@mui/styles';




const useStyles = makeStyles({
  app: {
    'background': 'grey',
  }
})

const App = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Piano />
      <Notes />
    </div>
  )
}

export default App;