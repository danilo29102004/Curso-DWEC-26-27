
import type { Product } from '../../../types/product';

export const allInStock = (list: Product[]): boolean => list.every((p) => p.stock > 0);

// Pregunta 1 · ¿Qué devuelve allInStock([])?
// Resultado: true

// Pregunta 2 · ¿Es una respuesta razonable para una tienda sin productos? ¿Por qué?
// Respuesta: No del todo porque en un catálogo vacío resulta confuso para un usuario. Sin embargo, en programación ocurre por la "verdad vacía" (vacuous truth), ya que .every() busca si algún elemento incumple la condición y, al no haber ninguno, devuelve true por defecto.

// Pregunta 3 · ¿Cómo cambiarías la función para que una tienda vacía devuelva false?
// Respuesta (escribe el código en una línea): export const allInStock = (list: Product[]): boolean => list.length > 0 && list.every((p) => p.stock > 0);
