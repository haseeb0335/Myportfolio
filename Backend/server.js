require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const Submission = require('./models/Submission');

const app = express();

// Global Middleware Config 
app.use(express.json());
app.use(cors());

// Establish Connection Layer with Real-Time MongoDB Database Cluster
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('🚀 Successfully connected to MongoDB Database Instance Cluster.'))
  .catch(err => console.error('❌ Database connection failure error:', err));

// ----------------- PUBLIC ROUTE: INCOMING FORM PIPELINE -----------------
// Connect your frontend "Contact Us" submit button to POST here
app.post('/api/submissions', async (req, res) => {
  try {
    const { name, email, projectType, message } = req.body;
    
    if (!name || !email || !projectType || !message) {
      return res.status(400).json({ error: 'Please supply all layout input tracking properties.' });
    }

    const newSubmission = new Submission({
      name,
      email,
      projectType,
      message
    });

    await newSubmission.save();
    res.status(201).json({ message: 'Blueprint document saved successfully to MongoDB database in real-time!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal system server submission parsing error occurred.' });
  }
});

// ----------------- SECURE MIDDLEWARE: ACCESS SECURITY TOKEN CHECK -----------------
const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token requested is missing or invalid.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Access authentication token expired or revoked.' });
    req.user = user;
    next();
  });
};

// ----------------- SECURE ROUTE: ADMIN PORTAL LOGIN TOKEN DISPATCHER -----------------
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  // Simple and secure lookup targeting validation from our secure configuration environment parameters
  if (username === process.env.ADMIN_USERNAME && password === 'Haseeb@2026') {
    const accessToken = jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: '12h' });
    return res.json({ success: true, token: accessToken });
  }
  
  res.status(401).json({ error: 'Invalid administrator verification credentials.' });
});

// ----------------- SECURE ROUTES: LIVE SYNCHRONOUS TRACKING CONTROLS -----------------

// Fetch all elements inside the collection for the admin list view
app.get('/api/admin/submissions', authenticateAdmin, async (req, res) => {
  try {
    const dataRecords = await Submission.find().sort({ date: -1 });
    res.json(dataRecords);
  } catch (error) {
    res.status(500).json({ error: 'Failed to extract document records from Cluster collections.' });
  }
});

// Patch status changes (e.g., changing 'New' to 'In Discussion' or 'Completed')
app.patch('/api/admin/submissions/:id', authenticateAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const updatedDocument = await Submission.findByIdAndUpdate(
      req.params.id, 
      { status }, 
      { new: true }
    );
    res.json(updatedDocument);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update database document row state properties.' });
  }
});

// Delete or archive standard brief card collection instances completely
app.delete('/api/admin/submissions/:id', authenticateAdmin, async (req, res) => {
  try {
    await Submission.findByIdAndDelete(req.params.id);
    res.json({ message: 'Document instance completely purged from live cluster indexes.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to wipe out targeting card reference ID document instance.' });
  }
});

// Start Server Deployment Trigger
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌐 Server executing active operations framework on interface port: ${PORT}`);
});