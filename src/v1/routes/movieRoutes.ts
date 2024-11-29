import express, { Router } from "express"

const router: Router = express.Router();
const movieController = require("../../controllers/movieController")
const reviewController = require("../../controllers/reviewController")

router.get("/popular", movieController.getPopularMovies);

router.get("/:movieId/reviews", reviewController.getReviewsForMovie);

module.exports = router;

/**
 * @openapi
 * /api/v1/movies/popular:
 *   get:
 *     tags:
 *       - Movies
 *     parameters:
 *       - in: query
 *         name: language
 *         schema:
 *           type: string
 *         description: Movie language (ISO 639-1 tags). Defaults to en-US if unspecified
 *         required: false
 *       - in: query
 *         name: page
 *         schema:
 *           type: number
 *         description: Reviews page number. Defaults to 1 if unspecified
 *         required: false
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   $ref: "#/components/schemas/Movie"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

/**
 * @openapi
 * /api/v1/movies/{movieId}/reviews:
 *   get:
 *     tags:
 *       - Movies
 *     parameters:
 *       - in: path
 *         name: movieId
 *         schema:
 *           type: integer
 *         description: Movie ID
 *         required: true
 *       - in: query
 *         name: page
 *         schema:
 *           type: number
 *         description: Reviews page number. Defaults to 1 if unspecified
 *         required: false
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   $ref: "#/components/schemas/Review"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */