<template>
  <q-item clickable tag="a" target="_blank" :href="MenuLinkProps.url">
    <q-item-section v-if="MenuLinkProps.icon" avatar>
      <q-icon :name="MenuLinkProps.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ MenuLinkProps.title }}</q-item-label>
      <q-item-label caption>{{ MenuLinkProps.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { MenuLinkProps } from 'stores/menuStore';
</script>
