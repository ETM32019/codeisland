import asyncHandler from "express-async-handler";
import Post from "../models/postModel.js";

//@desc     create a post
//@route    POST /api/posts
//@access   Private
const postNewPost = asyncHandler(async (req, res) => {
  // create new post
  const post = new Post({
    user: req.user._id,
    title: "Sample title",
    subtitle: "Sub title",
    img: "http://placehold.it/700x400",
    postdescription: "Post Description",
    body: "Post Body",
    avatar: "avatar",
    rating: 3,
  });
  await post.save();
  res.status(201).json(post);
});

//@desc     Get all Projects
//@route    POST /api/posts/
//@access   Public
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});

//@desc     Get Project Details by ID
//@route    POST /api/post/:id
//@access   Private
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    return res.json(post);
  } else {
    res.status(404);
    throw new Error("Post not found...");
  }
});

//@desc     Get Users Posts
//@route    GET /api/posts
//@access   Public
const getUsersPosts = asyncHandler(async (req, res) => {
  const userPosts = await Post.find({ user: req.user._id });
  res.json(userPosts);
});

export { postNewPost, getAllPosts, getPostById, getUsersPosts };
