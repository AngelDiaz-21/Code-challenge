class StudentService {
    static getAllStudents(students){
        return students;
    }

    static getEmailOfStudentsByHaveCertification(students){
        const studentsHaveCertification = students.filter((student) => student.haveCertification === true);

        return studentsHaveCertification;
    }

    static getStudentsByCredits(students){
        const studentsByCreditsGreaterThan500 = students.filter((student) => student.credits > 500);

        return studentsByCreditsGreaterThan500;
    }
}

module.exports = StudentService;