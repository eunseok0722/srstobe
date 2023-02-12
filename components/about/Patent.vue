<template>
  <div class="pate-contents">
    <div class="content pate-head-content head-content" :class="{'header-fix-padding': scrollY}">
      <!--  Content header | 제목  -->
      <div class="content-header" :class="{'header-fix': scrollY}">
        <h3 class="tit-cont">Patent & Certifications</h3>
      </div>
      <!--  Content header | 제목  -->

      <section class="pate-sec">
        <div class="tit-box">
          <h3 class="tit-sec">
            Patent
          </h3>
        </div>
        <div class="pate-box">
          <ul class="pate-list">
            <li class="list-item" v-for="item in articleData.patent" :key="item">
              <div class="pate-item">
                <div class="nation-box">
                  <p class="tit-r" :class="item.class">{{ item.nation }}</p>
                </div>
                <div class="situ-box">
                  <ul class="situ-list">
                    <li class="list-item">
                      <p class="tit-s">In processing</p>
                      <p class="num">{{ item.proc }}</p>
                    </li>
                    <li class="list-item">
                      <p class="tit-s">Granted</p>
                      <p class="num">{{ item.gran }}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="cert-sec">
        <div class="tit-box">
          <h3 class="tit-sec">
            Certifications
          </h3>
        </div>
        <div class="table-box">
          <ul class="table-list">
            <li class="list-item">
              <div class="cert-table-wrap">
                <ul class="cert-table">
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">Certifications</li>
                      <li class="table-item">Reference No.</li>
                      <li class="table-item">Product</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">US FCC</li>
                      <li class="table-item">2AVKZRM68.NTA</li>
                      <li class="table-item">RM68.NTA</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">US FCC</li>
                      <li class="table-item">2AVKZRM68.NTA</li>
                      <li class="table-item">IRISt.03A</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">US FCC</li>
                      <li class="table-item">2AVKZIRISC03A</li>
                      <li class="table-item">IRISc.03A</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">US FCC</li>
                      <li class="table-item">2AVKZRM68.51</li>
                      <li class="table-item">RM68.51W</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">Canada IC</li>
                      <li class="table-item">2690.RM68NTA</li>
                      <li class="table-item">RM68.NTA</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">Canada IC</li>
                      <li class="table-item">26970.IRIST03A</li>
                      <li class="table-item">IRISt.03A</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">Canada IC</li>
                      <li class="table-item">26970. IRISC03A</li>
                      <li class="table-item">IRISc.03A</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li class="list-item">
              <div class="cert-table-wrap">
                <ul class="cert-table">
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">Certifications</li>
                      <li class="table-item">Reference No.</li>
                      <li class="table-item">Product</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">Japan TELEC or MIC</li>
                      <li class="table-item">20.190275</li>
                      <li class="table-item">IRISv.ST01</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">Japan TELEC or MIC</li>
                      <li class="table-item">20.20004</li>
                      <li class="table-item">RM14.S3A</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">Japan TELEC or MIC</li>
                      <li class="table-item">20.200039</li>
                      <li class="table-item">RETINA-4S</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">Japan TELEC or MIC</li>
                      <li class="table-item">20.200137</li>
                      <li class="table-item">IRISt.03A</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">Japan TELEC or MIC</li>
                      <li class="table-item">20.200186</li>
                      <li class="table-item">IRISc.03A</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">Japan TELEC or MIC</li>
                      <li class="table-item">20.200192</li>
                      <li class="table-item">RETINA-2S</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">Japan TELEC or MIC</li>
                      <li class="table-item">20.200193</li>
                      <li class="table-item">RETINA-4ST</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">Japan TELEC or MIC</li>
                      <li class="table-item">20.200194</li>
                      <li class="table-item">RM68.02</li>
                    </ul>
                  </li>
                  <li class="table-row">
                    <ul class="table-column">
                      <li class="table-item">Japan TELEC or MIC</li>
                      <li class="table-item">20.210004</li>
                      <li class="table-item">RETINA-4F</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Investors",
  computed: {
    scrollY() {
      return this.$store.getters["ModuleHeader/ScrollY"]
    },
    articleData() {
      return this.$store.getters["ArticleData"].patentData;
    },
  },
  methods: {
    handleScroll() {
      return this.$store.commit("ModuleHeader/handleScroll");
    }
  },
}
</script>