<template>
  <div class="navigation">
    <router-link to="/" class="navigation__link  btn btn-light">Exercise 1</router-link>
    <router-link to="/exercise2" class="navigation__link btn btn-light">Exercise 2</router-link>
  </div>
</template>

<script>
export default {
name: "navigation"
}
</script>

<style scoped>
  .navigation {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    padding: 1em;
  }

  .navigation__link {
    text-decoration: none;
    color:  black;
    background-color: white;
    margin: 0.25em;
  }

  .navigation__link:hover {
    color:  white;
    background-color: black;
    border-color: black;
  }


</style>
