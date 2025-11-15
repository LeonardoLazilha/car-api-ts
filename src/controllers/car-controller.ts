import { Request, Response } from "express";
import { createCar, listCars, getCar, updateCar, deleteCar } from "../services/car-services";

export const create = async (req: Request, res: Response): Promise<void> => {
    try{
        const car = await createCar(req.body);
        res.status(201).json(car);
    }catch (error: any){
        res.status(400).json({ error: error.message });
    }
};