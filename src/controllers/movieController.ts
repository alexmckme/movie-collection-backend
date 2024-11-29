import { Request, Response } from 'express';

const movieService = require("../services/movieService")

export async function getPopularMovies(req: Request, res: Response) {

    const { language, page } = req.query

    try {
        const popularMovies = await movieService.getPopularMovies(language, page)
        res.send({
            status: "OK",
            data: popularMovies
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