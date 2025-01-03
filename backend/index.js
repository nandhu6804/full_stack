/*var express = require('express');
var path = require('path');
var mdb = require('mongoose');
var User = require('../backend/models/users');
var Admin = require('../backend/models/admin');
var app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(express.static(path.join(__dirname, 'public')));

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
    //res.json("hello!!! let's learn");
    const userLoggedIn = req.session && req.session.user;
    if (userLoggedIn) {
        res.redirect('/login');
    }
    else {
        res.sendFile(path.join(__dirname, 'public', 'user-signup.html'));
    }
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
app.post('/postsignup', async (req, res) => {
    console.log("Request body:", req.body);
    const { firstName, lastName, email, password } = req.body;

    try {
        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password
        });
        await newUser.save();
        console.log("User added successfully...");
        res.status(200).send("User added successfully...");
    }
    catch (err) {
        console.error("Error saving user:", err);
        res.status(500).send("Error adding user.");
    }
});

//get method for signup
//single get-no use of async&await
//miltiple get-use async&await
app.get('/getsignup', async (req, res) => {
    try {
        var allSignUpRecords = await User.find();
        res.json(allSignUpRecords);
        console.log("All data are fetched..")
    }
    catch (err) {
        console.log(err);
        res.send(err);
        //console.log("Can't able to fetch data")
    }
});

//signup route
app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const newUser = new User({
            firstName,
            lastName,
            email,
            password
        });
        await newUser.save();
        res.status(200).send("Signup successful!");
    } catch (err) {
        res.status(500).send("Error signing up user.");
    }
});

//login route
app.post('/login', async (req, res) => {
    var { email, password } = req.body;
    try {
        //var existingUser = await User.findOne({ email, password });
        var existingUser = await User.findOne({ email: email });
        console.log(existingUser)
        if (existingUser) {
            if (existingUser.password !== password) {
                res.json({ message: "Invalid Credentials", isLoggedin: false })
                //res.status(401).send("Invalid credentials.");
            }
            else {
                res.json({ message: "Login successful", isLoggedin: true })
                //res.status(200).send("Login successful!");
            }
        }
    }
    catch (err) {
        res.status(500).send("Server error.");
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
    res.sendFile(path.join(__dirname, 'public', 'user-signup.html'));
});

// Route to delete a user by ID
app.delete('/delete-user/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        // Find and delete the user by their ObjectId
        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }

        // Successful deletion
        res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Error deleting user' });
    }
});

// Route to delete an admin by ID
app.delete('/delete-admin/:id', async (req, res) => {
    const adminId = req.params.id;

    try {
        // Find and delete the admin by their ObjectId
        const admin = await Admin.findByIdAndDelete(adminId);

        if (!admin) {
            return res.json({ success: false, message: 'Admin not found' });
        }

        // Successful deletion
        res.json({ success: true, message: 'Admin deleted successfully' });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Error deleting admin' });
    }
});

// User Signup
app.post('/user/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username:username, password: hashedPassword });
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
    const { adminName, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({ adminName:adminName, email:email, password: hashedPassword });
        await newAdmin.save();
        res.status(201).send('Admin signup successful!');
    } catch (err) {
        console.error('Error signing up admin:', err);
        res.status(500).send('Error signing up admin.');
    }
});

// Admin Login
app.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Fetch admin from database
        const admin = await Admin.findOne({ adminName: username });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // If login is successful
        return res.status(200).json({ message: 'Admin login successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
});

// Fetch All Users (Admin Only)
app.get('/admin/users', async (req, res) => {
    try {
        const users = await User.find(); // Fetch users from User model
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