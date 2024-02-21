const products = [
  {
    id: "1",
    name: "cama",
    precio: "50000",
    categoria: "muebles",
    imagen:
      "https://acdn.mitiendanube.com/stores/912/364/products/cama-de-madera-de-pino-modelo-cruz-1-plaza-a0d71d0253f6fa6d2617019635701941-640-0.jpg",
    stock: "10",
    descripcion: "cama de pino 1 plaza",
  },
  {
    id: "2",
    name: "sabana blanca lisa",
    precio: "65000",
    categoria: "blanqueria",
    imagen:
      "https://www.elemporiosabanas.com.ar/wp-content/uploads/2021/05/IMG_20210521_182126_965.jpg",
    stock: "4",
    descripcion: "sabana 2 plazas 180 hilos",
  },
  {
    id: "3",
    name: "carpa iglu",
    precio: "88000",
    categoria: "camping",
    imagen:
      "https://www.ideahogar.com.ar/4208-thickbox_default/carpa-iglu-huada-automatica-2-personas-ml182.jpg",
    stock: "10",
    descripcion: "carpa iglu para 2 personas",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 200);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id == productId));
    }, 200);
  });
};

export const getProductByCategory = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.categoria == categoriaId));
    }, 200);
  });
};
