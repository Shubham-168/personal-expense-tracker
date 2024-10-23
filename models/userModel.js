const db = require('../config/db');

// Create a new user
exports.createUser = (username, hashedPassword, callback) => {
  db.run(`INSERT INTO users (username, password) VALUES (?, ?)`,
    [username, hashedPassword],
    function (err) {
      if (err) return callback(err);
      callback(null, this.lastID);
    }
  );
};

// Find user by username
exports.findUserByUsername = (username, callback) => {
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
    if (err) return callback(err);
    callback(null, user);
  });
};
