<script setup>
import { h } from 'vue';
import listData from './components/listData.vue'
</script>

<template>
  <main>
    <listData></listData>
  </main>
</template>

<style>


@media (min-width: 1024px) {
  header {
    place-items: center;
  }

/*
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }*/
}
</style>
