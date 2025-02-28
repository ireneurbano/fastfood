<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Pizza de 4 quesos</ion-title>
      </ion-toolbar>
    </ion-header>

<ion-content :fullscreen="true" class="ion-padding" style="display: block;">
      <div id="menu-container">
        <ion-button router-link="/compra">Volver</ion-button>
        <img src="/Carrito.png" alt="Logo" class="logo" />
      </div>

      <div id="map-container">
        <div id="map"></div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { onMounted, nextTick } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

onMounted(() => {
  nextTick(() => {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      console.error('El contenedor del mapa no se encontró');
      return;
    }

    const map = L.map(mapContainer).setView([40.7128, -74.0060], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([40.7128, -74.0060]).addTo(map)
      .bindPopup('¡Aquí está tu pizza!')
      .openPopup();

    // 🛠 Forzar redibujado después de un pequeño retraso
    setTimeout(() => {
      map.invalidateSize();
    }, 500);
  });
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

#map-container {
  width: 100%;
  height: 400px; /* Ajusta la altura según necesites */
  position: relative;
}

#map {
  width: 100%;
  height: 100vh;
  min-height: 400px;
}


</style>