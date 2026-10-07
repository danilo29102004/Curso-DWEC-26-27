// Enunciado: La web tiene un menú para ver los productos de una sola categoría.
// Autor: Daniel Villegas
// Investigación: Fuentes consultadas
//


import type { Category } from "../../../types/product";
import type { Product } from "../../../types/product";



export function byCategory(list: Product[], category: Category): Product[] {
  return list.filter((product) => product.category === category);

}

// Pregunta · ¿Qué devuelve byCategory([], 'audio')?
// Resultado: []
// ¿Da error o devuelve algo con sentido? ¿Por qué?: Devuelve algo con sentido. No da error porque filter simplemente recorre un array de 0 elementos y devuelve un nuevo array vacío con los elementos que cumplen la condición ninguno.
