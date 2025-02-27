import {ObjectId} from "mongoose";
import { FuelType, ProductCollection, ProductStatus } from "../enums/product.enum";

export interface Product {
    _id: ObjectId;
    productStatus: ProductStatus;
    productCollection: ProductCollection;
    brand: string;
    model: string;
    year: number;
    price: number;
    fuelType: FuelType;
    mileage: number;
    engineCapacity: number;
    horsepower: number;
    color: string;
    productDesc?: string;
    productImages: string[];
    productViews: number;
}


export interface ProductInput {
    productStatus?: ProductStatus;
    productCollection: ProductCollection;
    brand: string;
    model: string;
    year: number;
    price: number;
    fuelType: FuelType;
    mileage: number;
    engineCapacity: number;
    horsepower: number;
    color: string;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}