<template>
  <!-- header | 머릿말 -->
  <div id="header">
    <div class="sub-header" @mouseleave="d2Inactivate" :class="type">
      <!--  gnb | general navigation  -->
      <div class="gnb-wrap">
        <ul class="nav-list">
          <!--  d1 | APPLICATIONS  -->
          <li class="list-item" v-on:mouseenter="d2Activate(0)">
            <h2 class="tit-l">
              <a href="#" class="nav-item">
                APPLICATIONS
              </a>
            </h2>
            <div class="d2-list-wrap v1" :class="{active: d2State[0].active}">

              <div class="d2-section">
                <div class="d2-section-tit">
                  <p class="tit-m">Mobility</p>
                </div>
                <ul class="d2-list">
                  <!--  d2 | Automotive  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <p class="txt-s blind">Mobility</p>
                        <h3 class="tit-m fw-md">AutoMotive</h3>
                      </div>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <router-link to="/applications/autonomous-driving" class="txt-r">
                            Autonomous Driving
                          </router-link>
                        </li>

                        <li class="d3-list-item">
                          <router-link to="/applications/in-cabin" class="txt-r">
                            In-Cabin
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="/applications/agv" class="txt-r">
                            AGV
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="/applications/uam" class="txt-r">
                            UAM
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="/applications/last-mile-delivery" class="txt-r">
                            Last Mile Delivery
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <!--  //d2 | Automotive  -->
                  <!--  d2 | Industrial   -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m fw-md">Industrial</h3>
                      </div>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <router-link to="/applications/construction-vehicle" class="txt-r">
                            Construction Vehicle
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Factory Robotics
                          </a>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Level-meter
                          </a>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Defense Drone
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <!--  //d2 | Industrial   -->
                </ul>
              </div>
              <div class="d2-section">
                <div class="d2-section-tit">
                  <p class="tit-m fw-md">Smartcity</p>
                </div>
                <ul class="d2-list">
                  <!--  d2 | Healthcare   -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <p class="txt-s blind">Smartcity</p>
                        <h3 class="tit-m fw-md">Healthcare</h3>
                      </div>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <router-link to="/applications/home" class="txt-r">
                            Home
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="/applications/hospital-nursing-home" class="txt-r">
                            Hospital/Nursing Home
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="/applications/public-bathroom" class="txt-r">
                            Public Bathroom
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <!--  //d2 | Healthcare   -->
                  <!--  d2 | Smart Places   -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m fw-md">Smart Places</h3>
                      </div>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <router-link to="/applications/elevator" class="txt-r">
                            Elevator
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="/applications/infrastructure" class="txt-r">
                            Infrastructure
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="/applications/public-spaces" class="txt-r">
                            Public Spaces
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="/applications/c-its" class="txt-r">
                            C-ITS
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Security
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <!--  //d2 | Smart Places   -->
                </ul>
              </div>
            </div>
          </li>
          <!--  //d1 | APPLICATIONS  -->

          <!--  d1 | PRODUCTS  -->
          <li class="list-item" v-on:mouseenter="d2Activate(1)">
            <h2 class="tit-l">
              <a href="#" class="nav-item">
                PRODUCTS
              </a>
            </h2>
            <div class="d2-list-wrap v2" :class="{active: d2State[1].active}">

              <div class="d2-section">
                <div class="d2-section-tit">
                  <p class="tit-m">
                    Imaging Radar
                  </p>
                </div>
                <ul class="d2-list">
                  <!--  d2 | RETINA-Next Gen  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m fw-md">RETINA-Next Gen</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/retina-next-gen">
                          <img :src="d2ItemData[1].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | RETINA-Next Gen  -->
                  <!--  d2 | RETINA-4F  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m fw-md">RETINA-4F</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/retina-4f">
                          <img :src="d2ItemData[1].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | RETINA-4F  -->
                  <!--  d2 | RETINA-4S  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m fw-md">RETINA-4S</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/retina-4s">
                          <img :src="d2ItemData[2].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | RETINA-4S  -->
                  <!--  d2 | RADAR-FOR-UAS  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m fw-md">RADAR FOR UAS</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/radar-for-uas">
                          <img :src="d2ItemData[2].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | RADAR-FOR-UAS  -->
                </ul>
              </div>
              <div class="d2-section">
                <div class="d2-section-tit">
                  <p class="tit-m">
                    Single Radar & Module
                  </p>
                </div>
                <ul class="d2-list">
                  <!--  d2 | IRISt  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m fw-md">IRISt</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/irist">
                          <img :src="d2ItemData[4].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | IRISt  -->
                  <!--  d2 | IRISc  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m fw-md">IRISc</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/irisc">
                          <img :src="d2ItemData[5].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | IRISc  -->

                  <!--  d2 | IRIS-SafeGuard   -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m fw-md">IRIS-SafeGuard</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/iris-safeguard">
                          <img :src="d2ItemData[6].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | IRIS-SafeGuard   -->
                  <!--  d2 | RM68-51   -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m fw-md">RM68-51</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/rm68-51">
                          <img :src="d2ItemData[7].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | RM68-51  -->
                </ul>
              </div>


            </div>
          </li>
          <!--  //d1 | PRODUCTS  -->
          <!--  d1 | DESIGN  -->
          <li class="list-item" v-on:mouseenter="d2Activate(2)">
            <h2 class="tit-l">
              <a href="#" class="nav-item">
                DESIGN
              </a>
            </h2>
            <div class="d2-list-wrap v3" :class="{active: d2State[2].active}">
              <ul class="d2-list">
                <!--  d2 | 4D Imaging Radar with AI  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-m fw-md">4D Imaging Radar with AI</h3>
                    </div>
                    <div class="img-box">
                      <a href="#">
                        <img :src="path" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <!--  // d2 | 4D Imaging Radar with AI  -->
                <!--  d2 | Technology Roadmap  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-m fw-md">
                        <router-link to="/design/technology-roadmap">
                          Technology Roadmap
                        </router-link>
                      </h3>
                    </div>
                    <div class="img-box">
                      <router-link to="/design/technology-roadmap">
                        <img :src="path" alt="">
                      </router-link>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Technology Roadmap  -->
                <!--  d2 | SWaP sensor  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-m fw-md">SWaP sensor</h3>
                    </div>
                    <div class="img-box">
                      <a href="#">
                        <img :src="path" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <!--  // d2 | SWaP sensor  -->
                <!--  d2 | Product Lineup  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-m fw-md">
                        <router-link to="/design/product-lineup">Product Lineup</router-link>
                      </h3>
                    </div>
                    <div class="img-box">
                      <router-link to="/design/product-lineup">
                        <img :src="path" alt="">
                      </router-link>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Product Lineup  -->

              </ul>
            </div>
          </li>
          <!--  //d1 | DESIGN  -->
          <!--  d1 | ABOUT SRS  -->
          <li class="list-item" v-on:mouseenter="d2Activate(3)">
            <h2 class="tit-l">
              <router-link to="/about/investors" class="nav-item">
                ABOUT SRS
              </router-link>
            </h2>
            <div class="d2-list-wrap v4" :class="{active: d2State[3].active}">
              <ul class="d2-list">
                <!--  d2 |Investors & Partners  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-m fw-md">
                        <router-link to="/about/investors">Investors & Partners</router-link>
                      </h3>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Investors & Partners  -->
                <!--  d2 | Awards  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-m fw-md">
                        <router-link to="/about/awards">Awards</router-link>
                      </h3>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Awards  -->
                <!--  d2 | Patent & Certifications  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-m fw-md">
                        <router-link to="/about/patent">
                          Patent & Certifications
                        </router-link>
                      </h3>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Patent & Certifications  -->
                <!--  d2 | Team building & Careers  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-m fw-md">
                        <router-link to="/about/team-building">Team building & Careers</router-link>
                      </h3>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Team building & Careers  -->
                <!--  d2 | Contacts  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-m fw-md">
                        <router-link to="/about/contacts">Contacts</router-link>
                      </h3>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Contacts  -->
                <!--  d2 | Newsroom  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-m fw-md">
                        <router-link to="/about/newsroom">
                          Newsroom
                        </router-link>
                      </h3>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Newsroom  -->
              </ul>
            </div>
          </li>
          <!--  //d1 | ABOUT SRS  -->
        </ul>
      </div>
      <!--  gnb | general navigation   -->
      <!--  breadcrumb | breadcrumb navigation  -->
      <template v-if="breadcrumb">
        <comp-breadcrumb></comp-breadcrumb>
      </template>
      <!--  breadcrumb | breadcrumb navigation  -->
    </div>
    <!--  main-header | Depth2 gnb Navigation  -->
    <template v-if="mainHeader">
      <main-header></main-header>
    </template>
    <!--  //main-header | Depth2 gnb Navigation  -->
  </div>
  <!-- //header | 머릿말 -->
