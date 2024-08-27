import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoutes from "./routes/user.route.js"
import { errorResponserHandler } from "./middlewares/errorHandler.js";
// import { invalidPathHandler } from "./middlewares/errorHandler.js";

dotenv.config();
connectDb();

const app = express();
app.use(express.json());



//routes from here
// app.use(invalidPathHandler);
app.use('/api/v1/user' , userRoutes );
app.use(errorResponserHandler);






const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
  console.log(`Your server is running on ${PORT}`);
})
