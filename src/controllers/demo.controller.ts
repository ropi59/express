import {Request, Response} from "express";
import {DemoModel} from "../models/demo.model";

export class DemoController {

    private model: DemoModel;

    constructor(model: DemoModel) {
        this.model = model;
    }

    // getString = (req: Request, res: Response) => {
    //     res.send("message depuis la démo");
    // }

    getString = (req: Request, res: Response) => {
        const data1 = "data a passer au html";
        const data2 = this.model.getData()
            res.render("demo", {data1, data2})
    }

    getPage = (req: Request, res: Response) => {
        res.render('page')
    }

    postString = (req: Request, res: Response) => {
        console.log(req.body);
        res.send(req.body);
    }

    getTest = (req: Request, res: Response) => {
        const id = req.params.id
        res.render('test', {id})
    }
}