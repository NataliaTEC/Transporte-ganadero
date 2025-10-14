<template>
  <div id="app">
    <Header />
    <main id="main-content">
      <HomeView />
    </main>
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import HomeView from '@/views/HomeView.vue'
</script>