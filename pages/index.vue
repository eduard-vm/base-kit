<template>
  <div class="container">
    <nuxt-link to="/users">Пользователи</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class HomePage extends Vue {
}
</script>
