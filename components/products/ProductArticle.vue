<template>
  <div class="prod-contents">
    <div class="prod-bg-wrap">
      <div class="content prod-content" :class="{'header-fix-padding': scrollY}">
        <div class="content-header" :class="{'header-fix': scrollY}">
          <p class="txt-r">image Rader</p>
          <h3 class="tit-cont">RETINA-4F</h3>
        </div>
        <section>
          <article class="prod-head-cont">
            <div class="tit-box">
              <h3 class="tit-head">4D Imaging Radar for Hospitals /
                Elderly Homes</h3>
              <p class="txt-l">This radar can detect human postures: standing, sitting, lying down
                of up to 5 people in 7m x 7m area. There are lots of benefits for
                healthcare workers to getalarmed when fall accidents detected of
                patients or the elderly in remote rooms/bed-sides without violating
                privacy. It also can measure vital signs including breathing and pulse
                at the accuracy level similar to that of an Apple watch
                <br><br>
                Embedded AI(machine learning algorithm) can distinguish people from
                a coolingfan or an air purifier, therefor minimizing false alarms which
                helps users’ concerns and resource management.
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "NewsRoomPost",
  components: {
    // TextArticle,
  },
  props: {
    id: Number
  },
  computed: {
    // postData() {
    //   let dataBase = this.$store.getters["PostData"].newsPost;
    //   for (let i = 0; i < dataBase.length; i++) {
    //     if (dataBase[i].id == this.$route.params.id) {
    //       return dataBase[i];
    //     }
    //   }
    // },
    img() {
      return `../assets/images/temp/img_temp_002.png`
    },
    scrollY() {
      return this.$store.getters["ModuleHeader/ScrollY"]
    },
    // PostData() {
    //   let dataBase = this.$store.getters["PostData"].newsPost;
    //   for (let i = 0; i < dataBase.length; i++) {
    //     if (dataBase[i].id == this.$route.params.id) {
    //       return dataBase[i].postData;
    //     }
    //   }
    // }
  },
  methods: {
    handleScroll() {
      return this.$store.commit("ModuleHeader/handleScroll");
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>