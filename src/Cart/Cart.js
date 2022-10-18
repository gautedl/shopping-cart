export const Cart = [];

export const cartSize = Cart.reduce((acc, obj) => {
  return acc + obj.quantity;
}, 0);
