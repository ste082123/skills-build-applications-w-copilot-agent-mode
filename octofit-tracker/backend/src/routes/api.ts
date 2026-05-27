import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'octofit-backend',
    port: 8000,
    mongo: {
      host: 'localhost',
      port: 27017,
      database: 'octofit_db'
    }
  });
});

export default router;
