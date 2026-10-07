// Enunciado: ¿Se puede comprar? Antes de añadir algo al carrito hay que comprobar si esa compra es posible.
// Autor: Daniel Villegas
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export function canBuy(list: Product[], id: number, quantity: number): boolean {

  const product = list.find((p) => p.id === id);
  if (product === undefined) {
    return false;
  }
  return quantity > 0 && product.stock >= quantity;

}
