import express from "express";
const routerAdmin = express.Router();
import showroomController from "./controllers/showroom.controller";

routerAdmin.get("/", showroomController.goHome);

routerAdmin.get("/login", showroomController.getLogin);

routerAdmin.get("/signup", showroomController.getSignup);


export default routerAdmin;