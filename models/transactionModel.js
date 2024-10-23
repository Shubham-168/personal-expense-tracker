const db = require('../config/db');

// Create a new transaction
exports.createTransaction = (transaction, callback) => {
  db.run(`INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`,
    [transaction.type, transaction.category, transaction.amount, transaction.date, transaction.description],
    function (err) {
      if (err) return callback(err);
      callback(null, this.lastID);
    }
  );
};

// Get all transactions
exports.getAllTransactions = (callback) => {
  db.all('SELECT * FROM transactions', [], (err, rows) => {
    if (err) return callback(err);
    callback(null, rows);
  });
};

// Additional methods for finding, updating, deleting transactions...
