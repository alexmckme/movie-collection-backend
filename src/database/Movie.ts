export module Movie {

    export async function getPopularMovies(language?: string, page?: number) {
        try {

            if (!language) {
                language = "en-US";
            }
            if (!page) {
                page = 1;
            }

            const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${language}&page=${page}&sort_by=popularity.desc`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
            };

            const response = await fetch(url, options);
            const moviesData = await response.json();
            return moviesData

        } catch (error) {
            throw { status: 500, message: error };
        }
    }

}

/**
 * @openapi
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         page:
 *           type: integer
 *           example: 1
 *         results:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               adult:
 *                 type: boolean
 *                 example: false
 *               backdrop_path:
 *                 type: string
 *                 example: "/path/to/backdrop.jpg"
 *               genre_ids:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 example: [28, 12, 16]
 *               id:
 *                 type: integer
 *                 example: 12345
 *               original_language:
 *                 type: string
 *                 example: "en"
 *               original_title:
 *                 type: string
 *                 example: "Sample Movie"
 *               overview:
 *                 type: string
 *                 example: "This is a sample movie overview."
 *               popularity:
 *                 type: number
 *                 example: 123.45
 *               poster_path:
 *                 type: string
 *                 example: "/path/to/poster.jpg"
 *               release_date:
 *                 type: string
 *                 format: date
 *                 example: "2024-11-25"
 *               title:
 *                 type: string
 *                 example: "Sample Movie Title"
 *               video:
 *                 type: boolean
 *                 example: false
 *               vote_average:
 *                 type: number
 *                 format: float
 *                 example: 8.7
 *               vote_count:
 *                 type: integer
 *                 example: 1000
 *         total_pages:
 *           type: integer
 *           example: 47367
 *         total_results:
 *           type: integer
 *           example: 947337
 */