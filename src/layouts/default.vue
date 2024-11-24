<template>
  <v-app>
    <v-main>
      <router-view />
      <v-navigation-drawer :width="200" color="#eef5ed">
        <vlist-item>
          <v-img src="@/assets/logo.png"></v-img>
        </vlist-item>
        <v-list-item link>
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-heart</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title class="font-weight-medium">Favoritos</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-magnify</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Pesquisar</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-bus-multiple</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Lista de Vans</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-bus-stop</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Pontos de Van</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-bus-marker</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Mapa de Vans</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-bus-wrench</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Configurações</v-list-item-title>
        </v-list-item>
        </v-navigation-drawer>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
  //
</script>
