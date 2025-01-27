const express = require('express');
const { getTransactions, addTransaction } = require('../controllers/transactionController');

const router = express.Router();

router.get('/:accountId', getTransactions);
router.post('/:accountId', addTransaction);

module.exports = router;

