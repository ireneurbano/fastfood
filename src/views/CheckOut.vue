<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Checkout</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div id="menu-container">
        <img src="/Logo-FastFood.png" alt="Logo" class="logo" />
        <ion-button router-link="/menu">Volver al Menú</ion-button>
        <img src="/Carrito.png" alt="Logo" class="logo" />
      </div>

      <div id="checkout-container">
        <h2>Resumen de Pedido</h2>

        <!-- Verificar si el carrito está vacío -->
        <div v-if="cartItems.length === 0" class="empty-cart">
          <p>Tu carrito está vacío. Agrega algunas pizzas primero.</p>
        </div>

        <!-- Mostrar los elementos del carrito -->
        <div v-for="(item, index) in cartItems" :key="index" class="checkout-item">
          <img :src="item.image" alt="pizza" class="checkout-item-image" />
          <div class="checkout-item-info">
            <h3>{{ item.name }}</h3>
            <p>Cantidad: {{ item.quantity }}</p>
            <p>Precio: ${{ item.price * item.quantity }}</p>
          </div>
        </div>

        <!-- Mostrar el total -->
        <div class="total">
          <h3>Total: ${{ totalPrice }}</h3>
        </div>

        <!-- Formulario de pago -->
        <div class="payment-form">
          <ion-input v-model="paymentDetails.name" label="Nombre Completo" required />
          <ion-input v-model="paymentDetails.cardNumber" label="Número de Tarjeta" type="number" required />
          <ion-input v-model="paymentDetails.expirationDate" label="Fecha de Expiración" type="date" required />
          <ion-input v-model="paymentDetails.cvc" label="CVC" type="number" required />
        </div>

        <!-- Botón para proceder al pago -->
        <ion-button @click="proceedToPayment" v-if="cartItems.length > 0">Pagar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCartStore } from '@/store/cart'; // Asegúrate de importar la tienda de carrito
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/vue';

const cartStore = useCartStore();

// Computar los productos en el carrito y el precio total
const cartItems = computed(() => cartStore.items);

const totalPrice = computed(() =>
  cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
);

// Definir los detalles de pago (simulando un formulario)
const paymentDetails = ref({
  name: '',
  cardNumber: '',
  expirationDate: '',
  cvc: '',
});

// Función para proceder al pago y redirigir a CompraPage
const proceedToPayment = () => {
  // Guardar el carrito y los detalles de pago en localStorage o en algún otro lugar
  localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
  localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails.value));

  // Redirigir a la página CompraPage
  window.location.href = '/compra';  // O usar el router de Vue si tienes configurado el enrutador
};
</script>

<style scoped>
#checkout-container {
  padding: 20px;
  background-color: transparent;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#checkout-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.checkout-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background-color: transparent;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.checkout-item-image {
  width: 80px;
  height: 80px;
  margin-right: 15px;
  border-radius: 8px;
}

.checkout-item-info {
  flex: 1;
}

.checkout-item-info h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.checkout-item-info p {
  margin: 5px 0;
  color: #666;
}

.total {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}

.payment-form {
  margin-top: 20px;
}

ion-input {
  margin-bottom: 10px;
  width: 100%;
}

ion-button {
  margin-top: 20px;
  color: white;
  font-weight: bold;
}

.empty-cart {
  text-align: center;
  font-size: 18px;
  color: #777;
  margin-top: 20px;
}

#menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
}

#menu-container .logo {
  height: 40px;
  width: auto;
}
</style>
