<template>
  <header class="header">
    <div class="container-wide">
      <router-link :to="{ name: 'HomeView' }" class="header__logo"> Products.</router-link>
    </div>
  </header>
  <router-view />
</template>

<script>

export default {
  
};
</script>

<style>
</style>
