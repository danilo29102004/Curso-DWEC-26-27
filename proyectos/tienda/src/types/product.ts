//un tipo se escribe al forma de un dato. es para typear todo
export type Category = "monitors" | "GPU" | "audio" | "peripherals";

//una interfaz es como un contrato con los valores que debe tener y el tipo. typescript firma el contrato.
//los elementos de unen con una separacion de ;
//normal mente el iterface es para tipear clases
export interface Product {

  id: number;
  name: string;
  price: number; // precio en euros sin IVA
  category: Category;
  stock: number;



}
