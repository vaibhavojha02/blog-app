import mongoose, { Schema } from "mongoose";
import temp from "jsonwebtoken"
const { sign }  = temp
import pkg from "bcryptjs"
const { hash , compare } = pkg;

const userSchema = mongoose.Schema(
  {
    avatar: {
      type: String,
      default: " ",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      required: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { Timestamps: true }
);
//before saving the new document
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) 
    {
    this.password = await hash(this.password, 10);

    return next();
  }
  return next();
});

//to create method for generating jwttoken we generate token ans sent it to  user so when we call this method jwt token will get generated
userSchema.methods.generateJWT = async function () {
    return await sign({id:this._id},process.env.JWT_SECRET,{expiresIn:"30d",})
}
userSchema.methods.comparePassword = async function(enteredPassword) 
{
  return await compare(enteredPassword,this.password);
}
const User = mongoose.model("user", userSchema);
export default User;
