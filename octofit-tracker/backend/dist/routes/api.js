"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
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
exports.default = router;
