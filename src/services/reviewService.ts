import { Review } from "../database/Review"

export async function getReviewsForMovie(movieId: number, page: number) {
    try {
        const reviewsFromMovie = await Review.getReviewsForMovie(movieId, page)
        return reviewsFromMovie
    } catch (error) {
        throw error
    }
}