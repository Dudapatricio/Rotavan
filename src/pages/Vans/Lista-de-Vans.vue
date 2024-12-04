<template>
  <v-container>
    <v-card class="pa-5 ma-5" flat>
      <v-card-title justify="center" align="center" class="text-h3">LISTA DE VANS</v-card-title>
      <v-row>
        <v-col
        v-for="van in vans"
        :key="van.id"
        class="d-flex child-flex"
        cols="4"
        >
          <v-card>
          <v-btn height="auto" width="400" color="secondary" to="/Vans/01">
            <v-icon class="my-3" size="128" color="primary">mdi-bus</v-icon>
            <!-- <v-divider vertical></v-divider> -->
            <v-card-title class="text-h3">{{ van.nome }}</v-card-title>
            <v-divider class="py-5" vertical></v-divider>
            <v-card-subtitle color="secondary">{{ van.motorista }}</v-card-subtitle>
          </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
  import { createClient } from '@supabase/supabase-js';
  import { ref, onMounted } from 'vue';


  const supabaseUrl = 'https://mbmczdmhmtctlseiorwy.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ibWN6ZG1obXRjdGxzZWlvcnd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3NjIzNDcsImV4cCI6MjA0ODMzODM0N30.fK_ex-JdDqGe7lqwblGC5WTJO4-JwP7mBXnLgXFtepE';
  const supabase = createClient(supabaseUrl, supabaseKey);


  const vans = ref([]);


  const fetchVans = async () => {
    const { data, error } = await supabase.from('vans').select('*');
    if (error) {
      console.error(error);
    } else {
      vans.value = data;
    }
  };

  onMounted(fetchVans);
</script>