<template>
  <div class="content award-head-content head-content" :class="{'header-fix-padding': scrollY}">
    <!--  Content header | 제목  -->
    <div class="content-header" :class="{'header-fix': scrollY}">
      <h3 class="tit-cont">Awards & Patents</h3>
    </div>
    <!--  Content header | 제목  -->
    <!--  Content body | 본문   -->
    <section>
      <article class="art-txt">
        <p class="tit-head">
          Sensors are key to the next-generation
          technological disruption for most of
          the major industry.
        </p>
        <div class="txt-box">
          <p class="txt-l">
            Smart Radar System Inc. consists of talented group of engineers,specialists and elites
            who believes in the future technology with devotion and passion for the radar sensor.
          </p>
          <p class="txt-l">
            From long research and development experience on RF antenna design,hardware
            mechanics, radar signal processing, software/algorithms to adoption of data-based
            machine learning & big data integration, Smart Radar System desires to grasp global
            presence to provide technology that can benefit as much industry & market as
            possible to reach global #1 market leader.
          </p>
        </div>
      </article>
      <article class="art-img">
        <div class="img-wrap">
          <img :src="img" alt="">
        </div>
      </article>
    </section>
    <!--   //content body | 본문   -->
  </div>
</template>

<script>
export default {
  name: "AwardHeadCont",
  computed: {
    img() {
      return `../assets/images/img_about_001.png`
    },
    scrollY() {
      return this.$store.getters["ModuleHeader/ScrollY"]
    }
  },
  methods: {
    handleScroll() {
      return this.$store.commit("ModuleHeader/handleScroll");
    }
  },
  // created() {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // beforeUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
}
</script>