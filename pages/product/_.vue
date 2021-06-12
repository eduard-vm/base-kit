<template>
  <div>
      <h1>Страница товара</h1>
      <pre v-if="product">{{ product }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import { ProductMixin } from '~/lib'

@Component
export default class ProductPage extends mixins(ProductMixin) {
}
</script>
