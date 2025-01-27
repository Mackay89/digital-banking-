const express = require('express');
const { getAccountDetails, updateAccount } = require('../controllers/accountController');

const router = express.Router();

router.get('/:userId', getAccountDetails);
router.put('/:userId', updateAccount);

module.exports = router;

