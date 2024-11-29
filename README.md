
# Movie Collection Backend

This API proxies requests to TheMovieDB API. It provides two endpoints:

- **GET /api/v1/movies/popular** -> Allows its consumers to get the most popular movies based on a popularity score computed by TheMovieDB. This endpoint is based on TheMovieDB's endpoint described here: https://developer.themoviedb.org/reference/discover-movie


- **GET /api/v1/movies/{movieId}/reviews** -> Allows its consumers to get user submitted reviews, given a single movie ID. The endpoint is based on TheMovieDB's endpoint described here: https://developer.themoviedb.org/reference/movie-reviews

More information on parameters and schemas can be found on **/api/v1/docs**

This API is meant to be consumed by the "Movie Collection Frontend", which has been built on a separate project / repository.


## How it is made

This API was created with Express.js, TypeScript, Jest and Supertest for testing, and Swagger for documentation.

## How to run locally

- Clone the repo into your work folder.
- Sign in to TheMovieDB, and request an API key. Once granted, take note of the "API Read Access Token".
- Create a .env file at the root of the project, and put your API Read Access Token as an environment variable named **ACCESS_TOKEN**

Example: ACCESS_TOKEN=eyJhbGciOiJIUzxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxx

- Run ***npm start***
- Then, you can start testing the API, or run it together with the "Movie Collection Frontend" project.