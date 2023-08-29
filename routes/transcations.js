 const path = require('path');
 const transactionController = require('../controllers/income');


const router = require('express').Router()



router.post('/add-income', transactionController.addIncome)
router.get('/get-incomes',transactionController.getIncomes)
router.delete('/delete-income/:id', transactionController.deleteIncome)
module.exports = router