/*var express = require('express');
var app = express();
var mdb = require('mongoose');
var path = require('path');
var cors=require('cors');
var User = require('./models/user'); // Ensure proper case for the model
const PORT = 3001;

app.use(express.json());

// Connect to MongoDB
mdb.connect("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected Successfully"); 
  })
  .catch((err) => {
    console.log("Error in connection:", err);
  });

// Root Route
app.get('/', (req, res) => {
  res.send("Welcome to backend server");
});

// Static File Route
app.get('/static', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Fixed typo in __dirname
});

// Signup Route
app.post('/signup', async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email } = req.body; // Destructure the request body
  console.log(firstName, lastName, email);

  try {
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email
    });
    await newUser.save(); // Use await to save the new user
    console.log("User added successfully");
    res.status(200).send("User added successfully");
  } catch (err) {
    console.log(err); // Proper error logging
    res.status(500).send("Error adding user");
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Backend server started\nURL: http://localhost:${PORT}`);
});
*/

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

// Model for user (ensure you only declare it once)
const User = require('./models/User'); // Import the user model once

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); // To parse JSON data from the request
app.use(cors()); // To handle CORS issues

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/signup-demo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { name, email, Password } = req.body;

  if (!name || !email || !Password) {
    return res.status(400).json('Please provide name, email, and password');
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json('User already exists');
    }

    // Create a new user
    const newUser = new User({ name, email, Password });
    await newUser.save();

    // Return success response
    res.status(201).json('User registered successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json('Internal server error');
  }
});

app.post('/login',async(req,res)=>{
  var {email,Password}=req.body;
  console.log(email,Password)
  var exp=await User.findOne({email})
  if(exp){
    if(exp.Password===Password){
      res.json("user logined")
    }
    else{
      res.json("Password not correct");
    }
  }else{
    res.json("invalid mail");
  }
})

//contact
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("All fields are required");
  }

  console.log("Received data:", { name, email, message });

  // Simulate successful response
  res.status(200).send("Message received successfully!");
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});