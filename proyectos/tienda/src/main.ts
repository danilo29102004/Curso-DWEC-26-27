// Enunciado: Proyecto creacion de uan tienda
// Autor: Daniel Villegas
// Investigación: 
//
//------importacion-----------
//
import type { Product } from "./types/product";
import { products } from "./data/products";





//mostrar todos los poroductos 




console.log("catalogo de productos", products)



const first: Product | undefined = products[0];
console.log("primer producto", first)




//mostrar el primer producto precio

console.log("precio del primer preducto ", first.price)
