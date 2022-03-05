<template>
  <div>
    <p>{{ user.id }}</p>
    <p>{{ user.name }}</p>
    <p>{{ user.mailAddress }}</p>
    <div>
      <NuxtLink to="/user">to User</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import userUseCase from '@/application/users';

export default Vue.extend({
  name: 'UserDetail',
  async asyncData({ params }) {
    const user = await userUseCase.find(Number(params.id));
    return { user };
  }
});
</script>
