<template>
  <div class="road-contents">
    <div class="content head-content">
      <div class="content-header" :class="{'header-fix-padding': scrollY}">
        <div class="header-fix-div" :class="{'header-fix': scrollY}">
          <h3 class="tit-cont fw-r">Technology Roadmap</h3>
        </div>
      </div>
      <section class="road-sec">
        <div class="img-wrap">
          <img :src="articleData.img" :alt="articleData.title">
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechnologyRoadmap",
  computed: {
    scrollY() {
      return this.$store.getters["ModuleHeader/ScrollY"]
    },
    articleData() {
      return this.$store.getters["DesData"].roadmapData;
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    this.$store.getters["HeaderData"].scrollY = 0;
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style scoped>

</style>