import express from 'express';
import mongoose from 'mongoose';
import apiRouter from './routes/api';

const app = express();
const port = Number(process.env.PORT) || 8000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());
app.use('/api', apiRouter);

app.get('/', (_req, res) => {
  res.json({
    name: 'OctoFit Tracker API',
    baseUrl,
    api: `${baseUrl}/api`
  });
});

async function start(): Promise<void> {
  await mongoose.connect(mongoUri);

  app.listen(port, () => {
    console.log(`OctoFit backend running on port ${port}`);
    console.log(`Connected to MongoDB: ${mongoUri}`);
  });
}

start().catch((error) => {
  console.error('Failed to start server', error);
  process.exit(1);
});
