const Transaction = require('../models/transactionModel');

exports.createTransaction = (req, res) => {
  const { type, category, amount, date, description } = req.body;

  if (!type || !category || !amount || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newTransaction = { type, category, amount, date, description };

  Transaction.createTransaction(newTransaction, (err, transactionId) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: transactionId });
  });
};

exports.getAllTransactions = (req, res) => {
  Transaction.getAllTransactions((err, transactions) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(transactions);
  });
};
