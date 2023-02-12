<template>
  <div class="team-contents">
    <div class="content team-head-content head-content" :class="{'header-fix-padding': scrollY}">
      <!--  Content header | 제목  -->
      <div class="content-header" :class="{'header-fix': scrollY}">
        <h3 class="tit-cont">Team building & Careers</h3>
      </div>
      <!--  Content header | 제목  -->
    </div>
    <div class="content team-org-content">
      <div class="content-header">
        <h3 class="tit-sec">
          Global #1 4D Image Radar
        </h3>
      </div>
      <section>
        <div class="img-wrap">
          <img :src="articleData.img" :alt="articleData.title">
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamMain",
  computed: {
    scrollY() {
      return this.$store.getters["ModuleHeader/ScrollY"]
    },
    articleData() {
      return this.$store.getters["ArticleData"].teamCareerData;
    },
  },
  methods: {
    handleScroll() {
      return this.$store.commit("ModuleHeader/handleScroll");
    }
  },
}
</script>