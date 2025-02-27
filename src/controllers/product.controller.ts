import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { ProductInput } from "../libs/types/product";
import { AdminRequest } from "../libs/types/member";



const productController: T = {};
const productService = new ProductService;

/** SPA **/


/** SSR **/
productController.getAllProducts = async (req:  Request, res: Response) => {
    try {
        console.log("getAllProducts");
        res.render("products");
        
        
    } catch (error) {
        console.log("Error, getAllProducts:", error);
        if(error instanceof Errors) res.status(error.code).json(error);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

productController.createNewProduct = async (req: AdminRequest, res: Response) => {
    try {
        console.log("createNewProduct");

        if(!req.files?.length) 
            throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);
        
        const data: ProductInput = req.body;
        data.productImages = req.files?.map(ele =>  {
            return ele.path.replace(/\\/g, "/");
        });

        await productService.createNewProduct(data);
        res.send(`<script>alert("Sucessfully created!"); window.location.replace('admin/product/all')</script>`)
    } catch (error) {
        console.log("Error, createNewProduct:", error);
        const message = error instanceof Errors ? error.message : Message.SOMETHING_WENT_RONG;
        res.send(`<script>alert("${message}"); window.location.replace('admin/product/all')</script>`)
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