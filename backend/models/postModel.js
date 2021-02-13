import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    img: {
      type: String,
    },
    postdescription: {
      type: String,
    },
    body: {
      type: String,
    },
    avatar: {
      type: String,
    },
    rating: {
      type: Number,
    },
    likes: [
      {
        user: mongoose.Schema.Types.ObjectId,
      },
    ],
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
        },
        text: {
          type: String,
          required: true,
        },
        firstname: {
          type: String,
        },
        lastname: {
          type: String,
        },
        avatar: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timeStamp: true,
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
