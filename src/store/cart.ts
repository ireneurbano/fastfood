import { defineStore } from 'pinia';

// Definimos el store para el carrito
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as { name: string; image: string; price: number; quantity: number }[], // Agregamos la cantidad
    total: 0, // Total del carrito
  }),
  actions: {
    // Función para agregar pizzas al carrito
    addToCart(pizza: { name: string; image: string }) {
      const price = 10; // Precio fijo de cada pizza
      const existingItem = this.items.find(item => item.name === pizza.name);

      if (existingItem) {
        existingItem.quantity += 1; // Incrementamos la cantidad si ya existe
      } else {
        this.items.push({ ...pizza, price, quantity: 1 }); // Si no, la agregamos con cantidad 1
      }

      this.updateTotal(); // Actualizamos el total
    },
    // Función para reducir la cantidad de una pizza en el carrito
    reduceQuantity(index: number) {
      const item = this.items[index];
      if (item.quantity > 1) {
        item.quantity -= 1; // Reducimos la cantidad si es mayor a 1
      } else {
        this.items.splice(index, 1); // Si la cantidad es 1, eliminamos la pizza del carrito
      }
      this.updateTotal(); // Actualizamos el total
    },
    // Función para eliminar pizza del carrito
    removeFromCart(index: number) {
      this.items.splice(index, 1); // Eliminamos la pizza del carrito
      this.updateTotal(); // Actualizamos el total
    },
    // Función para actualizar el total del carrito
    updateTotal() {
      this.total = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0); // Calculamos el total sumando los precios de todas las pizzas
    },
  },
});
