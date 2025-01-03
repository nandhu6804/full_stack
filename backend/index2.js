/*var express = require('express');
var path = require('path');
var mdb = require('mongoose');
var User = require('./models/users');
var Admin = require('./models/admin');
var app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection
mdb.connect("mongodb://localhost:27017/")
    .then(() => {
        console.log("MongoDB Connection Successful...");
    })
    .catch((err) => {
        console.error("Check Your Connection String...", err);
    });

// GET methods
app.get('/', (req, res) => {
    res.json("hello!!! let's learn");
});

app.get('/json', (req, res) => {
    res.json({ server: 'hello!!!', url: 'localhost', port: '3001' });
});

app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/html2', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2.html'));
});

// POST method for signup
//single post-no use of async&await
//miltiplepost-use async&await
app.post('/postsignupadmin', async (req, res) => {
    console.log("Request body:", req.body);
    const { firstName, lastName, email, password } = req.body;

    try {
        // Create a new user
        const newAdmin = new Admin({
            firstName,
            lastName,
            email,
            password
        });
        await newAdmin.save();
        console.log("Admin added successfully...");
        res.status(200).send("Admin added successfully...");
    } catch (err) {
        console.error("Error saving admin:", err);
        res.status(500).send("Error adding admin.");
    }
});

//get method for signup
//single get-no use of async&await
//miltiple get-use async&await
app.get('/getsignupadmin', async (req, res) => {
    try {
        var allSignUpRecords = await Admin.find();
        res.json(allSignUpRecords);
        console.log("All data are fetched..")
    }
    catch (err) {
        console.log(err);
        res.send(err);
        //console.log("Can't able to fetch data")
    }
});

// Start server
app.listen(PORT, () => {
    console.log('Backend Server Started\nURL: http://localhost:3001');
});
*/

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/users'); // User Model
const Admin = require('./models/admin'); // Admin Model
const bcrypt = require('bcryptjs'); // For password hashing
const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose
    .connect('mongodb://localhost:27017/db')
    .then(() => console.log('MongoDB Connection Successful...'))
    .catch((err) => console.error('Check Your Connection String...', err));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin-signup.html'));
});

// User Signup
app.post('/user/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// User Login
app.post('/user/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'User login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Admin Signup
app.post('/admin/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({ username, password: hashedPassword });
        await newAdmin.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Admin Login
app.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Admin login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Fetch All Users (Admin Only)
app.get('/admin/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Error fetching users.');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
