const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
import {Express, Request, Response} from "express";

// Basic Meta Informations about our API
const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: "Movies Collection API", version: "1.0.0" },
    },
    apis: ["./src/v1/routes/movieRoutes.ts", "./src/database/Movie.ts", "./src/database/Review.ts"],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
const swaggerDocs = (app: Express, port: number) => {
    // Route-Handler to visit our docs
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // Make our docs in JSON format available
    app.get("/api/v1/docs.json", (req: Request, res: Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(
        `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
    );
};

module.exports = { swaggerDocs };