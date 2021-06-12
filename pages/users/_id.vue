<template>
  <div class="p-8">
      <h1 class="text-2xl font-bold" v-if="user">{{ user.name }}</h1>
      <h2 class="mt-6 text-xl">Статьи</h2>
      <ul>
        <li v-for="post of postsList" :key="post.id">{{ post.title }}</li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, mixins, namespace } from 'nuxt-property-decorator'
import { UserMixin } from '~/lib'
import { IPost, namespace as postNamespace } from '~/store/post'

const PostNamespace = namespace(postNamespace)

@Component
export default class ProductPage extends mixins(UserMixin) {
  @PostNamespace.Action getPostsList!: () => IPost[]
  @PostNamespace.Getter postsList!: IPost[]
}
</script>
