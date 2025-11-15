"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getOne = exports.getAll = exports.create = void 0;
const car_services_1 = require("../services/car-services");
const create = async (req, res) => {
    try {
        const car = await (0, car_services_1.createCar)(req.body);
        res.status(201).json(car);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.create = create;
const getAll = async (req, res) => {
    try {
        const cars = await (0, car_services_1.listCars)();
        res.status(200).json(cars);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAll = getAll;
const getOne = async (req, res) => {
    try {
        const car = await (0, car_services_1.getCar)(req.params.id);
        if (!car) {
            res.status(404).json({ message: "Car not found" });
            return;
        }
        res.status(200).json(car);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getOne = getOne;
const update = async (req, res) => {
    try {
        const car = await (0, car_services_1.updateCar)(req.params.id, req.body);
        res.status(200).json(car);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const car = await (0, car_services_1.deleteCar)(req.params.id);
        res.status(200).json(car);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.remove = remove;
