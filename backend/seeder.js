import dotenv from "dotenv";
import users from "./tempdata/users.js";
import Profile from "./models/profileModel.js";
import User from "./models/userModel.js";
import Post from "./models/postModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Profile.deleteMany();
    await User.deleteMany();

    await User.insertMany(users);

    // Success Message
    console.log("Data Import!");

    process.exit();
  } catch (error) {
    // Catch Error
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Profile.deleteMany();
    await User.deleteMany();
    await Post.deleteMany();

    // Success Message
    console.log("Data Destroyed!");

    process.exit();
  } catch (error) {
    // Catch Error
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
