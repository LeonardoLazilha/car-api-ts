import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import app from "../app";
import CarSchema from "../models/car"; // mantendo seu nome original

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

beforeEach(async () => {
    await CarSchema.deleteMany({});
});

describe("Car API Integration Tests", () => {

    it("should create a car", async () => {
        const res = await request(app)
            .post("/cars")
            .send({ make: "Honda", model: "Civic", year: 2020, color: "Red" });

        expect(res.status).toBe(201);
        expect(res.body.make).toBe("Honda");
        expect(res.body.model).toBe("Civic");
    });

    it("should list all cars", async () => {
        await CarSchema.create({ make: "Toyota", model: "Corolla", year: 2021 });

        const res = await request(app).get("/cars");

        expect(res.status).toBe(200);
        expect(res.body.length).toBe(1);
        expect(res.body[0].make).toBe("Toyota");
    });

    it("should get a car by id", async () => {
        const car = await CarSchema.create({ make: "Ford", model: "Fiesta", year: 2018 });

        const res = await request(app).get(`/cars/${car._id}`);

        expect(res.status).toBe(200);
        expect(res.body.model).toBe("Fiesta");
    });

    it("should update a car by id", async () => {
        const car = await CarSchema.create({ make: "Nissan", model: "Sentra", year: 2019 });

        const res = await request(app)
            .put(`/cars/${car._id}`)
            .send({ color: "Blue" });

        expect(res.status).toBe(200);
        expect(res.body.color).toBe("Blue");
    });

    it("should delete a car by id", async () => {
        const car = await CarSchema.create({ make: "Mazda", model: "3", year: 2017 });

        const res = await request(app).delete(`/cars/${car._id}`);

        expect(res.status).toBe(200);

        const check = await CarSchema.findById(car._id);
        expect(check).toBeNull();
    });

});
