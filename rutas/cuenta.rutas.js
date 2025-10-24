const express = require('express');
const router = express.Router();
const {
  handleCuentasRequest,
  getCuentaById,
  getTotalBalance
} = require('../controladores/cuenta.controladores');

// GET /cuentas → listado y búsqueda
router.get('/cuentas', handleCuentasRequest);

// GET /cuenta/:id → una cuenta
router.get('/cuenta/:id', getCuentaById);

// GET /cuentasBalance → balance total
router.get('/cuentasBalance', getTotalBalance);

module.exports = router;