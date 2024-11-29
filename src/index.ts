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