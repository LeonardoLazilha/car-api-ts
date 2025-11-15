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

export const getAll = async (req: Request, res: Response): Promise<void> => {
    try{
        const cars = await listCars();
        res.status(200).json(cars);
    }catch (error: any){
        res.status(500).json({ error: error.message });
    }
};

export const getOne = async (req: Request, res: Response): Promise<void> => {
    try{
        const car = await getCar(req.params.id);

        if(!car){
            res.status(404).json({ message: "Car not found" });
            return;
        }

        res.status(200).json(car);
    }catch (error: any){
        res.status(500).json({ error: error.message });
    }
};

export const update = async (req: Request, res: Response): Promise<void> => {
    try{
        const car = await updateCar(req.params.id, req.body);
        res.status(200).json(car);
    }catch (error: any){
        res.status(500).json({ error: error.message });
    }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
    try{
        const car = await deleteCar(req.params.id);
        res.status(200).json(car);
    }catch (error: any){
        res.status(500).json({ error: error.message });
    }
};