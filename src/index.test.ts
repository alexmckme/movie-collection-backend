import express, { Express } from "express"
import cors from "cors"
const v1MovieRouter = require("./v1/routes/movieRoutes");
require("dotenv").config()
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use("/api/v1/movies", v1MovieRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
});

import request from 'supertest'
import { describe, test, expect } from '@jest/globals'

describe('Popular movies default route \'/api/v1/movies/popular\'', () =>{
    test("Responds with 200 status code", async() =>{
        const response = await request(app).get('/api/v1/movies/popular')
        expect(response.status).toEqual(200)
    })

    test("Responds with json content", async() =>{
        const response = await request(app).get('/api/v1/movies/popular')
        expect(response.headers['content-type']).toMatch(/json/)
    })

    test("Returns with body status OK", async() =>{
        const response = await request(app).get('/api/v1/movies/popular')
        expect(response.body.status).toEqual("OK")
    })

    test("Returns with body data page 1", async() =>{
        const response = await request(app).get('/api/v1/movies/popular')
        expect(response.body.data.page).toEqual(1)
    })
})

describe('Reviews for movie ID 912649 \'/api/v1/movies/912649/reviews\'', () =>{
    test("Responds with 200 status code", async() =>{
        const response = await request(app).get('/api/v1/movies/912649/reviews')
        expect(response.status).toEqual(200)
    })

    test("Responds with json content", async() =>{
        const response = await request(app).get('/api/v1/movies/912649/reviews')
        expect(response.headers['content-type']).toMatch(/json/)
    })

    test("Returns with body status OK", async() =>{
        const response = await request(app).get('/api/v1/movies/912649/reviews')
        expect(response.body.status).toEqual("OK")
    })

    test("Returns with body data id 912649", async() =>{
        const response = await request(app).get('/api/v1/movies/912649/reviews')
        expect(response.body.data.id).toEqual(912649)
    })
})