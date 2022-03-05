<template>
  <div>
    <p><nuxt-link to="/user">to User</nuxt-link></p>
    <p><nuxt-link to="/book">to Book</nuxt-link></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
});
</script>

<style scoped>
</style>
