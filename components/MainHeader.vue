<template>
  <!-- header | 머릿말 -->
  <div id="header" v-on:mouseenter="navChange" v-on:mouseleave="navChange"  :class="{active: navActive}">
    <div class="gnb-wrap">
      <ul class="nav-list">
        <li class="list-item">
          <h3 class="tit-h1">
            <button class="nav-item">
              AUTOMOTIVE
            </button>
          </h3>
        </li>
        <li class="list-item">
          <h3 class="tit-h1">
            <button class="nav-item">
              INDUSTRIAL
            </button>
          </h3>
        </li>
        <li class="list-item">
          <h3 class="tit-h1 ico-box">
            <button class="nav-item">
            </button>
          </h3>
        </li>
        <li class="list-item">
          <h3 class="tit-h1">
            <button class="nav-item">
              HEALTHCARE
            </button>
          </h3>
        </li>
        <li class="list-item">
          <h3 class="tit-h1">
            <button class="nav-item">
              SMART PLACES
            </button>
          </h3>
        </li>
      </ul>
    </div>
    <div class="gnb-sub-wrap">
      <div class="gnb-header">
        <p class="txt-l"><span class="">SMART RADAR SYSTEM'S AI 4D</span> X Radar Cornersone to SMART CITY</p>
      </div>
      <div class="gnb-sub-list-wrap">
        <ul class="gnb-d2-list">
          <!--  d2 | Automotive  -->
          <li class="d2-list-item">
            <div class="gnb-d2-item">
              <h3 class="lb-tit-r">Automotive</h3>
              <ul class="d3-list">
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">1. Autonomous Driving</a>
                </li>
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">2. UAM</a>
                </li>
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">3. In-Cabin</a>
                </li>
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">4. Last Mile Delivery</a>
                </li>
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">5. AGV</a>
                </li>
              </ul>
            </div>
          </li>
          <!--  // d2 | Automotive  -->
          <!--  d2 | Industrial  -->
          <li class="d2-list-item">
            <div class="gnb-d2-item">
              <h3 class="lb-tit-r">Industrial</h3>
              <ul class="d3-list">
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">6. Construction Vehicle</a>
                </li>
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">7. Factory Robotics</a>
                </li>
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">8. Level-meter</a>
                </li>
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">9. Defense Drone</a>
                </li>
              </ul>
            </div>
          </li>
          <!--  // d2 | Industrial  -->
          <!--  d2 | Healthcare  -->
          <li class="d2-list-item">
            <div class="gnb-d2-item">
              <h3 class="lb-tit-r">Healthcare</h3>
              <ul class="d3-list">
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">10. Home</a>
                </li>
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">11. Hospital/Nursing Home</a>
                </li>
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">12. Puile Bathroom</a>
                </li>
              </ul>
            </div>
          </li>
          <!--  // d2 | Healthcare  -->
          <!--  d2 | Smart Places  -->
          <li class="d2-list-item">
            <div class="gnb-d2-item">
              <h3 class="lb-tit-r">Smart Places</h3>
              <ul class="d3-list">
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">13. Elevator</a>
                </li>
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">14. Retailer</a>
                </li>
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">15. Office</a>
                </li>
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">16. Smart Pole PINNN</a>
                </li>
                <li class="d3-list-item lb-txt-r">
                  <a href="#none">17. Security</a>
                </li>
              </ul>
            </div>
          </li>
          <!--  // d2 | Smart Places  -->
          <!--  d2 | Other menu  -->
          <li class="d2-list-item d1-menu">
            <div class="gnb-d2-item">
              <h3 class="lb-tit-r">
                <a href="#">PRODUCTS</a>
              </h3>
              <h3 class="lb-tit-r">
                <a href="#">DESIGN</a>
              </h3>
              <h3 class="lb-tit-r">
                <a href="#">About SRS</a>
              </h3>
            </div>
          </li>
          <!--  d2 | Other menu  --> 
        </ul>
      </div>
    </div>
  </div>
  <!-- //header | 머릿말 -->
</template>

<script>
// import NavSnsList from "../components/NavSnsList.vue";

export default {
  name: "compHeader",
  props: [],
  data() {
    return {
      // scrollY: 0,
      // lastScrollY: 0,
      // timer: null,Z
    }
  },
  computed: {
    navActive() {
      return this.$store.state.moduleHeader.navActive
    }
    // imgPath() {
    //   return this.$store.state.path.img
    // },
    // logoImgUrl() {
    //   return this.$store.state.moduleHeader.logoImg.url
    // },
    // navMenuItem() {
    //   return this.$store.state.moduleHeader.navMenuItem
    // },
    // navActive() {
    //   return this.$store.state.moduleHeader.navActive
    // },
    // navSnsItem() {
    //   return this.$store.state.navSnsItem
    // },
    // inactivate() {
    //   return this.$store.state.moduleHeader.scrollY >= 150 && this.$store.state.moduleHeader.lastScrollY < this.$store.state.moduleHeader.scrollY
    // }

  },
  methods: {
    navChange() {
      this.$store.commit('moduleHeader/navChange')
    },
    // handleScroll() {
    //   this.$store.commit('moduleHeader/handleScroll')
    // }
  },
  // created() {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
  components: {
    // 'nav-sns-list': NavSnsList,
  }
}
</script>

