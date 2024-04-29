<template>
  <v-container class="h-100 w-100 home__container" :style="{ 'background-position': elephantPosition }" fluid>
    <v-row>
      <v-col class="d-flex flex-column align-center">
        <v-card class="pa-4 d-flex flex-column align-center" variant="outlined">
          <span>About me!</span>
          <span>{{ `Hello, I'm ${name}` }}</span>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-btn @click="changeElephantPosition"> Click! </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  const POSITIONS = {
    LEFT: 'left bottom',
    CENTER: 'center bottom',
    RIGHT: 'right bottom',
  }

  const name = ref('EtherealStarLight')
  const elephantPosition = ref(POSITIONS.LEFT)

  const changeElephantPosition = () => {
    const currentPosition = Object.entries(POSITIONS).find((position) => position[1] === elephantPosition.value)
    const nextPosition = Object.keys(POSITIONS).indexOf(currentPosition[0]) + 1

    elephantPosition.value = Object.values(POSITIONS)[nextPosition] || Object.values(POSITIONS)[0]
  }
</script>

<style scoped lang="scss">
  .home__container {
    background-image: url('@/shared/assets/images/elephant.svg');
    background-size: 30%;
    background-repeat: no-repeat;
  }
</style>
