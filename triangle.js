function clasificarTriangulo(a, b, c) {
  // Validar cantidad de parámetros
  if (arguments.length !== 3) {
    throw new Error('Número incorrecto de parámetros');
  }

  // Validar que sean enteros
  if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
    throw new Error('Las longitudes deben ser enteros');
  }

  // Validar que sean positivos
  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error('Longitudes no válidas');
  }

  // Validar desigualdad triangular
  if (a >= b + c || b >= a + c || c >= a + b) {
    throw new Error('No es un triángulo');
  }

  // Clasificación
  if (a === b && b === c) {
    return 'Equilátero';
  }

  if (a === b || b === c || a === c) {
    return 'Isósceles';
  }

  return 'Escaleno';
}

module.exports = clasificarTriangulo;