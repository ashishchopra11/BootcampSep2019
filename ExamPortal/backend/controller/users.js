const examController = require('./examDetailController')
const questionDetail = require('./questionController')
const studentPerformanceController = require('./studentPerformance')
const userController = require('./userRecord')
const bcryptjs = require('bcryptjs')
const testInfo = require('./testDetails')

const userRecord = async(req,res)=>{
    let response
    var hash = bcryptjs.hashSync(req.body.password,8)
    req.body.password = hash
    response = await userController.userRecord(req,res)
    return response
}

const examDetails = (req,res)=>{
    examController.examDetails(req,res)
}

const loggedInDetails = async(req, res) => {
    const det = await userController.loggedInDetails(req, res)
    return det
}
///////////////////////
const adminLogin =async(req,res)=>{
   
    const result = await userController.adminLogin(req,res)
    //console.log(result);
    return result;
}
const userDetails = (req,res)=>{
    const data =userController.userDetails(req,res)
    return data;
}

const editExam = (req, res) => {
    examController.editExam(req, res)
}

const getQuestionDetail = (req, res) => {
    // console.log("hello1 ",req.params.id)
    questionDetail.getQuestionDetails(req, res)
}

const fetchQuestionById = (req, res) => {
    questionDetail.fetchQuestionById(req, res)
}

const editQuestion = (req, res) => {
    questionDetail.editQuestion(req, res)
}
const removeQuestion = (req, res) => {
    questionDetail.removeQuestion(req, res)
}
// const userDetails = (req, res) => {
//     // console.log('hello world')
//     const data = userController.userDetails(req, res)
//     return data;
// }

const testDetails = (req, res) => {
    const result = testInfo.testDetails(req, res)
    return result;
}

const examinerDel = (req, res) => {
    const result = testInfo.examinerDel(req, res)
    return result
}
const fetchData=(req,res)=>{
   const result=userController.fetchData(req,res)
   return result
}
// const facultyUpd= (req,res)=>{
    
//     const result = userController.facultyUpd(req,res)
//     return result
// }

const examinerUpd = (req, res) => {
    const result = userController.examinerUpd(req, res)
    return result
}
const updateUser=(req,res)=>{
    const data=userController.updateuser(req,res)
    return data;
}
const adminDetails=(req,res)=>{
    const data=userController.adminDetails(req,res)
    return data;
}

const question=(req,res)=>{
    questionDetail.questions(req,res)
}


module.exports = {
    adminDetails,
    updateUser,
    examinerUpd,
    examinerDel,
    fetchData,
    testDetails,
    removeQuestion,
    fetchQuestionById,
    getQuestionDetail,
    editExam,
    editQuestion,
    userDetails,
    adminDetails,
    adminLogin,
    loggedInDetails,
    userRecord,
    examDetails,
    question
}