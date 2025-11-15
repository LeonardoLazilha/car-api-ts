"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.updateCar = exports.getCar = exports.listCars = exports.createCar = void 0;
const car_1 = __importDefault(require("../models/car"));
const createCar = async (data) => {
    return car_1.default.create(data);
};
exports.createCar = createCar;
const listCars = async () => {
    return car_1.default.find();
};
exports.listCars = listCars;
const getCar = async (id) => {
    return car_1.default.findById(id);
};
exports.getCar = getCar;
const updateCar = async (id, data) => {
    return car_1.default.findByIdAndUpdate(id, data, { new: true });
};
exports.updateCar = updateCar;
const deleteCar = async (id) => {
    await car_1.default.findByIdAndDelete(id);
};
exports.deleteCar = deleteCar;
