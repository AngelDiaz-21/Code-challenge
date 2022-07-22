const StudentsController = require("../../../lib/controllers/StudentsController");

describe('Prueba unitaria para la clase StudentsController', () => {
    
    test('1) Obtener la cantidad de todos los estudiantes', () => {
        const getstudentsVisualPartners = StudentsController.getAllStudents();

        expect (getstudentsVisualPartners.length).toBe(51);
    });

    test('2) Obtener la cantidad de emails de los estudiantes que tengan haveCertification ', () => {
        const getstudentsVisualPartners = StudentsController.getEmailOfStudentsByHaveCertification();

        expect (getstudentsVisualPartners.length).toBe(29);
    });

    test('3) Obtener la cantidad de estudiantes que tengan credits mayor a 500', () => {
        const getstudentsVisualPartners = StudentsController.getStudentsByCredits();

        expect (getstudentsVisualPartners.length).toBe(27);
    });
});