import { Request, Response } from "express";
import Errors from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";


const productController: T = {};
const productService = new ProductService;

productController.getAllProducts = async (req: AdminRequest, res: Response) => {
    try {
        console.log("getAllProducts");
        console.log("req.member:", req.member);
        res.render("products");
        
        
    } catch (error) {
        console.log("Error, getAllProducts:", error);
        if(error instanceof Errors) res.status(error.code).json(error);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

productController.createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log("createNewProduct");
        
    } catch (error) {
        console.log("Error, createNewProduct:", error);
        if(error instanceof Errors) res.status(error.code).json(error);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log("updateChosenProduct");
        
    } catch (error) {
        console.log("Error, updateChosenProduct:", error);
        if(error instanceof Errors) res.status(error.code).json(error);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

export default productController;