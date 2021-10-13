const express = require('express');
const app = express()
const PORT = 3000


app.use(express.static('./dist'))

app.listen(PORT, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log('listening on port ', PORT);
  }
})