// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 5004; // Choose a port for your backend

// Middleware to parse JSON requests
app.use(express.json());

// Disable CORS in development
if (process.env.NODE_ENV !== 'production') {
  app.use(cors());
}

// Initialize SQLite database
const db = new sqlite3.Database('leaderboard.db'); // Use 'leaderboard.db' for persistent storage

// Create leaderboard table if it doesn't exist
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS leaderboard (username TEXT, score INTEGER)");
});

// Function to get top 10 scores
const getTopScores = (res, statusCode = 200) => {
  db.all("SELECT username, score FROM leaderboard ORDER BY score ASC LIMIT 10", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(statusCode).json(rows);
  });
};

// Route to add a new score
app.post('/api/leaderboard', (req, res) => {
  const { username, score } = req.body;
  db.run("INSERT INTO leaderboard (username, score) VALUES (?, ?)", [username, score], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const newScoreId = this.lastID; // Capture the last inserted ID
    console.log(`New score added with ID: ${newScoreId}`);
    getTopScores(res, 201);
  });
});

// Route to get all scores
app.get('/api/leaderboard', (req, res) => {
  getTopScores(res);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
