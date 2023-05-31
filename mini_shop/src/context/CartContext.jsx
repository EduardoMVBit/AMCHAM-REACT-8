import { createContext } from "react";

const CartContext = createContext({ items: [], total: 0 });

export default CartContext;
