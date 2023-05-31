import { useState } from "react";
import CartContext from "../context/CartContext";

const CartProvider = ({ children }) => {
  const [cart, update] = useState({ items: [], total: 0 });
  const add = function (producto) {
    // Si el producto ya está en el carrito, dentro de items
    return update({
      items: [...cart.items, { ...producto, cantidad: 1 }],
      total: [...cart.items, { ...producto, cantidad: 1 }]
        .map((producto) => producto.precio * cantidad)
        .reduce((previo, actual) => (actual += previo), 0),
    });
  };
  const remove = function (id) {
    // Si el producto ya está en el carrito, dentro de items y su cantidad es < 1
    return update({
      items: [...cart.items].filter((producto) => producto.id != id),
      total: [...cart.items]
        .filter((producto) => producto.id != id)
        .map((producto) => producto.precio * cantidad)
        .reduce((previo, actual) => (actual += previo), 0),
    });
  };

  const set = function (id) {
    // no se usa filter, cual se usará ???
    return update({
      items: [...cart.items].filter((producto) => producto.id != id),
      total: [...cart.items]
        .filter((producto) => producto.id != id)
        .map((producto) => producto.precio * cantidad)
        .reduce((previo, actual) => (actual += previo), 0),
    });
  };
  return (
    <CartContext.Provider value={{ cart, add, remove, set }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
