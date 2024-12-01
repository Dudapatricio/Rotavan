<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <div ref="mapContainer" class="map-container">
          <div ref="map" class="map"></div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 
import 'leaflet-routing-machine';

export default {
  name: "Mapa",
  mounted() {
    this.$nextTick(() => {
      this.iniciarMapa();
    });
  },
  methods: {
    iniciarMapa() {
      const lat = -2.9056;
      const lng = -41.7739;

      
      const map = L.map(this.$refs.map, {
        center: [lat, lng],
        zoom: 13,
        layers: [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
          })
        ]
      });

      L.marker([lat, lng]).addTo(map)
        .bindPopup('Parnaíba, Piauí')
        .openPopup();

      L.Routing.control({
        waypoints: [
          L.latLng(-2.9056, -41.7739), 
          L.latLng(-2.9170, -41.7642)  
        ],
        routeWhileDragging: true
      }).addTo(map);
    }
  }
}
</script>

<style scoped>
.map-container {
  height: 400px;  
  position: relative;
}

.map {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.leaflet-routing-container {
  background-color: black !important;
  color: white !important;
  opacity: 1 !important;
}
</style>

  