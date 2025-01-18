import { estadoService } from "../services/estadoService.js";
import { Router } from "express";

const estadoController  = Router();

estadoController.get('/',async (req,res)=> res.json(await estadoService.findAll()));

export default estadoController;


