// EXPRESS DATA
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const errorHandler = require("./middlewares/handleErrors");

// BODY PARSER
app.use(express.json());

// Middleware per asset statici
app.use(express.static('public'));

// CORS
app.use(cors({
   origin: "http://localhost:5173"
}))

// ROUTER
const postsRouter = require("./routers/posts-router");
app.use("/posts", postsRouter);

const tagsRouter = require("./routers/tagsRouter");
app.use("/tags", tagsRouter)

// Error Handler
app.use(errorHandler);

// Server activation
app.listen(port, () => {
   console.log("Il Server è in ascolto");
})