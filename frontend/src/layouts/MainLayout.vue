<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
<<<<<<< HEAD
          v-model="menuStore.leftDrawerOpen"
=======
          @click="toggleLeftDrawer"
>>>>>>> restore
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

<<<<<<< HEAD
        <!-- <MenuLink
          v-for="link in menuStore.MenuLinks"
          :key="link.title"
          v-bind="link"
        /> -->
=======
        <EssentialLink />
>>>>>>> restore
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
<<<<<<< HEAD
import { useMenuStore } from 'stores/menuStore';
const menuStore = useMenuStore();
=======
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
>>>>>>> restore
</script>
