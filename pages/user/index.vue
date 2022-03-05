<template>
  <div>
    <div><button @click="onClick">FetchAll</button></div>
    <div v-if="users">
      <p v-for="(user, i) in users" :key="i">
        ID:{{ user.id }}、NAME:{{ user.name }}、MailAddress{{ user.mailAddress
        }}<nuxt-link :to="{ name: 'user-detail-id', params: { id: user.id } }"
          >to Detail</nuxt-link
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import userUseCase from '@/application/users';
import { User } from '@/domain/models/users/user';

interface DataType {
  users: User[];
}

export default Vue.extend({
  name: 'UserPage',
  data(): DataType {
    return {
      users: [],
    };
  },
  methods: {
    async onClick(): Promise<void> {
      this.users = await userUseCase.findAll();
    },
  },
});
</script>

<style scoped>
</style>
