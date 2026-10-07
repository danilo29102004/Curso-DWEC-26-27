// Enunciado: Proyecto creacion de uan tienda
// Autor: Daniel Villegas
// Investigación: 
//
//------importacion-----------
//
import type { Product } from "./types/product";
import { products } from "./data/products";
import { tags } from "./exercices/s01-homework/ex01-tags";
import { soldOutNames } from "./exercices/s01-homework/ex02-sold-out-names";
import { byCategory } from "./exercices/s01-homework/ex03-by-category";
import { priceOf } from "./exercices/s01-homework/ex04-price-of";
import { canBuy } from "./exercices/s01-homework/ex05-can-buy";

//mostrar todos los poroductos 
//
console.log("catalogo de productos", products)

const first: Product | undefined = products[0];
console.log("primer producto", first)

//mostrar el primer producto precio
console.log("precio del primer preducto ", first.price)

//ejercicio 1 mostrar la lista de productos
console.log('ej01', tags(products));

//ejercicio 2
console.log('ej02', soldOutNames(products));

//ejercicio 3
console.log('ej03', byCategory(products, 'audio').map((p) => p.name));
console.log('ej03', byCategory(products, 'monitors').map((p) => p.name));
console.log('ej03', byCategory([], 'audio'));

//ejercicio 4
console.log('ej04', priceOf(products, 3));
console.log('ej04', priceOf(products, 99));


//ejercicio 5
console.log(
  'ej05',
  canBuy(products, 1, 2), // teclado, hay 5 → true
  canBuy(products, 1, 6), // teclado, pide 6 y solo hay 5 → false
  canBuy(products, 2, 1), // ratón agotado → false
  canBuy(products, 99, 1), // no existe → false
  canBuy(products, 1, 0), // 0 unidades → false
);


