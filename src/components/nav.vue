<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <nav>
    <RouterLink to="/">js 算法</RouterLink>
    <RouterLink to="/about">vue3使用技巧</RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  padding: 15px;
  border-bottom:1px solid #d2d2d2 ;
  a.router-link-exact-active {
    color: var(--color-text);
  }

  a.router-link-exact-active:hover {
    background-color: transparent;
  }

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  a:first-of-type {
    border: 0;
  }
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
