export module Review {

    export async function getReviewsForMovie(movieId: number, page?: number) {
        try {

            if (!page) {
                page = 1
            }

            const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=${page}`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
            };

            const response = await fetch(url, options);
            const reviewsData = await response.json();
            return reviewsData

        } catch (error) {
            throw { status: 500, message: error };
        }
    }

}

/**
 * @openapi
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 912649
 *         page:
 *           type: integer
 *           example: 1
 *         results:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               author:
 *                 type: string
 *                 example: "r96sk"
 *               author_details:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "Someone"
 *                   username:
 *                     type: string
 *                     example: "r96sk"
 *                   avatar_path:
 *                     type: string
 *                     example: "/mwR7rFHoDcobAx1i61I3skzMW3U.jpg"
 *                   rating:
 *                     type: integer
 *                     example: 7
 *               content:
 *                 type: string
 *                 example: "Quite good! Amazing, actually!"
 *               created_at:
 *                 type: string
 *                 example: "2024-10-25T18:25:18.286Z"
 *               id:
 *                 type: string
 *                 example: "671be28e9ff681d9e0a410bd"
 *               updated_at:
 *                 type: string
 *                 example: "2024-10-25T18:25:18.374Z"
 *               url:
 *                 type: string
 *                 example: "https://www.themoviedb.org/review/671be28e9ff681d9e0a410bd"
 *         total_pages:
 *           type: integer
 *           example: 47367
 *         total_results:
 *           type: integer
 *           example: 947337
 */