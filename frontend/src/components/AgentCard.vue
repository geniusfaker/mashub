<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      class="my-card"
      flat
      bordered
      v-for="item in store.agents"
      :key="item._id"
    >
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

      <q-card-section>
        <div class="text-overline text-orange-9">
          {{ item.mas_developed }}
        </div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ item.artifact_name }}</div>
        <div class="text-caption text-grey">
          keywords: {{ item.key_phrase_1 }},{{ item.key_phrase_2 }},{{
            item.key_phrase_3
          }},{{ item.key_phrase_4 }},{{ item.key_phrase_5 }}
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="links" />
        <q-btn flat color="primary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ item.artifact_type }}
          </q-card-section>
          <q-card-section class="text-subitle2">
            {{ item.artifact_type }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useAgentStore } from 'src/stores/agentStore';
const store = useAgentStore();
const expanded = ref(false);
onMounted(() => {
  store.getAllAgents();
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
