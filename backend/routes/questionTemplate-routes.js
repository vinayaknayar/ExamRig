const express = require('express');
const router = express.Router();
const questionTemplate = require("../model/questionTemplate");
const QuestionController = require("../controller/QuestionController")


router.get("/" ,  QuestionController.getAllQuestion);
router.post("/" ,  QuestionController.addQuestion);
router.get("/:id" ,  QuestionController.getById );
router.delete("/:id" ,  QuestionController.deleteQuestion);
router.post("/auth" ,  QuestionController.authQuestion);


module.exports = router;