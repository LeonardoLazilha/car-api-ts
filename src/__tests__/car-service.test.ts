import { listCars, createCar } from "../services/car-services";
import CarSchema from "../models/car";

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

describe("Car Service Tests", () =>{

    test("listCars should return all cars", async () =>{

        const mock = [
            { make: "Honda", model: "Civic", year: 2020, color: "Red" },
            { make: "Toyota", model: "Corolla", year: 2021 }
        ];

        (CarSchema.find as jest.Mock).mockResolvedValue(mock);

        const result = await listCars();

        expect(result).toEqual(mock);
        expect(CarSchema.find).toHaveBeenCalled();
    });


    test("createCar should create a car", async () =>{

        const input = { make: "Ford", model: "Fiesta", year: 2018, color: "White" };

        (CarSchema.create as jest.Mock).mockResolvedValue(input);

        const result = await createCar(input);

        expect(result).toEqual(input);
        expect(CarSchema.create).toHaveBeenCalledWith(input);
    });


})