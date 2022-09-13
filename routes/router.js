const express = require("express");
const router = express();
const data = require("../controllers/Todo");

router.get("/todos", data.getTodos);

module.exports = router;