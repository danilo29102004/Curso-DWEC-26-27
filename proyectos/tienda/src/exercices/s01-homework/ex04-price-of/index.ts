// Enunciado: El carrito guarda solo el id de cada producto y necesita consultar su precio.
// Autor: Daniel Villegas
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";


export function priceOf(list: Product[], id: number): number | null {

  const product = list.find((p) => p.id === id);

  if (product === undefined) {
    return null;
  }

  return product.price;

}

// Pregunta · ¿Por qué no es buena idea devolver 0 cuando el producto no existe?
// Respuesta: Porque 0 es un precio válido en una tienda por ejemplo, un producto gratuito o en promoción por lo que se confundiría con un producto real de coste cero. Devolver null indica que el producto no se ha encontrado en el catálogo.
