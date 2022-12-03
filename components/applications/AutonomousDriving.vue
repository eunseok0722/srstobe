<template>
  <div class="appl-contents">
    <div class="content auto-head-content">
      <div class="content-header" :class="{'header-fix-padding': scrollY}">
        <p class="txt-r">Automotive</p>
        <div class="header-fix-div" :class="{'header-fix': scrollY}">
          <h3 class="tit-cont fw-r">Autonomous Driving</h3>
        </div>
      </div>
      <section>
        <article class="auto-head-cont">
          <div class="tit-box">
            <div class="txt-wrap">
              <h4 class="tit-head fw-r">Radar solution  for Software  Defined Vehicle</h4>
              <p class="tit-art">Cutting edge Imaging Radar technology realizing
                the sensor fusion architecture
              </p>
            </div>
            <div class="img-wrap">
              <img :src="path02" alt="">
              <div class="img-tag">
                <p class="tit-l">SDV_diagonal</p>
              </div>
            </div>
          </div>
          <div class="img-box">
            <img :src="path01" alt="">
          </div>
        </article>
      </section>
    </div>
    <div class="content auto-feat-content">
      <div class="content-header">
        <div class="header-fix-div">
          <h3 class="tit-cont fw-r blind">Autonomous Driving features</h3>
        </div>
      </div>
      <section>
        <article class="auto-feat-cont">
          <ul class="feat-list">
            <li class="list-item ">
              <div class="feat-item ico-01 ty-02">
                <div class="tit-box">
                  <p class="tit-art-04">Customer needs</p>
                </div>
                <div class="cont-box">
                  <p class="txt-l">
                    - fall Detection <br>
                    - Monitor " Risky Mouement" <br>
                    - Multi People Detect <br>
                    - No Privacy Invasion
                  </p>
                </div>
              </div>
            </li>
            <li class="list-item">
              <div class="feat-item ico-02 ty-02">
                <div class="tit-box">
                  <p class="tit-art-04">Customer needs</p>
                </div>
                <div class="cont-box">
                  <p class="txt-l">
                    - fall Detection <br>
                    - Monitor " Risky Mouement" <br>
                    - Multi People Detect <br>
                    - No Privacy Invasion
                  </p>
                </div>
              </div>

            </li>
          </ul>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "AutonomousDriving",
  components: {

  },
  props: {
    id: String
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
    path01() {
      return '../../assets/images/img_appl_auto_001.png'
    },
    path02() {
      return '../../assets/images/img_appl_auto_002.png'
    },
    scrollY() {
      return this.$store.getters["ModuleHeader/ScrollY"]
    },
    productsData() {
      // return this.$store.getters["PostData"].productsData
      let dataBase = this.$store.getters["PostData"].productsData;
      for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].id == this.$route.params.id) {
          return dataBase[i];
        }
      }
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
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>