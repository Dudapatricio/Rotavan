<template>
  <v-container>
    <v-main>
      
      <v-row>
        <v-col cols="12" class="text-center">
          <h1 class="mt-4">Sobre Nós</h1>
          <p class="text-h6">
            Conheça mais sobre o <strong>Rota van</strong> e como trabalhamos para otimizar o monitoramento e a gestão.
          </p>
        </v-col>
      </v-row>

      <v-row class="mt-6">
        <v-col cols="12" md="4" class="text-center">
          <v-card outlined>
            <v-card-title>Missão</v-card-title>
            <v-card-text>
              Prover soluções modernas para monitoramento e gestão de veículos em tempo real, facilitando a tomada de decisões.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <v-card outlined>
            <v-card-title>Visão</v-card-title>
            <v-card-text>
              Buscar falcilitar a vida dos moradores e trazer inovações para a cidade.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <v-card outlined>
            <v-card-title>Valores</v-card-title>
            <v-card-text>
              Transparência, eficiência, inovação e compromisso com nossos usuários.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-6">
        <v-col cols="12">
          <v-card>
            <v-card-title class="text-h5">Nossa História</v-card-title>
            <v-card-text>
              O Aplicativo Rota Van nasceu com o propósito de resolver desafios no deslocamento dos moradores e gerenciamento de rotas. 
              Desde o início, nosso objetivo foi simplificar a operação e oferecer informações em tempo real para usuários. 
              Esperamos sermos reconhecidos pela nossa eficiência e confiabilidade.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-6">
        <v-col cols="12">
          <h2 class="text-center">Nossa Equipe</h2>
        </v-col>
        <v-col cols="12" md="4" v-for="member in team" :key="member.name" class="text-center">
          <v-avatar size="100">
            <img :src="member.photo" alt="Foto do Membro">
          </v-avatar>
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </v-col>
      </v-row>

      <v-row class="mt-6">
        <v-col cols="12">
          <v-card>
            <v-card-title class="text-h5">Fale Conosco</v-card-title>
            <v-card-text>
              Tem dúvidas ou precisa de ajuda? Entre em contato conosco:
              <ul>
                <li><strong>E-mail:</strong> suporte@rotavan.com</li>
                <li><strong>Telefone:</strong> (86) 99982-4756</li>
                <li><strong>Endereço:</strong> Prefeitura, 123, Parnaíba - PI</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      team: [
        
        {
          name: "Maria Eduarda",
          role: "Desenvolvedor Front end",
          photo: "https://via.placeholder.com/100",
        },
        {
          name: "Alex Victor",
          role: "Desenvolvedor Front end",
          photo: "https://via.placeholder.com/100",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-weight: bold;
}
</style>
