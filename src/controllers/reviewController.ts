import { Request, Response } from 'express';

const reviewService = require("../services/reviewService")

export async function getReviewsForMovie(req: Request, res: Response) {

    const { movieId } = req.params
    const { page } = req.query

    try {
        const reviewsFromMovie = await reviewService.getReviewsForMovie(movieId, page)
        res.send({
            status: "OK",
            data: reviewsFromMovie
        })
    } catch (error: any) {
        res
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                data: {
                    error: error?.message || error
                }
            })
    }
}