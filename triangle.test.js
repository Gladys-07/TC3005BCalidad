const clasificarTriangulo = require('./triangle');

describe('Pruebas de clasificación de triángulos', () => {

  test('debe clasificar un triángulo equilátero', () => {
    // Arrange
    const a = 3;
    const b = 3;
    const c = 3;
    const esperado = 'Equilátero';

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test('debe clasificar un triángulo isósceles con a=b', () => {
    // Arrange
    const a = 5;
    const b = 5;
    const c = 3;
    const esperado = 'Isósceles';

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test('debe clasificar un triángulo isósceles con b=c', () => {
    // Arrange
    const a = 3;
    const b = 5;
    const c = 5;
    const esperado = 'Isósceles';

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test('debe clasificar un triángulo isósceles con a=c', () => {
    // Arrange
    const a = 5;
    const b = 3;
    const c = 5;
    const esperado = 'Isósceles';

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test('debe clasificar un triángulo escaleno', () => {
    // Arrange
    const a = 4;
    const b = 5;
    const c = 6;
    const esperado = 'Escaleno';

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test('debe lanzar error si un lado es 0', () => {
    // Arrange
    const a = 0;
    const b = 4;
    const c = 5;

    // Act + Assert
    expect(() => clasificarTriangulo(a, b, c)).toThrow('Longitudes no válidas');
  });

  test('debe lanzar error si un lado es negativo', () => {
    // Arrange
    const a = -1;
    const b = 4;
    const c = 5;

    // Act + Assert
    expect(() => clasificarTriangulo(a, b, c)).toThrow('Longitudes no válidas');
  });

  test('debe lanzar error si no forma un triángulo', () => {
    // Arrange
    const a = 1;
    const b = 2;
    const c = 3;

    // Act + Assert
    expect(() => clasificarTriangulo(a, b, c)).toThrow('No es un triángulo');
  });

  test('debe lanzar error con números flotantes', () => {
    // Arrange
    const a = 3.5;
    const b = 4;
    const c = 5;

    // Act + Assert
    expect(() => clasificarTriangulo(a, b, c)).toThrow('Las longitudes deben ser enteros');
  });

  test('debe lanzar error si faltan parámetros', () => {
    // Arrange + Act + Assert
    expect(() => clasificarTriangulo(3, 4)).toThrow('Número incorrecto de parámetros');
  });

  test('debe lanzar error si sobran parámetros', () => {
    // Arrange + Act + Assert
    expect(() => clasificarTriangulo(3, 4, 5, 6)).toThrow('Número incorrecto de parámetros');
  });

  test('debe clasificar un isósceles casi equilátero', () => {
    // Arrange
    const a = 5;
    const b = 5;
    const c = 4;
    const esperado = 'Isósceles';

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test('debe clasificar un escaleno casi isósceles', () => {
    // Arrange
    const a = 5;
    const b = 6;
    const c = 7;
    const esperado = 'Escaleno';

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test('debe aceptar un triángulo muy pequeño válido', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const c = 1;
    const esperado = 'Equilátero';

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test('debe aceptar un triángulo muy grande válido', () => {
    // Arrange
    const a = 1000000;
    const b = 1000000;
    const c = 1000000;
    const esperado = 'Equilátero';

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test('debe fallar cuando un lado es igual a la suma de los otros dos', () => {
    // Arrange
    const a = 4;
    const b = 2;
    const c = 2;

    // Act + Assert
    expect(() => clasificarTriangulo(a, b, c)).toThrow('No es un triángulo');
  });

  test('debe aceptar cuando un lado es apenas menor a la suma de los otros dos', () => {
    // Arrange
    const a = 3;
    const b = 2;
    const c = 2;
    const esperado = 'Isósceles';

    // Act
    const resultado = clasificarTriangulo(a, b, c);

    // Assert
    expect(resultado).toBe(esperado);
  });

  test('debe fallar cuando un lado es apenas mayor a la suma de los otros dos', () => {
    // Arrange
    const a = 5;
    const b = 2;
    const c = 2;

    // Act + Assert
    expect(() => clasificarTriangulo(a, b, c)).toThrow('No es un triángulo');
  });
});