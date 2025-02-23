import express from "express";
const routerAdmin = express.Router();
import showroomController from "./controllers/showroom.controller";

/** SHOWROOM **/
routerAdmin.get("/", showroomController.goHome);

routerAdmin
    .get("/login", showroomController.getLogin)
    .post("/login", showroomController.processLogin);

routerAdmin
    .get("/signup", showroomController.getSignup)
    .post("/signup", showroomController.processSignup);

routerAdmin.get("/logout", showroomController.logout);
routerAdmin.get("/check-me", showroomController.chechAuth);


/** Product **/


/** USER  **/
export default routerAdmin;