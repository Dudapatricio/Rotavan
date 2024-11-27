<template>
  <v-app>
    <v-navigation-drawer :width="180" color="#eef5ed" expand-on-hover rail class="position-fixed">
        <v-list-item link @click="$router.push({ path: '/' })">
          <v-img src="@/assets/logo.png"></v-img>
        </v-list-item>
        <v-divider class="my-2"></v-divider>
        <v-list-item link @click="$router.push({ path: '/Favoritos' })">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-heart</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title class="font-weight-medium">Favoritos</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({ path: '/Pesquisar' })">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-magnify</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Pesquisar</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({ path: '/Vans/Lista-de-Vans' })">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-bus-multiple</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Lista de Vans</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({ path: '/Pontos-de-Van' })">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-bus-stop</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Pontos de Van</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({ path: '/Mapa-de-Vans' })">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-bus-marker</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Mapa de Vans</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({ path: '/Configuracoes' })">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-bus-wrench</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Configurações</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({ path: '/Vale-Estudantil' })">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-ticket</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Vale Estudantil</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({ path: '/FAQ' })">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-frequently-asked-questions</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Dúvidas?</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({ path: '/Sobre-nos' })">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-information</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Sobre Nós</v-list-item-title>
        </v-list-item>
        </v-navigation-drawer>
        
    <v-main>
      <router-view />
      
    </v-main>

    
  </v-app>
</template>

<script setup>
  //
</script>
