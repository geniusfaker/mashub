<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      height="300px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <AgentCard />
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import AgentCard from 'components/AgentCard.vue';
import { ref } from 'vue';
const slide = ref(1);
</script>
