

//recibe una lista de productso y promete devolver una lista de numeros ccon el precio incluyendo el iva

import type { Product } from "../../../types/product";
const vat = 0.21

export function priceWithVat(myProduct: Product[]): number[] {



  return myProduct.map(p => Math.round(p.price * (1 + vat)))
}
