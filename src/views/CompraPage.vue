<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Compra Finalizada</ion-title>
        </ion-toolbar>
        <MenuHeader />
      </ion-header>
  
      <ion-content :fullscreen="true" class="ion-padding">
        <div v-if="cartItems.length > 0">
          <h2>Resumen de tu Pedido</h2>
  
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
  
          <h3>Detalles de Pago</h3>
          <p><strong>Nombre:</strong> {{ paymentDetails.name }}</p>
          <p><strong>Número de Tarjeta:</strong> {{ paymentDetails.cardNumber }}</p>
          <p><strong>Fecha de Expiración:</strong> {{ paymentDetails.expirationDate }}</p>
          <p><strong>CVC:</strong> {{ paymentDetails.cvc }}</p>

          <ion-button @click="mapa">Ver por donde va mi pedido</ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import MenuHeader from '@/components/MenuHeader.vue';
  import { ref, computed, onMounted } from 'vue';
  import { useRouter } from 'vue-router'; // Importa useRouter
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  
  const router = useRouter(); // Inicializa el router
  
  const cartItems = ref([]);
  const paymentDetails = ref({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvc: ''
  });
  
  const totalPrice = computed(() =>
    cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
  );
  
  // Recuperar los datos de localStorage cuando la página se monta
  onMounted(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    const savedPaymentDetails = localStorage.getItem('paymentDetails');
  
    if (savedCartItems) {
      cartItems.value = JSON.parse(savedCartItems);
    }
  
    if (savedPaymentDetails) {
      paymentDetails.value = JSON.parse(savedPaymentDetails);
    }
  });
  
  // Función para navegar al mapa
  const mapa = () => {
    router.push('/map'); // Ahora router está definido
  };
  </script>
  
  
  <style scoped>
  /* El estilo es el mismo que en el checkout, ajustado para la página de compra */
  </style>
  