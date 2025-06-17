const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// router.post((req,res)=>{})
// router.route('/login').get((req,res)=>{}).post((req,res)=>{})
router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

// router.route("/").get(allUsers)

module.exports = router;
