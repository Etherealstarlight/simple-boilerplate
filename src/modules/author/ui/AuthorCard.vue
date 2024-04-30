<template>
  <v-card class="pa-4 d-flex flex-column align-center" variant="outlined">
    <span>About me!</span>
    <span>{{ `Hello, I'm ${name}` }}</span>
  </v-card>
</template>

<script setup>
  import { ref } from 'vue'

  const name = ref('EtherealStarLight')
</script>
