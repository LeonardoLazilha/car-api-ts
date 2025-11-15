"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const car_routes_1 = __importDefault(require("./routes/car-routes"));
const swagger_1 = require("./config/swagger");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/cars", car_routes_1.default);
(0, swagger_1.setupSwagger)(app);
exports.default = app;
