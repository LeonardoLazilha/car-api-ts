/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: Gerenciamento de carros
 */

/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Lista todos os carros
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: Lista de carros
 *
 *   post:
 *     summary: Cria um novo carro
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Carro criado
 */

/**
 * @swagger
 * /cars/{id}:
 *   get:
 *     summary: Retorna um carro pelo ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Carro encontrado
 *
 *   put:
 *     summary: Atualiza um carro
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Carro atualizado
 *
 *   delete:
 *     summary: Remove um carro
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Carro removido
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
