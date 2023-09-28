const products = [
  {
    id: "1",
    name: "Toy Boy de Moschino",
    category: "hombre",
    price: "17.895 $",
    desc: "Fragancia olfativa Amaderada para Hombres, de 150 Ml .",
    stock: 15,
    img: "https://farmaonline.vteximg.com.br/arquivos/ids/314089-450-450/30-ML.jpg?v=637746778215270000",
  },
  {
    id: "2",
    name: "Tommy Girl de Tommy Hilfiger",
    category: "mujer",
    price: "9.580 $",
    desc: "Fragancia olfativa Floral Frutal para Mujeres, de 100 Ml.",
    stock: 20,
    img: "https://dqm4sv5xk0oaj.cloudfront.net/products/29253/large/open-uri20201209-25224-1kdllhx.?1607515356",
  },
];

export const getProducts = (categoryId) => {
  console.log(categoryId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};
