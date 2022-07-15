<template>
  <div class="hello">
    <h3 v-if="message">{{ message }}</h3>
    <h3 v-else>... Error when trying to get the welcome message</h3>
    <span>
      Learn about
      <a href="https://docs.scaledynamics.com/docs/" target="_blank" rel="noreferrer">
        ScaleDynamics Platform
      </a>
      and
      <a href="https://quasar.dev/" target="_blank" rel="noreferrer"> Vue </a>
    </span>
  </div>
</template>

<script setup>
// init ScaleDynamics Platform


</script>

<style scoped>
.hello {
  flex-direction: column;
  text-align: center;
}
</style>
