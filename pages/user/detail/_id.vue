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
import User from '@/domain/models/users/userResponse';

interface DataType {
  user: User;
}

export default Vue.extend({
  name: 'UserDetail',
  async asyncData({ params }) {
    const user = await userUseCase.find(Number(params.id));
    return { user };
  },
  data(): DataType {
    return {
      // TODO: dataで定義しないとtempleteで型がなくなるのをなんとかしたい
      user: { id: 0, name: '', mailAddress: '' },
    };
  },
});
</script>
