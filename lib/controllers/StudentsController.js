const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentsController{
    
    static getAllStudents (){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getAllStudents(students);
    }

    static getEmailOfStudentsByHaveCertification (){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getEmailOfStudentsByHaveCertification(students);
    }

    static getStudentsByCredits (){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudentsByCredits(students);
    }
}

module.exports = StudentsController;