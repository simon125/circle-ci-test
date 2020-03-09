const express = require('express');
const connectDB = require('./config/db');
const Counter = require('./models/Counter');
const app = express();
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/current', async (req, res) => {
  try {
    // I know it is dummy but it is only for test, I just wanted to store id somewhere :D
    const counter = await Counter.findById('5e66b966e8bc802061a41326');

    res.status(200).json(counter);
  } catch (error) {
    res.json({ value: 0 });
    console.log(error);
  }
});

app.get('/current/add', async (req, res) => {
  const counter = await Counter.findById('5e66b966e8bc802061a41326');
  const newVal = counter.value + 1;
  const toFront = await Counter.findByIdAndUpdate(
    '5e66b966e8bc802061a41326',
    {
      value: newVal
    },
    { new: true }
  );
  res.json(toFront);
});

app.get('/current/minus', async (req, res) => {
  const counter = await Counter.findById('5e66b966e8bc802061a41326');
  const newVal = counter.value - 1;
  const toFront = await Counter.findByIdAndUpdate(
    '5e66b966e8bc802061a41326',
    {
      value: newVal
    },
    { new: true }
  );
  res.json(toFront);
});

app.use(express.static('test-clicker-mern-circleci/build'));

// It is from tutorial reconsider if we really need this code

// app.get('*', (req, res) =>
//   res.sendFile(
//     path.resolve(__dirname, 'test-clicker-mern-circleci', 'build', 'index.html')
//   )
// );

app.listen(PORT, () => {
  console.log('Server is running...');
});
