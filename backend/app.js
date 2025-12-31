const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Variables de entorno
const VERIFY_TOKEN = process.env.VERIFY_TOKEN || 'vibecode';
const PORT = process.env.PORT || 3000;

// Rutas básicas
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API de Joyerías García',
    version: '1.0.0'
  });
});

// Ruta de verificación (para webhooks)
app.get('/webhook', (req, res) => {
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.status(403).send('Token de verificación inválido');
  }
});

// Ruta POST para webhooks
app.post('/webhook', (req, res) => {
  const token = req.headers['x-verify-token'] || req.body.verify_token;

  if (token === VERIFY_TOKEN) {
    res.status(200).json({ success: true });
  } else {
    res.status(403).json({ error: 'Token de verificación inválido' });
  }
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
  console.log(`Token de verificación configurado: ${VERIFY_TOKEN}`);
});

module.exports = app;
