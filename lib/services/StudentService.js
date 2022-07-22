class StudentService {
    static getAllStudents(students){
        return students;
    }

    static getEmailOfStudentsByHaveCertification(students){
        const studentsHaveCertification = students.filter((student) => student.haveCertification === true);
        const emailStudents = studentsHaveCertification.map((student) => student.email);

        return emailStudents;
    }

    static getStudentsByCredits(students){
        const studentsByCreditsGreaterThan500 = students.filter((student) => student.credits > 500);
        const studentCredits = studentsByCreditsGreaterThan500.map((student) => student.credits);

        return studentCredits;
    }
}

module.exports = StudentService;