const cuentas = [
  { id: "1", nombre: "Ana López", genero: "Femenino", balance: 1200, isActive: true },
  { id: "2", nombre: "Carlos Mendoza", genero: "Masculino", balance: 850, isActive: true },
  { id: "3", nombre: "Beatriz Ruiz", genero: "Femenino", balance: 2300, isActive: false },
  { id: "4", nombre: "Diego Fernández", genero: "Masculino", balance: 3400, isActive: true },
  { id: "5", nombre: "Elena Gómez", genero: "Femenino", balance: 950, isActive: true },
  { id: "6", nombre: "Fernando Díaz", genero: "Masculino", balance: 1500, isActive: false },
  { id: "7", nombre: "Gabriela Torres", genero: "Femenino", balance: 4200, isActive: true }
];

const handleCuentasRequest = (req, res) => {
  const { queryParam } = req.query;

  if (queryParam) {
    const resultados = cuentas.filter(c =>
      c.id === queryParam ||
      c.nombre.toLowerCase().includes(queryParam.toLowerCase()) ||
      c.genero.toLowerCase() === queryParam.toLowerCase()
    );

    if (resultados.length === 0) {
      return res.json({ finded: false });
    }
    if (resultados.length === 1) {
      return res.json({ finded: true, account: resultados[0] });
    }
    return res.json({ finded: true, data: resultados });
  }

  return res.json({
    count: cuentas.length,
    data: cuentas
  });
};

const getCuentaById = (req, res) => {
  const { id } = req.params;
  const cuenta = cuentas.find(c => c.id === id);
  if (cuenta) {
    return res.json({ finded: true, account: cuenta });
  }
  return res.json({ finded: false });
};

const getTotalBalance = (req, res) => {
  const activas = cuentas.filter(c => c.isActive);
  if (activas.length === 0) {
    return res.json({ status: false });
  }
  const total = activas.reduce((sum, c) => sum + c.balance, 0);
  return res.json({ status: true, accountBalance: total });
};

module.exports = {
  handleCuentasRequest,
  getCuentaById,
  getTotalBalance
};