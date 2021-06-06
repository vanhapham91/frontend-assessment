<template>
  <div class="card card text-center h-100">
    <div class="card_container h-100 d-flex flex-column justify-content-between">
      <div class="card__content card-body h-100 pb-0">
        <img class="rounded w-100" :src="image"/>
        <p class="card__description card-text mt-3">{{desc}}</p>
      </div>
      <div class="card-footer card__button-wrapper border-0">
        <ButtonLink url="url" label="Read more"/>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonLink from "@/exercise1/components/ButtonLink";
export default {
	name: "Card",
  components: {ButtonLink},
  props: {
    image: String,
    desc: String,
    url: String,
  },
}
</script>
<style scoped>
  .card__button-wrapper {
    border: none;
    background-color: transparent;
  }
</style>
