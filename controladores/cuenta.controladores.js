const cuentas = [
  {
    "_id": "68fafc9e9d299067c55bd4f1",
    "isActive": true,
    "picture": "https://picsum.photos/200/300?random=0",
    "balance": 941,
    "client": "Hattie Scott",
    "gender": "female"
  },
  {
    "_id": "68fafc9e49b0160223dd2516",
    "isActive": false,
    "picture": "https://picsum.photos/200/300?random=1",
    "balance": 2506,
    "client": "Lois Ortiz",
    "gender": "female"
  },
  {
    "_id": "68fafc9e5f760f195f737b0a",
    "isActive": true,
    "picture": "https://picsum.photos/200/300?random=2",
    "balance": 1006,
    "client": "Rowena Abbott",
    "gender": "female"
  },
  {
    "_id": "68fafc9ecdbf8fb76dcc8848",
    "isActive": false,
    "picture": "https://picsum.photos/200/300?random=3",
    "balance": 1397,
    "client": "Rachel Foreman",
    "gender": "female"
  },
  {
    "_id": "68fafc9ef4c8732442d87ad1",
    "isActive": true,
    "picture": "https://picsum.photos/200/300?random=4",
    "balance": 2813,
    "client": "Snow Cherry",
    "gender": "male"
  },
  {
    "_id": "68fafc9e1461f0f910f309c8",
    "isActive": false,
    "picture": "https://picsum.photos/200/300?random=5",
    "balance": 501,
    "client": "Heather Hurst",
    "gender": "female"
  },
  {
    "_id": "68fafc9e563f9c38aba784d6",
    "isActive": false,
    "picture": "https://picsum.photos/200/300?random=6",
    "balance": 4133,
    "client": "Liz Trujillo",
    "gender": "female"
  }
];

const handleCuentasRequest = (req, res) => {
  const { queryParam } = req.query;

  if (queryParam) {
    const resultados = cuentas.filter(c =>
      c._id === queryParam ||
      c.client.toLowerCase().includes(queryParam.toLowerCase()) ||
      c.gender.toLowerCase() === queryParam.toLowerCase()
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
  const cuenta = cuentas.find(c => c._id === id);
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