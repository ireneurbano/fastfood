<template>
    <ion-header>
        <ion-toolbar>
            <div id="menu-container">
                <ion-button :router-link="'/menu'">Atrás</ion-button>
                <router-link to="/carrito">
                    <img src="/Carrito.png" alt="Carrito" class="logo" />
                </router-link>        
            </div>
        </ion-toolbar>
    </ion-header>
</template>
  
<script setup>
import { IonHeader, IonToolbar, IonButton } from '@ionic/vue';
</script>
  
<style scoped>
    #menu-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #fff;
    }
  
    .logo {
        width: 40px;
        height: auto;
    }
</style>
  