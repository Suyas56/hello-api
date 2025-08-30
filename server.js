const express = require('express');
const app = express();

app.get('/sayHello', (req, res) => {
  res.json({ message: 'Hello User' });
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Hello API listening on port ${PORT}`);
});