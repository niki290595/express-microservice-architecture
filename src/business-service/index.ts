import * as express from "express";
import { Request, Response, Application } from "express";
import * as bodyParser from "body-parser";
import { EntityController } from "./controllers/entity.controller";

const app: Application = express();
const port = 8080;
const entityController = new EntityController();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  const id = <string>req.query.id;
  res.send(id ? entityController.findOne(id) : entityController.findAll());
});

app.post("/", (req: Request, res: Response) => {
  entityController.update({
    ID: req.body.ID,
    p1: req.body.p1,
    p2: req.body.p2,
    p3: req.body.p3,
    p4: req.body.p4,
    p5: req.body.p5,
  });
  res.send();
});

app.listen(port, () =>
  console.log(`Business service was started on port ${port}.`)
);
