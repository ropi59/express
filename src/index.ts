import express, {Request, Response} from 'express';
import demoRouter from "./routers/demo.router";
import usersRouter from "./routers/users.router";

import * as path from "path"
import 'dotenv/config'

const app = express();
const port = process.env.PORT;

//middleware pour décrypter le json
app.use(express.json());
//middleware pour recuperer les inputs d'un form
app.use(express.urlencoded());
//middleware pour utiliser le demorouter
app.use(demoRouter);
//middleware pour utiliser le usersRouter
app.use(usersRouter);


//middleware pour utiliser bootstrap
app.use("/bootstrap", express.static(path.join(process.cwd(), "/node_modules/bootstrap/dist/css")));

//mise en place du dossier public
app.use("/public", express.static(path.join(process.cwd(), "/src/public")));

//configuration de ejs
//path.join === concatene des infos pour en faire un path
//process.cwd === le path de la racine du projet
app.set("views", path.join(process.cwd(), "src/views"));
//generateur de template qu'on utilise === ejs
app.set('view engine', 'ejs');

/*
//renvoie "ok" a l'utilisateur
app.get('/', (req: Request, res: Response) => {
    res.send('ok')
})

//récupère ce qu'on envoi en requete post et l'affiche
app.post('/demo', (req: Request, res: Response) => {
    console.log(req.body);
    res.send(req.body)
})
*/

//Lance le serveur sur le port 3000
app.listen(port, () => {
    console.log(` serveur lancé sur le port ${port}`)
})