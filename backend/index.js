import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.get('/' , (req,res) => {
  res.send('server is runnnning');
})




const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
  console.log(`Your server is running on ${PORT}`);
})