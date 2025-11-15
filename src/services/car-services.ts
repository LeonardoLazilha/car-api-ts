import Car, { ICar } from "../models/car";

export const createCar = async (data: Partial<ICar>): Promise<ICar> => {
    return Car.create(data);
};

export const listCars = async (): Promise<ICar[]> => {
    return Car.find();
};

export const getCar = async (id: string): Promise<ICar | null> => {
    return Car.findById(id);
};

export const updateCar = async (id: string, data: Partial<ICar>): Promise<ICar | null> => {
    return Car.findByIdAndUpdate(id, data, {new: true});
};

export const deleteCar = async (id: string): Promise<void> => {
    await Car.findByIdAndDelete(id);
};