import bcrypt from "bcryptjs";

const users = [
  {
    firstname: "Admin",
    lastname: "User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    company: "AFI TECH LLC",
    title: "Full Stack Web Developer",
    website: "http://landonmckelldevportfolio.herokuapp.com/",
    bio: "I am a bio",
    skills: ["html", "css", "javascript"],
    socialmedia: [
      { website: "youtube", link: "www.youtube.com" },
      { website: "twitter", link: "www.twitter.com" },
    ],
  },
];

export default users;
