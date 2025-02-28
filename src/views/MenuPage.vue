<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Menú de Pizzas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div id="menu-container">
        <img src="/Logo-FastFood.png" alt="Logo" class="logo" />
        <ion-button router-link="/menu">Pizzas</ion-button>
        <router-link to="/carrito">
          <img src="/Carrito.png" alt="Carrito" class="logo" />
        </router-link>
      </div>

      <!-- Carrusel con scroll horizontal -->
      <div class="carousel-wrapper" ref="carouselWrapper">
        <carousel
          :items-to-show="itemsToShow"
          :items-to-scroll="1"
          mouse-drag
          touch-drag
          wrap-around
          class="pizza-carousel"
        >
          <slide
            v-for="(pizza, index) in pizzas"
            :key="index"
            class="pizza-slide"
          >
            <router-link :to="getPizzaRoute(pizza.name)">
              <img :src="pizza.image" :alt="pizza.name" class="pizza-image" />
              <div class="pizza-info">
                <h3>{{ pizza.name }}</h3>
              </div>
            </router-link>
          </slide>
        </carousel>
      </div>

      <!-- Carrusel con scroll horizontal -->
      <div class="carousel-wrapper" ref="carouselWrapper">
        <carousel
          :items-to-show="itemsToShow"
          :items-to-scroll="1"
          mouse-drag
          touch-drag
          wrap-around
          class="pizza-carousel"
        >
          <slide
            v-for="(pizza, index) in catalogo"
            :key="index"
            class="pizza-slide"
          >
            <router-link :to="getPizzaRoute(pizza.name)">
              <img :src="pizza.image" :alt="pizza.name" class="pizza-image" />
              <div class="pizza-info">
                <h3>{{ pizza.name }}</h3>
              </div>
            </router-link>
          </slide>
        </carousel>
      </div>
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCartStore } from '@/store/cart';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { Carousel, Slide } from 'vue3-carousel'; // Importar componentes del carrusel
import 'vue3-carousel/dist/carousel.css'; // Importar libreria del carrusel

const cart = useCartStore();
const carouselWrapper = ref<HTMLElement | null>(null);

const pizzas = [
  { name: "Pizza Pepperoni", image: "/public/pizzapepperoni.jpeg" },
  { name: "Pizza Carbonara", image: "/public/pizzacarbonara.jpeg" },
  { name: "Pizza 4 Quesos", image: "/public/pizza4quesos.jpeg" },
  { name: "Pizza Hawaiana", image: "/public/pizzahawaiana.jpeg" },
];

const catalogo = [
  { name: "Pizza Napolitana", image: "/public/pizzanapolitana.jpeg" },
  { name: "Pizza Mediterranea", image: "/public/pizzamediterranea.jpg"}
]

const getPizzaRoute = (pizzaName: string) => {
  return pizzaName.toLowerCase().replace(/\s+/g, '');
};

// Propiedad reactiva para determinar el número de elementos a mostrar
const itemsToShow = ref(window.innerWidth < 768 ? 1 : 2);

// Agregar scroll horizontal con el trackpad y rueda del mouse
onMounted(() => {
  if (carouselWrapper.value) {
    const wrapper = carouselWrapper.value;

    wrapper.addEventListener('wheel', (event: WheelEvent) => {
      event.preventDefault();
      wrapper.scrollLeft += event.deltaY;
    });

    // Actualizar itemsToShow al cambiar el tamaño de la ventana
    window.addEventListener('resize', () => {
      itemsToShow.value = window.innerWidth < 768 ? 1 : 2;
    });
  }
});
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

/* Asegura que el carrusel permita el scroll */
.carousel-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px; /* Reducir la altura del carrusel */
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Ocultar scrollbar en Firefox */
  -ms-overflow-style: none; /* Ocultar scrollbar en IE y Edge */
  margin-bottom: 0; /* Eliminar margen inferior */
}

.carousel-wrapper::-webkit-scrollbar {
  display: none; /* Ocultar scrollbar en Chrome y Safari */
}

.pizza-carousel {
  width: 80%;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 0; /* Eliminar margen entre los carruseles */
}

.pizza-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: inherit;
  padding: 10px;
  margin: 0; /* Asegúrate de que no haya margen adicional */
}

.pizza-image {
  width: 300px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 10px;
}

.pizza-info h3 {
  font-size: 18px;
  font-weight: bold;
}
</style>
