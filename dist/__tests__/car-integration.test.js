"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("../app"));
const car_1 = __importDefault(require("../models/car")); // mantendo seu nome original
let mongoServer;
beforeAll(async () => {
    mongoServer = await mongodb_memory_server_1.MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose_1.default.connect(uri);
});
afterAll(async () => {
    await mongoose_1.default.disconnect();
    await mongoServer.stop();
});
beforeEach(async () => {
    await car_1.default.deleteMany({});
});
describe("Car API Integration Tests", () => {
    it("should create a car", async () => {
        const res = await (0, supertest_1.default)(app_1.default)
            .post("/cars")
            .send({ make: "Honda", model: "Civic", year: 2020, color: "Red" });
        expect(res.status).toBe(201);
        expect(res.body.make).toBe("Honda");
        expect(res.body.model).toBe("Civic");
    });
    it("should list all cars", async () => {
        await car_1.default.create({ make: "Toyota", model: "Corolla", year: 2021 });
        const res = await (0, supertest_1.default)(app_1.default).get("/cars");
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(1);
        expect(res.body[0].make).toBe("Toyota");
    });
    it("should get a car by id", async () => {
        const car = await car_1.default.create({ make: "Ford", model: "Fiesta", year: 2018 });
        const res = await (0, supertest_1.default)(app_1.default).get(`/cars/${car._id}`);
        expect(res.status).toBe(200);
        expect(res.body.model).toBe("Fiesta");
    });
    it("should update a car by id", async () => {
        const car = await car_1.default.create({ make: "Nissan", model: "Sentra", year: 2019 });
        const res = await (0, supertest_1.default)(app_1.default)
            .put(`/cars/${car._id}`)
            .send({ color: "Blue" });
        expect(res.status).toBe(200);
        expect(res.body.color).toBe("Blue");
    });
    it("should delete a car by id", async () => {
        const car = await car_1.default.create({ make: "Mazda", model: "3", year: 2017 });
        const res = await (0, supertest_1.default)(app_1.default).delete(`/cars/${car._id}`);
        expect(res.status).toBe(200);
        const check = await car_1.default.findById(car._id);
        expect(check).toBeNull();
    });
});
