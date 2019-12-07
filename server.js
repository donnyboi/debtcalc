const express = require('express');
const app = express();
const path = require('path');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.send('Welcome to Debt Calc'));
app.post('/debt', (req, res) => {
  const newDebt = {
    name: req.body.name,
    amount: req.body.amount
  };
  console.log(` Entered debt amount` + req.body);
  return res.json(newDebt);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
