"use strict";
/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: Car management
 */
/**
 * @swagger
 * /cars:
 *   get:
 *     summary: List all cars
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: List of cars
 *
 *   post:
 *     summary: Create a new car
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Car created
 */
/**
 * @swagger
 * /cars/{id}:
 *   get:
 *     summary: Get a car by ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Car found
 *
 *   put:
 *     summary: Update a car
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Car updated
 *
 *   delete:
 *     summary: Delete a car
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Car deleted
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Car:
 *       type: object
 *       properties:
 *         make:
 *           type: string
 *         model:
 *           type: string
 *         year:
 *           type: number
 *         color:
 *           type: string
 */