</template>

<script>
import CompBreadcrumb from "./CompBreadcrumb.vue";
import MainHeader from "./MainHeader.vue";

export default {
  name: "compHeader",
  props: {
    type: String,
    breadcrumb: Boolean,
    mainHeader: Boolean,
  },
  data() {
    return {
      d2State: [
        {id: 1, active: false},
        {id: 2, active: false},
        {id: 3, active: false},
        {id: 4, active: false},
      ],
      d2ItemData: [
          {id: 1, path: `../assets/images/img_retina_next_gen_002.png` },
          {id: 1, path: `../assets/images/img_retina_4f_002.png` },
          {id: 1, path: `../assets/images/img_retina_4sn_002.png` },
          {id: 1, path: `../assets/images/img_retina_4a_002.png` },
          {id: 1, path: `../assets/images/img_irist_002.png` },
          {id: 1, path: `../assets/images/img_irisc_002.png` },
          {id: 1, path: `../assets/images/img_irism_002.png` },
          {id: 1, path: `../assets/images/img_se68_51w_002.png` },
      ]
    }
  },
  computed: {
    path() {
      return `../assets/images/temp/img_temp_001.png`
    }
    // imgPath() {
    //   return this.$store.state.path.img
    // },

  },
  methods: {
    d2Activate(index) {
      for (let i = 0; i < this.d2State.length; i++) {
        this.d2State[i].active = false
      }
      this.d2State[index].active = true
    },
    d2Inactivate() {
      for (let i = 0; i < this.d2State.length; i++) {
        this.d2State[i].active = false
      }
    }
    // navChange() {
    //   this.$store.commit('moduleHeader/navChange')
    // },
    // handleScroll() {
    //   this.$store.commit('moduleHeader/handleScroll')
    // }
  },
  // created() {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // beforeUnmount() {
  // this.$store.getters["HeaderData"].scrollY = 0;
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
  components: {
    CompBreadcrumb,
    MainHeader,
  }
}
</script>

