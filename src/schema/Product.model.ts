import mongoose, {Schema} from "mongoose";
import { FuelType, ProductCollection, ProductStatus } from "../libs/enums/product.enum";

const productSchema = new Schema(
    {
        productStatus: {
            type: String,
            enum: ProductStatus,
            default: ProductStatus.PAUSE
        },
        
        productCollection: {
            type: String,
            enum: ProductCollection,
            required: true,
        },

        brand: {
            type: String,
            required: true,
        },

        model: {
            type: String,
            required: true,
        },

        year: {
            type: Number,
            required: true,
            min: 1886,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        fuelType:{
            type: String,
            enum: FuelType,
            required: true,
        },

        mileage: { 
            type: Number, 
            required: true, 
            min: 0 
        }, // Mileage in kilometers
        
        engineCapacity: {
            type: Number, 
            required: true, 
            min: 0.5 
        }, // Minimum engine capacity is 0.5L
        
        horsepower: { 
            type: Number, 
            required: true, 
            min: 10 
        }, // Minimum 10 HP for valid cars
        
        color: { 
            type: String, 
            required: true 
        },

        productDesc: {
            type: String,
        },

        productImages: {
            type: [String],
            default: [],
        },

        productViews: {
            type: Number,
            default: 0,
        },

    },
    {
        timestamps: true
    }
);

export default mongoose.model("Product", productSchema);