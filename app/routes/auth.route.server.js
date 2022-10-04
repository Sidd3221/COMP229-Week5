import { Router } from "express";
const router = Router();

// Display Login page
router.get('/login', DisplayLoginPage);
router.post('/login', ProcessLoginPage);

//Display registration page
router.get('/register', DisplayRegisterPage);
router.post('/register', ProcessRegistrationPage);

//Process log out page

router.get('/logout', ProcessLogoutPage);

export default router;

