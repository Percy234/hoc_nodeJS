import express from 'express';
import dotenv from 'dotenv';

import Router from './router/index.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

Router(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})