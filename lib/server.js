const StudentsController = require("./controllers/StudentsController");
const express = require("express");
const { request, response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Bienvenido, esto es el code challenge"});
});

app.get ("/v1/students", (request, response) => {
    const students = StudentsController.getAllStudents();
    response.json(students);
});

app.get ("/v1/students/emails", (request, response) => {
    const students = StudentsController.getEmailOfStudentsByHaveCertification();
    response.json(students);
});

app.get ("/v1/students/credits", (request, response) => {
    const students = StudentsController.getStudentsByCredits();
    response.json(students);
});

app.listen(port, () => {
    console.log(`Code challenge API in localhost:${port}`);
});