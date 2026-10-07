// Enunciado: El encargado necesita saber qué productos debe reponer.
// Autor: Daniel Villegas
// Investigación: Fuentes consultadas
//


import type { Product } from "../../../types/product";


export function soldOutNames(list: Product[]): string[] {
  return list.filter((product) => product.stock === 0).map((product) => product.name);

}



