import laptops from './laptops';
import mobiles from './mobiles';

// export interface Produt {
//   id: string;
//   name: String;
//   image: String;
//   price: number; // in rupees
//   discount: number; // in percent
//   category: string;
//   stars: number;
//   numReviews: number;
//   deliveryDays: number;
//   fullfilled: boolean;
//   keywords: string[];
//   description: string;
// }

// function shuffle(array: Array<Produt>) {
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const products = shuffle([...mobiles, ...laptops]);

export function getProductById(id) {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category, excludeId) {
  return products.filter(p =>
    excludeId
      ? p.category === category && p.id !== excludeId
      : p.category === category,
  );
}

export default products;
