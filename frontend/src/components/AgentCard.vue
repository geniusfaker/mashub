<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      class="my-card"
      v-for="item in store.agents"
      :key="item.artifact_name"
    >
      <img src="{{item.image}}" />

      <q-card-section>
        <div class="text-h6">{{ item.artifact_type }}</div>
        <div class="text-subtitle2">{{ item.source_code_availability }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ item.key_phrase_1 }}
        {{ item.key_phrase_2 }}
        {{ item.key_phrase_3 }}
        {{ item.key_phrase_4 }}
        {{ item.key_phrase_5 }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

import { useAgentStore } from 'src/stores/agentStore';
const store = useAgentStore();

onMounted(() => {
  store.getAllAgents();
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
