<script setup>
import MainLayout from '../Layouts/MainLayout.vue';
import { RouterLink } from 'vue-router';
</script>
<template>
  <div>
    <MainLayout>

      <p class="fs-1">test</p>
      <RouterLink to="/about">
      </RouterLink>
      <i class="fa-regular fa-user"></i>
    </MainLayout>
  </div>
</template>


<style lang="scss" scoped></style>
