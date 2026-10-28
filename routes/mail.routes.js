import express from 'express'
import { deleteEmail, generateEmails, updateEmail,getMyEmails,getEmailById,sendMail } from '../controller/mail.controller.js';
import {authMiddleware} from '../middleware/auth.middleware.js'

const router =express.Router();

router.post('/generate',authMiddleware,generateEmails);
router.get('/generate',authMiddleware,getMyEmails);
router.get('/:id',authMiddleware,getEmailById);
router.get('/:id',authMiddleware,updateEmail);
router.get('/:id',authMiddleware,deleteEmail);
router.post('/send',authMiddleware,sendMail)

export default router;