<template>
  <main class="algor">
    <section class="left">
      <RouterLink v-for="(item,index) in nav" :key="index" :to="item.route">
        {{item.name}}
      </RouterLink>
    </section>
    <section class="right">
      <RouterView></RouterView>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

interface Navitem {
  name: string,
  route: string
}
type Nav = Navitem[]

const nav: Ref<Nav> = ref([
  {
    name: '回溯算法',
    route: '/algorithm/recall'
  }
])

</script>

<style lang="scss" scoped>
.algor {
  display: flex;
  .left{
    width: 100px;
    height: 100vh;
    padding-top: 15px;
    border-right: 1px solid #d2d2d2;
  }
  .right{
    padding: 15px 15px 0;
    width: calc(100% - 100px);
  }
}
</style>
    
