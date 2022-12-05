<template>
  <div class="content award-vision-content">
    <!--  Content header | 제목  -->
    <div class="content-header">
      <h3 class="tit-sec">Smart Radar System Aim to be Global # 1</h3>
    </div>
    <!--  Content header | 제목  -->
    <!--  Content body | 본문   -->
    <section>
      <article class="art-cont">
        <div class="img-wrap">
            <img :src="img01" alt="article img">
        </div>
        <div class="txt-box">
          <p class="txt-l">
            Radar sensors are already used extensively in the field of automotive safety, such as collision avoidance and blind spot detection.
            It is also expected to be used actively in the 360-degree surround scanning of autonomous In recent years, due to the emergence of
            CMOS-based one-chip radar chipsets, which integrate radar RF modules and signal processing modules, implementing low cost small
            radar modules are possible so that the adoption of radar sensors for all types of vehicles including small vehicles is expected to become
            more CMOS-based one-chip radar chipsets are expected to be adopted in the industrial and consumer markets as well.
            Applications include surveillance, people counting, gesture recognition, and material classification.
          </p>
        </div>
      </article>
      <article class="art-cont">
        <div class="img-wrap">
          <img :src="img02" alt="article img">
        </div>
        <div class="txt-box">
          <p class="txt-l">
            Smart Radar System are committed to helping our customers to be able to use radar sensors in these diverse industries and applications.
            To do this, we provide RF antenna design, hardware module production, radar signal processing algorithm, and software API.
            In particular, through the use of radar signal processing and algorithms based on machine learning and deep learning,
            we want to satisfy our customer's detailed requirements in complex environments.
          </p>
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
    img01() {
      return `../assets/images/img_about_002.png`
    },
    img02() {
      return `../assets/images/img_about_003.png`
    },
    lastScrollY() {
      return this.$store.getters["HeaderData"].lastScrollY;
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
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>