import { uploadPicture } from "../middlewares/uploadPictureMiddleware.js";
import User from "../models/user.model.js";
import { fileRemover } from "../utils/fileRemover.js";

export const registerUser = async (req, res, next) => {
  //always wrap this coe inside try and catch block fri better errorm handling
  try {
    const { name, email, password } = req.body;

    //step-1 check whether user exists or not
    let user = await User.findOne({ email });
    if (user) {
      // const error = new Error("User already exists");
      // error.statusCode = 409; // Conflict
      // throw error;
      // res.status(404).json({
      //   message: "User already exists",
      // });
      throw new Error("User already exists");
    }
    // if user doesn't exist we will register user
    user = await User.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      token: await user.generateJWT(),
      admin: user.admin,
      verified: user.verified,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      throw new Error("User Doesn't exists");
    }
    if (await user.comparePassword(password)) {
      res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        token: await user.generateJWT(),
        admin: user.admin,
        verified: user.verified,
      });
    } else {
      throw new Error("Invalid credentials,wrong email or Password");
    }
  } catch (error) {
    next(error);
  }
};
export const userProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);

    if (user) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
      });
    } else {
      let error = new Error("User not found");
      error.statusCode = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);
    if (!user) {
      throw new Error("user not found");
    }
    user.email = req.body.email || user.email;
    user.name = req.body.name || req.name;
    if (req.body.password && req.body.password.length() < 6) {
      throw new Error("Password length must be  greater than 6");
    } else if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUserProfile = await user.save();
    res.status(201).json({
      _id: updatedUserProfile._id,
      avatar: updatedUserProfile.avatar,
      name: updatedUserProfile.name,
      email: updatedUserProfile.email,
      verified: updatedUserProfile.verified,
      admin: updatedUserProfile.admin,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadProfilePicture = async (req, res, next) => {
  try {
    const upload =  uploadPicture.single("profilePicture");
    console.log(upload); //it is a function

    upload(req, res, async function (err) {
      if (err) {
        const error = new error("An unknown error occur while uploading");
        next(error);
      } else {
        //multer modify req object by adding file option to it
        if (req.file) {
          const updatedUser = await User.findbyIdAndUpdate(
            req.user._id,
            {
              avatar: req.file.filename,
            },
            { new: true }
          );
          res.status(201).json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
          });
        } else {
          // in case of failure in uploading file
          let filename;
          let updatedUser = await User.findById(req.user._id);
          filename = updatedUser.avatar;
          updatedUser.avatar = "";
          await updatedUser.save();
          fileRemover(filename);
          res.status(201).json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
          });
        }
      }
    });
  } catch (error) {
    next(error);
  }
};
