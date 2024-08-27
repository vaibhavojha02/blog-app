import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURI);
    console.log("We are connected to our database");
  } catch (error) {
    console.log("The error  has been occurred during connecting to database");
  }
};

export default connectDb;
