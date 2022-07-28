<template>
  <q-list>
    <q-item
      clickable
      tag="a"
      v-for="item in store.MenuLinks"
      :href="item.url"
      :key="item.title"
    >
      <q-item-section v-if="item.icon" avatar>
        <q-icon :name="item.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ item.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" setup>
import { useMenuStore } from 'src/stores/menuStore';

const store = useMenuStore();
</script>
