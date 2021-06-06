<template>
  <div class="overlay w-100 h-100 position-absolute"/>
</template>

<script>
export default {
  name: "Overlay"
}
</script>

<style scoped>
  .overlay {
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 1;
}
</style>
