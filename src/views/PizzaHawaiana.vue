<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Pizza Hawaiana</ion-title>
      </ion-toolbar>
      <MenuHeader />
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="pizza">
        <img src="/pizzahawaiana.jpeg" alt="Pizza Hawaiana" class="pizza-image" />
        <div class="pizza-info">
          <h3>Pizza Hawaiana</h3>
          <h3>Ingredientes: Salsa de tomate, extra de queso mozzarella, doble de jamón york y piña</h3>
          <ion-button @click="addToCart">Añadir al carrito</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import MenuHeader from '@/components/MenuHeader.vue';
import { useCartStore } from '@/store/cart'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';

// Accedemos a la tienda del carrito
const cart = useCartStore();

// Función para añadir la pizza al carrito con tipado
const addToCart = (): void => {
  const pizza = {
    name: 'Pizza Hawaiana',
    image: '/pizzahawaiana.jpeg',
  };

  cart.addToCart(pizza);
};
</script>

<style scoped>
.pizza {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.pizza-image {
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  border-radius: 9px;
}

.pizza-info h3 {
  margin: 5px 0;
  font-size: 18px;
  font-weight: bold;
}

ion-button {
  margin-top: 10px;
  color: white;
  font-weight: bold;
}
</style>
