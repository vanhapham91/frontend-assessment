<template>
  <div class="index__banner position-relative">
    <Overlay/>
    <div class="banner__content container position-absolute text-center w-100">
      <span class="banner__title">{{title}}</span>
      <p class="banner__description">{{description}}</p>
    </div>
  </div>
</template>

<script>
import Overlay from '@/components/Overlay';

export default {
  name: "Banner",
  components: {
    Overlay,
  },
  props: {
    title: String,
    description: String,
  },
}
</script>

<style scoped>
  .index__banner {
    background-image: url("http://via.placeholder.com/1920x650");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 600px;
  }

  .banner__content {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: white;
  }

  .banner__title {
    font-size: 4em;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .banner__description {
    font-size: 2.25em;
    margin: 0;
    font-weight: 300;
    letter-spacing: 3px;
  }

  @media (max-width: 600px) {
    .index__banner {
      background-image: url("http://via.placeholder.com/600x600");
      height: 400px;
    }
  }
</style>
