<template>
  <v-app>
    <v-main>

      <v-container class="mt-8">
        <v-row align="center" justify="center">
          <v-col cols="12" md="8">
            <v-card color="#eef5ed">
              <v-img max-height="300px" src="@/assets/logo-redonda.png"></v-img>
              <v-card-title class="text-h3 text-center" h1>O que é a Rotavan?</v-card-title>
              <v-card-text class="text-center">
                O Rotavan é um sistema projetado para consultas de vans e rotas em tempo real, trazendo eficiência e transparência para os seus usuários.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="mt-8">
        <v-row>
          <v-col cols="12">
            <h2 class="text-center">Funcionalidades do Sistema</h2>
          </v-col>
          <v-col cols="12" md="4" class="text-center" v-for="feature in features" :key="feature.title">
            <v-card outlined>
              <v-card-title>{{ feature.title }}</v-card-title>
              <v-card-text>{{ feature.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="mt-8">
        <v-row class="stats-section" justify="center">
          <v-col cols="12">
            <h2 class="text-center">Estatísticas do Sistema</h2>
          </v-col>
          <v-col cols="12" md="3" class="text-center" v-for="stat in stats" :key="stat.label">
            <v-card outlined>
              <v-card-title class="display-2">{{ stat.value }}</v-card-title>
              <v-card-subtitle>{{ stat.label }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="mt-8">
        <v-row>
          <v-col cols="12" md="4" class="text-center" v-for="testimonial in testimonials" :key="testimonial.name">
            <v-card outlined>
              <v-card-text>"{{ testimonial.message }}"</v-card-text>
              <v-card-subtitle class="mt-4 font-italic">- {{ testimonial.name }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-footer color="primary" class="white--text text-center pa-4 mt-8">
        <p>&copy; 2024 Rota van. Todos os direitos reservados.</p>
        <p>
          <v-btn text class="white--text" @click="goToPage('sobre-nos')">Sobre Nós</v-btn> |
        </p>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      features: [
        { title: "Monitoramento em Tempo Real", description: "Veja a localização e o status dos veículos em tempo real." },
        { title: "Listas de vans", description: "Acesse as listas de vans da cidade." },
        { title: "Gestão de Rotas", description: "Planeje e otimize as rotas da sua viagem." },
      ],
      stats: [
        { label: "Veículos Monitorados", value: 125 },
        { label: "Rotas Ativas", value: 36 },
        { label: "Usuários", value: 240 },
      ],
     
    };
  },
  methods: {
    goToPage(page) {
      this.$router.push(`/${page}`);
    },
  },
};
</script>

<style scoped>
.hero-section {
  background: linear-gradient(45deg, #3f51b5, #2196f3);
  color: white;
  padding: 50px 0;
}
.stats-section .v-card {
  background-color: #f5f5f5;
}
</style>
