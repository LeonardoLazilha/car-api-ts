import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"
import { Application } from "express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Car API",
            version: "1.0.0",
            description: "API para gerenciamento de carros com Node, Express e TypeScript"
        },
        servers: [
            {
                url: "http://localhost:3000"
            },
        ],
    },
    apis: ["./src/routes/*.ts", "./src/docs/*.ts"],
}

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}