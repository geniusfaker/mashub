<template>
  <q-list>
    <q-item
      clickable
      tag="a"
      :href="Link.url"
      v-for="Link in EssentialLinks"
      :key="Link.title"
    >
      <q-item-section v-if="Link.icon" avatar>
        <q-icon :name="Link.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ Link.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { EssentialLinks } from '../stores/linksStore';
</script>
