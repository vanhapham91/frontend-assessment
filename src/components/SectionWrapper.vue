<template>
  <div class="container section-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SectionWrapper"
}
</script>
<style scoped>
  .container.section-wrapper {
    position: relative;
    margin: 30px auto;
  }

  @media (min-width: 1200px) {
    .container.section-wrapper {
      max-width: 1000px;
    }
  }
</style>
