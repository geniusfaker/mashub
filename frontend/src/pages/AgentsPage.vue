<template>
  <div class="q-pa-md">

      <AgentCard />
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import AgentCard from 'components/AgentCard.vue';
import { ref } from 'vue';
const slide = ref(1);
</script>
