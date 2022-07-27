<template>
  <q-item clickable tag="a" target="_blank" :href="store.url">
    <q-item-section v-if="store.icon" avatar>
      <q-icon :name="store.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ store.title }}</q-item-label>
      <q-item-label caption>{{ store.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import useMenuStore from 'stores/menuStore.ts';
const store = useMenuStore();
</script>
