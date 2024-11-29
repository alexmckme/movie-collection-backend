import { Movie } from "../database/Movie"

export async function getPopularMovies(language?: string, page?: number) {
    try {
        const popularMovies = await Movie.getPopularMovies(language, page)
        return popularMovies
    } catch (error) {
        throw error
    }
}