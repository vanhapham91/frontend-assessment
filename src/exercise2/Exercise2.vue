<template>
  <div class="exercise-2">
    <SectionWrapper>
      <div class="section__wrapper">
        <template v-for="(section, index) in sections">
          <div class="section__container" :key="index" >
            <button type="button" class="btn btn_section w-100 rounded-0" :class="section.customClass" v-on:click="updateTabIndex(index)">{{ section.title }}</button>
            <div class="container section__content py-3" v-if="currentSectionId === index" v-html="section.content"/>
          </div>
        </template>
      </div>
    </SectionWrapper>
  </div>
</template>

<script>
import SectionWrapper from '@/components/SectionWrapper';
import sectionData from "../../data.json";

export default {
  name: "Exercise2",
  components: {
    SectionWrapper,
  },
  data: () => {
    return {
      sections: [],
      currentSectionId: 0,
    }
  },
  created() {
    this.sections = sectionData;
    this.updateSectionClass();
  },
  methods: {
    updateTabIndex(index) {
      this.currentSectionId = index;
      this.updateSectionClass();
    },
    updateSectionClass() {
      const newSections = this.sections.map((section, index) => {
        const classList = [];
        const customClass = index === this.currentSectionId ? "btn-primary" : "btn-secondary";
        classList.push(customClass);
        section.customClass = classList;
        return section;
      });
      this.sections = newSections;
    }
  },
}
</script>

<style scoped>
  .section__wrapper {
    min-height: 300px;
  }

  .section__content {
    animation-name: collapse;
    transform-origin: top;
    animation-duration: 0.5s;
  }

  @media (min-width: 600px) {
    .section__wrapper {
      display: flex;
    }

    .section__content {
      animation-name: fade;
      position: absolute;
      left: 0;
      transform-origin: center;
    }

    .btn_section {
      border-radius: 5px;
    }
  }
</style>
