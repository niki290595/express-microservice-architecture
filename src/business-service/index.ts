import * as express from "express";
import { Request, Response, Application } from "express";
import * as bodyParser from "body-parser";
import * as mustacheExpress from "mustache-express";
import { EntityController } from "./controllers/entity.controller";

const app: Application = express();
const port = 8080;
const entityController = new EntityController();

// Register '.mustache' extension with The Mustache Express
app.engine("html", mustacheExpress());

app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.render("entities", { entities: entityController.findAll() });
});

app.get("/entity", (req: Request, res: Response) => {
  const id = <string>req.query.id;
  res.send(id ? entityController.findOne(id) : entityController.findAll());
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  entityController.update({
    ...req.body.entity,
  });
  res.send();
});

app.listen(port, () =>
  console.log(`Business service was started on port ${port}.`)
);
