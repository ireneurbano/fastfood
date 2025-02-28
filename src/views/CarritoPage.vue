<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Tu Carrito</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div id="menu-container">
        <img src="/Logo-FastFood.png" alt="Logo" class="logo" />
        <ion-button router-link="/menu"> Volver al Menú </ion-button>
      </div>

      <!-- Verificación de si el carrito está vacío -->
      <div v-if="cart.items.length === 0">
        <p>Tu carrito está vacío.</p>
      </div>

      <div v-else id="menu-pizzas">
        <!-- Mostrar las pizzas del carrito -->
        <div class="pizza" v-for="(item, index) in cart.items" :key="index">
          <img :src="item.image" :alt="item.name" class="pizza-image" />
          <div class="pizza-info">
            <h3>{{ item.name }}</h3> <!-- Nombre de la pizza -->
            <p>Cantidad: {{ item.quantity }}</p>
            <p>Precio: {{ item.price * item.quantity }}€</p> <!-- Precio total por cantidad -->
          </div>
          <div class="buttons-container">
            <ion-button
            color="danger"
            @click="removeFromCart(index)"
            class="remove-button"
          >
            Eliminar
          </ion-button>
          <ion-button
            color="primary"
            @click="reduceQuantity(index)"
            class="reduce-button"
          >
            Reducir Cantidad
          </ion-button>
          </div>
        
        </div>
      </div>

      <!-- Botón para proceder al pago -->
      <ion-button @click="goToCheckout" class="checkout-button">Proceder al Pago</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart'; // Accedemos al store del carrito
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const cart = useCartStore(); // Accedemos al carrito
const router = useRouter();

// Redirigir al Checkout
const goToCheckout = () => {
  router.push('/checkout');
};

// Función para eliminar pizza del carrito
const removeFromCart = (index: number) => {
  cart.removeFromCart(index); // Llamamos al método de eliminar pizza del carrito
};

// Función para reducir la cantidad de pizza
const reduceQuantity = (index: number) => {
  cart.reduceQuantity(index); // Llamamos al método para reducir la cantidad
};
</script>

<style scoped>
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

.pizza {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between; /* Añadimos para separar la imagen y los botones */
}

.pizza-image {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

.pizza-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.pizza-info h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.pizza-info p {
  font-size: 14px;
  color: #666;
}

.buttons-container {
  display: flex;
  flex-direction: column;
}

ion-button {
  margin-top: 10px;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
}

.checkout-button {
  margin-top: 20px;
}

#menu-pizzas {
  margin-top: 20px;
}

#menu-pizzas .pizza {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.remove-button {
  margin-left: 20px;
  background-color: #f44336; /* Rojo para el botón de eliminar */
  color: white;
}

.reduce-button {
  margin-left: 10px;
  background-color: #2196F3; /* Azul para el botón de reducir cantidad */
  color: white;
}

/* Media query para pantallas grandes */
@media (min-width: 768px) {
  .pizza {
    justify-content: flex-start; /* Alinear elementos hacia la izquierda */
  }

  .pizza-info {
    margin-left: 10px; /* Ajustar el margen para que la información esté más cerca de la imagen */
  }

  .buttons-container {
    margin-left: auto; /* Colocar los botones al final */
    flex-direction: row; /* Mostrar los botones en una fila */
  }
}
</style>
