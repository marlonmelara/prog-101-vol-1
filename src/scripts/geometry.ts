/**
 * Calcula el área de un triángulo.
 * Fórmula: (base * altura) / 2
 * @param base - Base del triángulo (debe ser > 0)
 * @param height - Altura del triángulo (debe ser > 0)
 * @returns El área calculada
 * @throws Error si algún valor es negativo o cero
 */
export function calculateTriangleArea(base: number, height: number): number {
  if (base <= 0 || height <= 0) {
    throw new Error("La base y la altura deben ser números positivos");
  }

  // Fórmula matemática pura
  return (base * height) / 2;
}
