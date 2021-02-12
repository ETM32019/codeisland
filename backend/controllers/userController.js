import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc     Auth User & and get Token
//@route    POST /api/user/login
//@access   Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      idAdmin: user.isAdmin,
      company: user.company,
      website: user.website,
      bio: user.bio,
      skill: user.skills,
      experience: user.experience,
      education: user.education,
      token: generateToken(user._id),
    });
  } else {
    res.status(410);
    throw new Error("Invalid Email or Password");
  }
});

//@desc     Register a new user
//@route    POST /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    firstname,
    lastname,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });

    res.status(201).json(createdProfile);
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc     Get user profile by id
//@route    POST /api/users/:id
//@access   Public
const getUserProfileById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found!");
  }
});

export { authUser, registerUser, getUserProfileById };
