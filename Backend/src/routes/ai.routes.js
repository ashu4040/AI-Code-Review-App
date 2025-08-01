import express from "express";
import { getresponse } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/getResponse", 
     getresponse
)

export default router;  