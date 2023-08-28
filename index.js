const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/runtime/external-payment', (req, res) => {
  const { vehicle_category, payment_issuer, plate, account_number } = req.body;
  const errors = {};

  if (!vehicle_category || vehicle_category.length !== 2) {
    errors.category_code = 'Category code must be a string of length 2.';
  }

  if (!payment_issuer || payment_issuer.length !== 4) {
    errors.payment_issuer = 'Payment issuer must be a string of length 4.';
  }

  if (!plate || plate.length < 6 || plate.length > 8) {
    errors.plate = 'Plate must be a string of length between 6 and 8.';
  }

  if (!account_number) {
    errors.account_number = 'Account number is required.';
  }

  if (Object.keys(errors).length > 0) {
    res.status(406).json({ return_code: '9702', errors });
  } else {
    res.status(200).json({ return_code: '9000', errors });
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});

// TODO add api call to Pago Directo's module with the operator response.