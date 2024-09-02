import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middlewares

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "20kb",
  })
);

app.use(
  express.urlencoded({
    extended: true, // nested object
    limit: "20kb",
  })
);

app.use(express.static("public")); // any file uploaded by user
//  will be stored in public folder which onyone can access

app.use(cookieParser()); // to set or read cookies on users browser

export { app };
