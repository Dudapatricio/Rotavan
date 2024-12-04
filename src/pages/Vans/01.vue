<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <v-card flat color="secondary">
          <v-card-title align="center" class="text-h4">VAN 01</v-card-title>
          <div class="text-caption">
            <v-slider direction="vertical"  :min="0" :max="tickLabels.length -1" step="1" tick-size="8" show-ticks="always" :ticks="tickLabels" class="w-25 inverted-slider" v-model="valorSlider"  >
            </v-slider>
          </div>
        </v-card>
      </v-col>
      <v-col cols="7">
        <v-card class="mb-5" color="secondary">
          <v-card-title align="center">Detalhes da Parada</v-card-title>
          <v-card-text>
            Parada atual: {{ tickLabels[valorSlider] || "Não disponível" }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { createClient } from '@supabase/supabase-js';
  import { ref, onMounted } from 'vue';

  //Conectando ao Supabase
  const supabaseUrl = 'https://mbmczdmhmtctlseiorwy.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ibWN6ZG1obXRjdGxzZWlvcnd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3NjIzNDcsImV4cCI6MjA0ODMzODM0N30.fK_ex-JdDqGe7lqwblGC5WTJO4-JwP7mBXnLgXFtepE';
  const supabase = createClient(supabaseUrl, supabaseKey);

  //Variáveis reativas
  const paradas = ref([]);
  const tickLabels = ref([]);
  const valorSlider = ref(0);

  // Função para carregar as paradas do supabase
  const carregarParadas = async () => {
    const { data, error } = await supabase.from("horarios_paradas_01").select("*").order("id");

    if (error) {
      console.error("Erro ao carregar as paradas:", error);
    } else {

      paradas.value = data; // Pega a tabela inteira
      tickLabels.value = data.map((item) => item.parada); // Pega o nome das paradas
      console.log("Tick Labels:", tickLabels.value); // Exibe pra ver se está funcionando direitinho
    }
  };

  // Atualiza o valor do slider com base no horário atual
  const atualizarSlider = () => {
    const agora = new Date();  // Usa o horário atual real
    let indexAtual = -1;
    let horarioMaisProximo = null;

    paradas.value.forEach((parada, index) => {
      for (let i = 1; i <= 12; i++) {
        const horarioStr = parada[`partida_${i}`];
        if (horarioStr) {
          const horario = new Date(`2000-01-01T${horarioStr}`);  // Hora local, sem fuso horário

          if (horario <= agora && (!horarioMaisProximo || horario > horarioMaisProximo)) {
            indexAtual = index;
            horarioMaisProximo = horario;  // Armazena o último horário que passou
          }
        }
      }
    });

    valorSlider.value = indexAtual >= 0 ? indexAtual : 0;
    console.log("Valor do Slider Atualizado:", valorSlider.value);
  };

  let intervaloAtualizacao;

  onMounted(() => {
    carregarParadas();
    atualizarSlider();
    intervaloAtualizacao = setInterval(atualizarSlider, 1000); // Atualiza a cada segundo
  });
</script>

<style scoped>
:deep(.v-slider.v-input--vertical > .v-input__control) {
  min-height: 800px;
}

:deep(.inverted-slider .v-slider__track-container) {
  transform: rotate(180deg);
}

:deep(.inverted-slider .v-slider__thumb-container) {
  transform: rotate(180deg);
}


</style>