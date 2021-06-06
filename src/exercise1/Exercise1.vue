<template>
	<div class="exercise-1">
    <Banner  title="Hello Developer!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
    <SectionWrapper>
      <CardList :data="posts"/>
    </SectionWrapper>
	</div>
</template>
<script>
import Banner from '@/exercise1/components/Banner';
import CardList from '@/exercise1/components/CardList';
import SectionWrapper from '@/components/SectionWrapper';

export default {
  name: 'Exercise1',
	components: {
    SectionWrapper,
    CardList,
    Banner
  },
  data: () => {
    return {
      posts: [
        {
          id: 1,
          image: "http://via.placeholder.com/400x300",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed elementum. In eu mi bibendum neque egestas congue quisque egestas.",
          url: "#",
        },
        {
          id: 2,
          image: "http://via.placeholder.com/400x300",
          description: "Enim eu turpis egestas pretium aenean pharetra magna. Luctus accumsan tortor posuere ac ut consequat semper.",
          url: "#",
        },
        {
          id: 3,
          image: "http://via.placeholder.com/400x300",
          description: "Volutpat commodo sed egestas egestas fringilla. Enim nec dui nunc mattis enim ut tellus. Nisl purus in mollis nunc sed id. Venenatis cras sed felis eget. Purus sit amet volutpat consequat mauris nunc congue. Dui sapien eget mi proin sed libero enim sed faucibus.",
          url: "#",
        },
      ]
    }
  }
}
</script>
