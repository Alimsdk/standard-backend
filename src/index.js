import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.error("error found", err);
      throw error;
    });

    app.listen(PORT, () => {
      console.log(`Listening to PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection Failed : ", err);
  });
