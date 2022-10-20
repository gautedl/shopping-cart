
export let Cart = [];

export const deleteFromCart = (item) => {
  Cart = Cart.filter((x) => item.title !== x.title)
} 

export const emptyCart = () => {
  Cart = []
}