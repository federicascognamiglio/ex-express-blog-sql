// IMPORTS
const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts-controller");
const checkPostExists = require("../middlewares/checkPostExists");

// ROUTERS
// Router "index"
router.get("/", postsController.index)

// Router "show"
router.get("/:id", checkPostExists, postsController.show)

// Router "destroy"
router.delete("/:id", checkPostExists, postsController.destroy)

//EXPORTS
module.exports = router;