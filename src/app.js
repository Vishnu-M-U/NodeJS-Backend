const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get("/hi", (req, res) => {
  res.send('Hi From Server');
});

