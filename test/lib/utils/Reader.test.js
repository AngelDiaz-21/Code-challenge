const Reader = require("../../../lib/utils/Reader");

describe('Prueba unitaria para la clase Reader', () => {
    const studentsVisualPartner = Reader.readJsonFile("visualpartners.json");

    test('1. Obtener el tamaño de la lista de los estudiantes de Visual Partner-Ship', () => {
        expect (studentsVisualPartner.length).toBe(51);
    }); 

    test('2. Coincidir el nombre del estudiante con sus respectiva posición en la lista ', () => {
        expect (studentsVisualPartner[2].name).toBe("Fuentes");
    }); 
})