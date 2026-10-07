// Enunciado: Etiquetas. La tienda quiere mostrar en el escaparate una etiqueta de texto por cada producto
// Autor: Daniel Villegas
// Investigación: Fuentes consultadas

import type { Product } from "../../../types/product";

export function tags(list: Product[]): string[] {

  return list.map((p) => '#' + p.id + ' ' + p.name + '-' + p.price + '€');


}



