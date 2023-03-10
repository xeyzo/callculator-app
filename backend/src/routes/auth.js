import express from "express";
import { signup, signin} from "../controllers/auth.controller.js";
import { authentication } from "../middlewares/auth.middleware.js";

const router = express.Router()


router.post('/signup', signup)
router.post('/signin', signin)



export { router as authRouter }