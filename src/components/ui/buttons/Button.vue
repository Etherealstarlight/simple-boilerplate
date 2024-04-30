<template>
  <v-btn v-bind="$attrs">
    <template v-for="(_, slot) of $slots" :key="slot">
      <slot :name="slot" />
    </template>
  </v-btn>
</template>
