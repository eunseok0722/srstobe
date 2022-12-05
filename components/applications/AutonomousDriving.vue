<template>
  <div class="appl-contents">
    <div class="content auto-head-content prod-content">
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
              <img :src="autonomousData.img02" alt="">
              <div class="img-tag">
                <p class="tit-l">SDV_diagonal</p>
              </div>
            </div>
          </div>
          <div class="img-box">
            <img :src="autonomousData.img01" alt="">
          </div>
        </article>
      </section>
    </div>
    <div class="content auto-feat-content">
      <section>
        <article class="auto-feat-cont">
          <ul class="feat-list">
            <li class="list-item" v-for="item in autonomousData.feat" :key="item.id">
              <div class="feat-item ty-02" :class="item.class">
                <div class="tit-box">
                  <p class="tit-art-04">{{ item.tit }}</p>
                </div>
                <div class="cont-box">
                  <p class="txt-l" v-html="item.cont">
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </article>
      </section>
    </div>
    <div class="content auto-vehi-content">
      <section>
        <article class="auto-vehi-cont">
          <div class="tit-box">
            <div class="txt-wrap">
              <h4 class="tit-head fw-r">Radar solution for Software  Defined Vehicle</h4>
              <p class="tit-art">Cutting edge Imaging Radar technology realizing
                the sensor fusion architecture
              </p>
            </div>
            <div class="count-wrap">
              <ul class="count-list">
                <li class="list-item">
                  <div class="count-item">
                    <div class="tit-r">radar</div>
                    <div class="num">7</div>
                  </div>
                </li>
                <li class="list-item">
                  <div class="count-item">
                    <div class="tit-r">front</div>
                    <div class="num">1</div>
                  </div>
                </li>
                <li class="list-item">
                  <div class="count-item">
                    <div class="tit-r">corner</div>
                    <div class="num">4</div>
                  </div>
                </li>
                <li class="list-item">
                  <div class="count-item">
                    <div class="tit-r">in cabin</div>
                    <div class="num">2</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="img-box">
            <img :src="autonomousData.img03" alt="">
          </div>
        </article>
      </section>
    </div>
    <div class="content auto-prod-content">
      <section>
        <article class="auto-prod-cont">
          <div class="tit-box">
            <h4 class="tit-head fw-r">Product</h4>
          </div>
          <ul class="prod-list">
            <li class="list-item" v-for="item in autonomousData.prod" :key="item.id">
              <div class="dtl-item">
                <div class="img-box">
                  <img :src="item.path" :alt="item.desc">
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
    },
    autonomousData() {
      return this.$store.getters["PostData"].autonomousData;
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