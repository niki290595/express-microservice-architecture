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

type TFunction = (...args: any[]) => void;

function send(entity: IEntity, resF: TFunction, errF: TFunction) {
  request
    .post({
      headers: { "content-type": "application/json" },
      url: `${businessService}`,
      body: { entity },
      json: true,
    })
    .on("response", resF)
    .on("error", errF);
}

async function work(ms: number) {
  const entity = entityController.getUpdateEntity();
  send(
    entity,
    async () => {
      await sleep(ms);
      work(ms);
    },
    async () => {
      console.log("No data send");
      await sleep(1000 * 5);
      work(ms);
    }
  );
}

console.log("Data stub service was started...");
work(1000 / 10);
