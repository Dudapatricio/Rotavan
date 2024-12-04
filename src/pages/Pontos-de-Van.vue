<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="search"
          label="Buscar ponto de van"
          placeholder="Digite o nome ou endereço"
          clearable
          @input="filterPoints"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row v-if="!selectedPoint">
      <v-col cols="12">
        <v-list>
          <v-list-item
            v-for="point in filteredPoints"
            :key="point.id"
            @click="selectPoint(point)"
            class="pointer"
          >
            <v-list-item-content>
              <v-list-item-title>{{ point.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ point.address }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12">
        <h2 class="font-weight-bold">{{ selectedPoint.name }}</h2>
        <p class="text-caption">Última atualização às 22:32</p>

        <v-card outlined>
          <v-row class="pa-3">
            <v-col cols="4" class="text-center font-weight-bold">Ônibus</v-col>
            <v-col cols="4" class="text-center font-weight-bold">Horários</v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row v-for="van in selectedPoint.vans" :key="van.id" class="pa-3">
            <v-col cols="4" class="text-center">{{ van.line }}</v-col>
            <v-col cols="4" class="text-center">{{ formatSchedules(van.schedule) }}</v-col>
          </v-row>
        </v-card>

        <v-list dense class="mt-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="green">mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Salvar como favorito</v-list-item-title>
          </v-list-item>
          <v-list-item @click="showRealTimeMap">
            <v-list-item-icon>
              <v-icon color="blue">mdi-map-marker</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Ver o ônibus em tempo real</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="orange">mdi-clock-alert</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Definir alarme</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-btn class="mt-4" text color="primary" @click="clearSelection">
          Voltar para lista de pontos
        </v-btn>
      </v-col>
    </v-row>

    <v-container v-if="showMap" class="mt-4">
      <div ref="mapRef" class="map"></div>
      <v-btn class="mt-2" text color="primary" @click="closeMap">
        Fechar Mapa
      </v-btn>
    </v-container>
  </v-container>
</template>

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ref, onMounted, nextTick } from "vue";
import { createClient } from "@supabase/supabase-js";

// Supabase client
const supabase = createClient(
  "https://mbmczdmhmtctlseiorwy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ibWN6ZG1obXRjdGxzZWlvcnd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3NjIzNDcsImV4cCI6MjA0ODMzODM0N30.fK_ex-JdDqGe7lqwblGC5WTJO4-JwP7mBXnLgXFtepE"
);

// Reactive states
const search = ref("");
const points = ref([
  {
    id: 1,
    name: "Ponto 10",
    address: "Brodeville",
    vans: [{ id: 1, line: "20", schedule: ["07:43", "09:21", "10:59"] }],
    coords: [-2.9056, -41.7739],
  },
  {
    id: 2,
    name: "Ponto 20",
    address: "Dom Rufino",
    vans: [{ id: 2, line: "02", schedule: ["08:00", "09:30", "11:00"] }],
    coords: [-2.917, -41.7642],
  },
  {
    id: 3,
    name: "Ponto 30",
    address: "Praça da Graça",
    vans: [{ id: 3, line: "10", schedule: ["07:15", "08:45", "10:15"] }],
    coords: [-2.9123, -41.7725],
  },
]);
const filteredPoints = ref([]);
const selectedPoint = ref(null);
const showMap = ref(false);
const mapRef = ref(null); // Ref para o elemento DOM do mapa
let map = null;

// Methods
const filterPoints = () => {
  filteredPoints.value = points.value.filter(
    (point) =>
      point.name.toLowerCase().includes(search.value.toLowerCase()) ||
      point.address.toLowerCase().includes(search.value.toLowerCase())
  );
};

const selectPoint = (point) => {
  selectedPoint.value = point;
};

const clearSelection = () => {
  selectedPoint.value = null;
};

const formatSchedules = (schedules) => {
  return schedules.join(", ");
};

const showRealTimeMap = async () => {
  if (!selectedPoint.value?.coords) {
    console.error("Ponto inválido.");
    return;
  }
  showMap.value = true;
  await nextTick();
  initializeMap();
};

const initializeMap = () => {
  const { coords } = selectedPoint.value;
  if (map) map.remove();

  map = L.map(mapRef.value).setView(coords, 13); // Usa o mapRef para inicializar o mapa
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker(coords).addTo(map).bindPopup(selectedPoint.value.name).openPopup();
};

const closeMap = () => {
  showMap.value = false;
  if (map) {
    map.remove();
    map = null;
  }
};

// Lifecycle hook
onMounted(() => {
  filteredPoints.value = points.value;
});
</script>

<style scoped>
.v-btn {
  text-transform: none;
}

.v-icon {
  margin-right: 8px;
}

.pointer {
  cursor: pointer;
}

.map {
  height: 400px;
  width: 100%;
}
</style>
