<template>
  <div>
      <h1>Пользователи</h1>
      <ul>
        <li v-for="user of usersList" :key="user.id">
          <nuxt-link
            class="text-blue-600 hover:text-blue-800"
            :to="`/users/${user.id}`"
          >{{ user.name }}</nuxt-link>
        </li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import { UsersListMixin } from '~/lib'

@Component
export default class ProductPage extends mixins(UsersListMixin) {
}
</script>
