const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookreviewapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

// Register Route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashed });
  await user.save();
  res.json({ message: 'User registered!' });
});

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: 'User not found' });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Wrong password' });
  const token = jwt.sign({ id: user._id }, 'secretkey');
  res.json({ token });
});

const bookSchema = new mongoose.Schema({
  username: String,
  title: String,
  author: String,
  year: String,
  coverId: String,
  notes: String,
  rating: String // <-- add this line
});
const Book = mongoose.model('Book', bookSchema);

// Add Book route
app.post('/add-book', async (req, res) => {
  const { username, title, author, year, coverId } = req.body;
  await Book.create({ username, title, author, year, coverId });
  res.json({ success: true });
});

// Get User's Books route
app.get('/my-books', async (req, res) => {
  const { username } = req.query;
  const books = await Book.find({ username });
  res.json({ books });
});

// Delete Book route
app.post('/delete-book', async (req, res) => {
  const { id } = req.body;
  try {
    await Book.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// Update Book Notes route
app.post('/update-book', async (req, res) => {
  const { id, notes, rating } = req.body; // <-- add rating here
  try {
    await Book.findByIdAndUpdate(id, { notes, rating }); // <-- update rating too
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// Start server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));