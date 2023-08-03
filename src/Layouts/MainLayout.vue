<script setup>
import FooterSection from './Partials/FooterSection.vue';
import NavbarSection from './Partials/NavbarSection.vue';
</script>
<template>
    <NavbarSection />
    <slot />
    <FooterSection />
</template>


<style lang="scss" scoped></style>