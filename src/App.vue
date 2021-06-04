<template>
  <div id="app">
    <HomePage/>
  </div>
</template>

<script>
import HomePage from './pages/Home'

export default {
  name: 'App',
  components: {
    HomePage,
  }
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';
@import '../styles/app.css';
@import '../styles/animations.css';
</style>
