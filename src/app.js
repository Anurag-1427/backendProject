import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
cookieParser;

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// data comes from anywhere to our backend:-
// json
// url
// body - form submission
// direct form and form in json format
// file submission
// Apart, some static data

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export { app };
