# Car API (Node.js + Express + MongoDB + Typescript)

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

A simple and clean REST API built with Node.js, Express, MongoDB, and TypeScript. The goal is to practice backend
development using good architecture and clean code.

## Structure
```
src/
│   app.ts
│   server.ts
│
├── config/
│     db.ts
│
├── controllers/
│     car-controller.ts
│
├── models/
│     car.ts
│
├── routes/
│     car-routes.ts
│
└── services/
      car-services.ts
```

## How to run the project

#### 1. Clone the repository

```
git clone https://github.com/LeonardoLazilha/car-api-ts.git
```

#### 2. Install dependencies

```
npm install
```

#### 3. Configure local MongoDB

```
mongodb://localhost:27017/carApiDB
```

#### 4. Start the server

```
npm start
```

#### 4. Server will run at

```
http://localhost:3000
```

## Routes

### POST /cars

```
{
  "make": "Toyota",
  "model": "Corolla",
  "year": 2020,
  "color": "Silver"
}
```

### GET /cars

### GET /cars/:id

### PUT /cars/:id

### DELETE /cars:id

## Model

```
{
  make: string;
  model: string;
  year: number;
  color?: string;
}
```

## Architecture

The API follows a clean and organized structure:

- Model: defines the car schema

- Service: contains the logic for database access

- Controller: receives requests and returns responses

- Routes: connect the endpoints to controllers

This separation keeps the code clean, modular, and easy to maintain.

## API Documentation (Swagger)

This API is documented using **Swagger**. You can explore and test the endpoints in a browser.

### How to access

1. Start the server:
```
npm start
```

2. Open your browser and go to:
```
http://localhost:3000/api-docs
```

3. You will see the Swagger UI with all the routes:

- **GET /cars** – List all cars
- **GET /cars/:id** – Get a car by ID
- **POST /cars** – Create a new car
- **PUT /cars/:id** – Update a car
- **DELETE /cars/:id** – Remove a car

The Swagger setup is separated from your route files to keep the project clean and maintainable.



## Tests

This project includes both **unit** and **integration** tests using **Jest** and **Supertest**:

- **Unit tests**: test individual service functions (`listCars`, `createCar`) with mocked database.
- **Integration tests**: test the full API endpoints (controllers + services + database) using an in-memory MongoDB (`mongodb-memory-server`).

### Run tests
```
src/__tests__/
├── car-service.test.ts # unit tests
├── car-integration.test.ts # integration tests
```

- Unit tests check the logic in isolation.
- Integration tests check if the API routes actually work with the database and the app.

