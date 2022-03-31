const db = require('../models');
const Form = db.Form
const FormQuestion = db.FormQuestion
const UserQuestionAnswer = db.UserQuestionAnswer 
const User = db.User
const { forEach } = require('p-iteration');
const { v4: uuidv4 } = require('uuid');


exports.get = async (req,res) => {
  const formId = req.params.id

  const form = await Form.findOne({
    where: {id: formId}
  })

  // include: [{model : FormQuestion, as: "FormQuestions"}],
  console.log(form)


  if(!form){
    res.json({
      success: false,
      message: "not found"
    })
    return
  }

  const formQuestions = await form.getFormQuestions()
  const author = await form.getUser()
  
  //await
  res.json({ 
    success: true,
    form: form,
    formQuestions: formQuestions,
    author: author,
    wow: req.params.id
  });

  return
} 

exports.create = async (req,res) => {
  //req.header. 

  const userId = 1   //getUser
  const title = req.body.title
  const questions = req.body.questions

  const form = await Form.create({
    userId: userId,
    title: title,
  })

  const formId = form.id
  
  await forEach(questions, async(question,index) => {
    const result = await FormQuestion.create({
      formId: formId,
      questionType: "text",
      title: question.title
    })
  })
  
  res.json({ success: true, formId: formId});
}

exports.resCreate = async (req,res) => {

  //const uuid = uuidv4();
  //const answerObj = req.body.answerObj;
  const {answerObj, uuid} = req.body;

  //uuid 

  await forEach(Object.keys(answerObj), async(formQuestionId,index) => {
    const result = await UserQuestionAnswer.create({
      uuid: uuid,
      formQuestionId: formQuestionId,
      answerTxt: answerObj[formQuestionId]
    })
  })

  res.json({success: true, message: "success!"})
}

exports.getResult = async (req,res) => {
  const formId = req.params.id


  const form = await Form.findOne({
    where: {id: formId}
  })

  const formQuestions = await form.getFormQuestions()
  let answerObj = {}
  await forEach(formQuestions, async (formQuestion, index) => {
    
    const questionAnswers = await formQuestion.getUserQuestionAnswers()
    answerObj[formQuestion.id] = questionAnswers
  })

  res.json({success: true, 
    form: form,
    formQuestions: formQuestions, 
    answerObj: answerObj,
  })

}