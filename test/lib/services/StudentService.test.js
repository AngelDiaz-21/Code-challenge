const Reader = require ("../../../lib/utils/Reader.js");
const StudentService = require ("../../../lib/services/StudentService");

describe("Prueba unitaria para la clase StudentService usando el JSON de 'visualpartners' ", () => {
    const getStudentsVisualPartners = Reader.readJsonFile("visualpartners.json");
    
    test('1. Consultar la cantidad de todos los estudiantes', () => {
        const getAllStudents = StudentService.getAllStudents(getStudentsVisualPartners);

        expect(getAllStudents.length).toBe(51);
    });
    
    test('2) Consultar la cantidad de emails de todos los estudiantes que tengan certificación haveCertification', () => {
        const getStudentHaveCertification = StudentService.getEmailOfStudentsByHaveCertification(getStudentsJsonPrueba);

        expect (getStudentHaveCertification.length).toBe(29);
    }); 

    test('3) Consultar la cantidad de estudiantes que tengan credits mayor a 500', () => {
        const getStudentsCredits = StudentService.getStudentsByCredits(getStudentsJsonPrueba);

        expect (getStudentsCredits.length).toBe(27);
    }); 
});