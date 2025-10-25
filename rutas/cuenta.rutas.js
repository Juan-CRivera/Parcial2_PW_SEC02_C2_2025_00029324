const express = require('express');
const router = express.Router();
const {
  handleCuentasRequest,
  getCuentaById,
  getTotalBalance
} = require('../controladores/cuenta.controladores');

// listas de cuentas y busqueda
router.get('/cuentas', handleCuentasRequest);

//cuenta por id
router.get('/cuenta/:id', getCuentaById);

//balance total
router.get('/cuentasBalance', getTotalBalance);

module.exports = router;