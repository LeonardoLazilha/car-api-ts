"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_services_1 = require("../services/car-services");
const car_1 = __importDefault(require("../models/car"));
jest.mock("../models/car", () => ({
    __esModule: true,
    default: {
        find: jest.fn(),
        create: jest.fn(),
        findById: jest.fn(),
        findByIdAndUpdate: jest.fn(),
        findByIdAndDelete: jest.fn(),
    }
}));
describe("Car Service Tests", () => {
    test("listCars should return all cars", async () => {
        const mock = [
            { make: "Honda", model: "Civic", year: 2020, color: "Red" },
            { make: "Toyota", model: "Corolla", year: 2021 }
        ];
        car_1.default.find.mockResolvedValue(mock);
        const result = await (0, car_services_1.listCars)();
        expect(result).toEqual(mock);
        expect(car_1.default.find).toHaveBeenCalled();
    });
    test("createCar should create a car", async () => {
        const input = { make: "Ford", model: "Fiesta", year: 2018, color: "White" };
        car_1.default.create.mockResolvedValue(input);
        const result = await (0, car_services_1.createCar)(input);
        expect(result).toEqual(input);
        expect(car_1.default.create).toHaveBeenCalledWith(input);
    });
});
