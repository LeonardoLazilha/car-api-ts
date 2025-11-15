# Car API (Node.js + Express + MongoDB + Typescript)

<p align="left"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" /> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /> <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" /> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" /> </p>

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

### POST /recipes

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

### PUT /cars:id

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

- Model: defines the recipe schema

- Service: contains the logic for database access

- Controller: receives requests and returns responses

- Routes: connect the endpoints to controllers

This separation keeps the code clean, modular, and easy to maintain.