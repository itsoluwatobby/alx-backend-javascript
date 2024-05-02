import express from 'express';

const app = express();
const PORT = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id', (request, response) => {
  const { id } = request.params;
  if (!/^\d+$/.test(id)) return response.sendStatus(404);
  response.send(`Payment methods for cart ${id}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
