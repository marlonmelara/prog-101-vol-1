// Constante exportada por si la necesitas en otro lado (ej. tests)
export const KM_TO_MILE_FACTOR = 0.621371;

/**
 * Convierte kilómetros a millas.
 * @param km - Distancia en kilómetros (debe ser positivo)
 * @returns Distancia en millas redondeada a 2 decimales
 * @throws Error si la distancia es negativa
 */
export function calculateMiles(km: number): number {
  if (km < 0) {
    throw new Error("La distancia no puede ser negativa");
  }

  const result = km * KM_TO_MILE_FACTOR;
  return Number(result.toFixed(2)); // Retornamos un número, no un string
}
