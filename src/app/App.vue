<template>
  <v-layout>
    <v-main class="main-container">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss">
  .main-container {
    position: relative;
    height: 100vh;
    width: 100vh;
  }
</style>
