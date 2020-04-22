import * as request from "request";
import { EntityController } from "./controllers/entity.controller";
import { IEntity } from "../models/entity.model";

const entityController = new EntityController();
const businessService = "http://localhost:8080";

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function send(entity: IEntity) {
  console.log(entity.ID);
  request.post({
    headers: { "content-type": "application/json" },
    url: `${businessService}`,
    body: { entity },
    json: true,
  });
}

async function work(ms: number) {
  const entity = entityController.getUpdateEntity();
  send(entity);
  await sleep(ms);
  work(ms);
}

work(1000 / 10);
