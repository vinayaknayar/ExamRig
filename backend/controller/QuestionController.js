const Template = require('../model/questionTemplate');
const getAllQuestion = async (req , res , next) => {
    //This router will provide all the books
    let questions;
    try{
        questions = await Template.find();
    } catch(err){
        console.log(err);
        }


        if(!questions){
            return res.status(404).json({message:"No question found"})
        }
        return res.status(200).json({questions});

};


const addQuestion = async (req , res , next) => {

    const {Question , Answer} = req.body;
    let question;
    try {
        question = new Template({
            Question,
            Answer
        });

        await question.save();

    }
    catch(err){
        console.log(err);
    }

    if(!question)
    {
        return res.status(500).json({message : 'unable to add'})
    }

    return res.status(201).json({question});


};



const getById = async(req , res , next) =>{

    const id = req.params.id;
    let question;

    try{
        question = await Template.findById(id);
    }catch(err){
        console.log(err);
    }

    if(!question)
    {
        return res.status(400).json({message : "No question found"});
    }
    return res.status(200).json({question});


};



const deleteQuestion = async(req , res , next) =>{

    const id = req.params.id;
    let question;
    try{
        question = await Template.findByIdAndRemove(id);
    } catch(err){
        console.log(err);
    }

    if(!question)
    {
        return res.status(404).json({message : "Unable to Delete by this ID"});
    }

    return res.status(200).json({message : "Question successfully deleted"});

};


const authQuestion = async(req , res , next) =>{

    const {Question, Answer} = req.body;
    let question;
    try{
        question = await Template.findOne({Question});
    } catch(err){
        console.log(err);
    }

    if(!question || Answer!== question.Answer)
    {
        return res.status(404).json({message : "Question doesn't exist!"});
    }

    if(Answer == question.Answer){
        return res.status(200).json({message: "Answer verified"});
    }
//    const QuestionTemp = "-1,-1,-1"
//    question = 
    return res.status(400).json({message : "Wrong Answer!"});

};



exports.getById = getById;
exports.addQuestion = addQuestion;
exports.getAllQuestion = getAllQuestion;
exports.deleteQuestion = deleteQuestion;
exports.authQuestion = authQuestion;