<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Iniciar Sesión</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true" class="ion-padding">
        <div id="login-container">
          <img src="/Logo-FastFood.png" alt="Logo" class="logo" />
  
          <ion-input class="input-field" label="Usuario" label-placement="floating" type="text" placeholder="Ingresa tu usuario"></ion-input>
          <ion-input class="input-field" label="Contraseña" label-placement="floating" type="password" placeholder="Ingresa tu contraseña"></ion-input>
          <ion-input class="input-field" label="Repetir contraseña" label-placement="floating" type="password" placeholder="Repite tu contraseña"></ion-input>

          <ion-button expand="block" class="login-button" @click="goToMenu">Registrarse</ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
import { useRouter } from 'vue-router';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';

const router = useRouter();

const goToMenu = () => {
  router.push('/menu');
};

</script>
  
  <style scoped>
  #login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 15px;
  }
  
  .logo {
    width: 120px; /* Ajusta el tamaño del logo */
    margin-bottom: 20px;
  }
  
  .input-field {
    width: 80%;
    max-width: 300px;
  }
  
  .login-button {
    width: 80%;
    max-width: 300px;
    border-radius: 20px; /* Botón redondeado */
  }
  </style>
  