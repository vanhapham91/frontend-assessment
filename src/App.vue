<template>
  <div id="app">
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/navigation';
export default {
  name: 'App',
  components: {
    Navigation
  },
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';
@import '../styles/app.css';
@import '../styles/animations.css';
</style>
