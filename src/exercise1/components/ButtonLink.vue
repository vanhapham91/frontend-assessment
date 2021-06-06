<template>
  <a class="btn custom-btn-light font-weight-bolder text-uppercase rounded-pill py-2 px-3" :href="url">{{ label }}</a>
</template>

<script>
export default {
  name: "ButtonLink",
  props: {
    label: String,
    url: String,
  },
}
</script>

<style scoped>
  .custom-btn-light {
    letter-spacing: 3px;
    color: black;
    border: 2px solid black;
    font-size: 0.8em;
    line-height: 1.5em;
  }

  .custom-btn-light:hover {
    outline: none;
    background-color: black;
    color: white;
  }
</style>
