 const path = require('path');
 const transactionController = require('../controllers/income');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');

const router = require('express').Router()


router.post('/add-income', transactionController.addIncome)
router.get('/get-incomes',transactionController.getIncomes)
router.delete('/delete-income', transactionController.deleteIncome)

router.post('/add-expense', addExpense)
router.get('/get-expenses', getExpense)
router.delete('/delete-expenses/:id',deleteExpense)

module.exports = router
