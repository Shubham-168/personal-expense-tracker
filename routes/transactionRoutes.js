const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authenticateToken = require('../middleware/authMiddleware');

// Protected transaction routes
router.post('/', authenticateToken, transactionController.createTransaction);
router.get('/', authenticateToken, transactionController.getAllTransactions);

module.exports = router;
