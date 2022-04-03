import dotenv from "dotenv";
dotenv.config();

import Hapi from "@hapi/hapi";
import routes from "./routes";
import { db } from "./database";
import * as firebaseAdmin from "firebase-admin";
import credentials from "../credentials.json";

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(credentials)
});


let server = undefined;

const start = async () => {
  server = Hapi.server({
    port: 8000,
    host: "localhost",
  });

  routes.forEach((route) => server.route(route));

  db.connect();
  await server.start();
  console.log(`Server is listening on ${server.info.uri}`);
};

/**
 * This event triggers in case of some unknown exception
 */
process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

/**
 * This event trigger, when user tries to kill server forcefully, through ctrl+c
 */
process.on("SIGINT", async () => {
  console.log("Stopping Server");

  await server.stop({ timeout: 10000 });
  db.end();
  console.log("Server Stopped");
  process.exit(0);
});

start();
