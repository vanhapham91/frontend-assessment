<template>
	<div class="card-list d-flex flex-wrap">
    <template v-for="item in data">
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4" :key="item.id">
        <Card :image="item.image" :desc="item.description" :url="item.url" />
      </div>
    </template>
	</div>
</template>
<script>
import Card from "@/exercise1/components/Card";

export default {
  name: "CardList",
  components: {
    Card
  },
  props: {
    data: Array,
  }
}
</script>
