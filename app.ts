import * as express from "express";
import { userController } from "./src/controllers/userController";
import {Request,Response } from "express";
const app = express();
const port = 8000;


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.get("/", (req:Request, res:Response) => {
  res.send("Hello World!");
});

app.route("/api/user/addUser").post(userController.createUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
