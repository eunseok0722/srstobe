<template>
  <!-- header | 머릿말 -->
  <div class="main-header-wrap" @mouseenter="navActivate" @mouseleave="navInactivate" :class="{active: navActive}">
<!--    <div class="gnb-wrap">-->
<!--      <ul class="nav-list">-->
<!--        <li class="list-item">-->
<!--          <h3 class="tit-l">-->
<!--            <button class="nav-item">-->
<!--              AUTOMOTIVE-->
<!--            </button>-->
<!--          </h3>-->
<!--        </li>-->
<!--        <li class="list-item">-->
<!--          <h3 class="tit-l">-->
<!--            <button class="nav-item">-->
<!--              INDUSTRIAL-->
<!--            </button>-->
<!--          </h3>-->
<!--        </li>-->
<!--        <li class="list-item">-->
<!--          <h3 class="tit-l ico-box">-->
<!--            <button class="nav-item">-->
<!--            </button>-->
<!--          </h3>-->
<!--        </li>-->
<!--        <li class="list-item">-->
<!--          <h3 class="tit-l">-->
<!--            <button class="nav-item">-->
<!--              HEALTHCARE-->
<!--            </button>-->
<!--          </h3>-->
<!--        </li>-->
<!--        <li class="list-item">-->
<!--          <h3 class="tit-l">-->
<!--            <button class="nav-item">-->
<!--              SMART PLACES-->
<!--            </button>-->
<!--          </h3>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
    <div class="gnb-sub-wrap">
      <div class="gnb-header">
        <h2 class="tit-l">SMART RADAR SYSTEM'S AI 4D</h2>
        <p class="txt-l">Radar Cornersone to SMART CITY</p>
      </div>
      <div class="d2-list-wrap">
        <ul class="d2-list">
          <!--  d2 | Automotive  -->
          <li class="d2-list-item">
            <div class="d2-item">
              <h3 class="lb-tit-r">Automotive</h3>
              <ul class="d3-list">
                <li class="d3-list-item" @mouseenter="itemActivate(0)" @mouseleave="itemInactivate(0)">
                  <router-link class="lb-txt-r" to="/applications/autonomous-driving">1. Autonomous Driving</router-link>
                </li>
                <li class="d3-list-item" @mouseenter="itemActivate(1)" @mouseleave="itemInactivate(1)">
                  <a class="lb-txt-r" href="#">2. UAM</a>
                </li>
                <li class="d3-list-item" @mouseenter="itemActivate(2)" @mouseleave="itemInactivate(2)">
                  <a class="lb-txt-r" href="#">3. In-Cabin</a>
                </li>
                <li class="d3-list-item" @mouseenter="itemActivate(3)" @mouseleave="itemInactivate(3)">
                  <a class="lb-txt-r" href="#">4. Last Mile Delivery</a>
                </li>
                <li class="d3-list-item" @mouseenter="itemActivate(4)" @mouseleave="itemInactivate(4)">
                  <a class="lb-txt-r" href="#">5. AGV</a>
                </li>
              </ul>
            </div>
          </li>
          <!--  // d2 | Automotive  -->
          <!--  d2 | Industrial  -->
          <li class="d2-list-item">
            <div class="d2-item">
              <h3 class="lb-tit-r">Industrial</h3>
              <ul class="d3-list">
                <li class="d3-list-item" @mouseenter="itemActivate(5)" @mouseleave="itemInactivate(5)">
                  <a  class="lb-txt-r" href="#">6. Construction Vehicle</a>
                </li>
                <li class="d3-list-item" @mouseenter="itemActivate(6)" @mouseleave="itemInactivate(6)">
                  <a class="lb-txt-r" href="#">7. Factory Robotics</a>
                </li>
                <li class="d3-list-item" @mouseenter="itemActivate(7)" @mouseleave="itemInactivate(7)">
                  <a class="lb-txt-r" href="#">8. Level-meter</a>
                </li>
                <li class="d3-list-item" @mouseenter="itemActivate(8)" @mouseleave="itemInactivate(8)">
                  <a class="lb-txt-r" href="#">9. Defense Drone</a>
                </li>
              </ul>
            </div>
          </li>
          <!--  // d2 | Industrial  -->
          <!--  d2 | Healthcare  -->
          <li class="d2-list-item">
            <div class="d2-item">
              <h3 class="lb-tit-r">Healthcare</h3>
              <ul class="d3-list">
                <li class="d3-list-item" @mouseenter="itemActivate(9)" @mouseleave="itemInactivate(9)">
                  <a class="lb-txt-r" href="#">10. Home</a>
                </li>
                <li class="d3-list-item" @mouseenter="itemActivate(10)" @mouseleave="itemInactivate(10)">
                  <a class="lb-txt-r" href="#">11. Hospital/Nursing Home</a>
                </li>
                <li class="d3-list-item" @mouseenter="itemActivate(11)" @mouseleave="itemInactivate(11)">
                  <a class="lb-txt-r" href="#">12. Puile Bathroom</a>
                </li>
              </ul>
            </div>
          </li>
          <!--  // d2 | Healthcare  -->
          <!--  d2 | Smart Places  -->
          <li class="d2-list-item">
            <div class="d2-item">
              <h3 class="lb-tit-r">Smart Places</h3>
              <ul class="d3-list">
                <li class="d3-list-item" @mouseenter="itemActivate(12)" @mouseleave="itemInactivate(12)">
                  <a class="lb-txt-r" href="#">13. Elevator</a>
                </li>
                <li class="d3-list-item" @mouseenter="itemActivate(13)" @mouseleave="itemInactivate(13)">
                  <a class="lb-txt-r" href="#">14. Retailer</a>
                </li>
                <li class="d3-list-item" @mouseenter="itemActivate(14)" @mouseleave="itemInactivate(14)">
                  <a class="lb-txt-r" href="#">15. Office</a>
                </li>
                <li class="d3-list-item" @mouseenter="itemActivate(15)" @mouseleave="itemInactivate(15)">
                  <a class="lb-txt-r" href="#">16. Smart Pole PINNN</a>
                </li>
                <li class="d3-list-item" @mouseenter="itemActivate(16)" @mouseleave="itemInactivate(16)">
                  <a class="lb-txt-r" href="#">17. Security</a>
                </li>
              </ul>
            </div>
          </li>
          <!--  // d2 | Smart Places  -->
          <!--  d2 | Other menu  -->
<!--          <li class="d2-list-item d1-menu">-->
<!--            <div class="d2-item">-->
<!--              <h3 class="lb-tit-r">-->
<!--                <a href="#">PRODUCTS</a>-->
<!--              </h3>-->
<!--              <h3 class="lb-tit-r">-->
<!--                <a href="#">DESIGN</a>-->
<!--              </h3>-->
<!--              <h3 class="lb-tit-r">-->
<!--                <a href="#">About SRS</a>-->
<!--              </h3>-->
<!--            </div>-->
<!--          </li>-->
          <!--  d2 | Other menu  --> 
        </ul>
      </div>
    </div>
  </div>
  <!-- //header | 머릿말 -->
</template>

<script>

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
      return this.$store.getters["ModuleHeader/HeaderData"].navActive
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
    navActivate() {
      this.$store.commit('ModuleHeader/navActivate')
    },
    navInactivate() {
      this.$store.commit('ModuleHeader/navInactivate')
    },
    itemActivate(index) {
      this.$store.commit('ModuleMain/itemActivate', index)
    },
    itemInactivate(index) {
      this.$store.commit('ModuleMain/itemInactivate', index)
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

