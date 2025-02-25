import express from "express";
const routerAdmin = express.Router();
import showroomController from "./controllers/showroom.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

/** SHOWROOM **/
routerAdmin.get("/", showroomController.goHome);

routerAdmin
    .get("/login", showroomController.getLogin)
    .post("/login", showroomController.processLogin);

routerAdmin
    .get("/signup", showroomController.getSignup)
    .post("/signup", 
        makeUploader("members").single("memberImage"),
        showroomController.processSignup);

routerAdmin.get("/logout", showroomController.logout);
routerAdmin.get("/check-me", showroomController.chechAuth);


/** Product **/
routerAdmin.get("/product/all", 
    showroomController.verifyShowroom, 
    productController.getAllProducts);

routerAdmin.post("/product/create", 
    showroomController.verifyShowroom,
    makeUploader("products").array('productImage', 5),
    productController.createNewProduct);

routerAdmin.post("/product/:id",
    showroomController.verifyShowroom,
    productController.updateChosenProduct);


/** USER  **/
export default routerAdmin; 