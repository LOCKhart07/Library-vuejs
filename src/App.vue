<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <RouterLink class="navbar-brand" :to="{ name: 'BookList' }">BookList</RouterLink>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto"></ul>
      </div>
    </div>
  </nav>

  <div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
