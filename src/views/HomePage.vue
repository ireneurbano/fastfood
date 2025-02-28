<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <img src="/Logo-FastFood.png" alt="Logo" />
        <div class="button-container">
          <ion-button class="custom-button" color="primary" @click="goToRegister">Registrarme</ion-button>
          <ion-button class="custom-button" color="secondary" @click="goToLogin">Iniciar sesión</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';

const router = useRouter();

const goToLogin = () => {
  router.push('/login');
};

const goToRegister = () => {
  router.push('/register');
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#container img {
  width: 170px; /* Ajusta el tamaño del logo si es necesario */
  height: auto;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.custom-button {
  width: 160px; /* Hace los botones más pequeños */
  height: 35px; /* Reduce la altura */
  font-size: 14px; /* Ajusta el tamaño del texto */
  border-radius: 20px; /* Hace los bordes redondeados */
}
</style>
