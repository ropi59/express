import express from "express";
import {DemoController} from "../controllers/demo.controller";
import {DemoModel} from "../models/demo.model";

//on récupère le router d'express
const router = express.Router();
const model = new DemoModel();
const controller = new DemoController(model);

router.get("/", controller.getString);
router.get('/page', controller.getPage)
router.get('/test/:id', controller.getTest)
router.post("/", controller.postString);

export default router;