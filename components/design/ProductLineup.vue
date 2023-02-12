<template>
  <div class="lineup-contents">
    <div class="content head-content">
      <div class="content-header" :class="{'header-fix-padding': scrollY}">
        <div class="header-fix-div" :class="{'header-fix': scrollY}">
          <h3 class="tit-cont fw-r">Product Lineup</h3>
        </div>
        <div class="main-img-banner">
          <div class="img-wrap">
            <p class="banner-tit">
              Beyond the Vision
            </p>
          </div>
        </div>
      </div>
      <section>
        <div class="lineup-table-wrap">
          <ul class="lineup-table">
            <li class="table-row">
              <ul class="table-column">
                <li class="table-item"></li>
                <li class="table-item">{{ lineupData.prod001.name }}</li>
                <li class="table-item">{{ lineupData.prod002.name }}</li>
                <li class="table-item">{{ lineupData.prod003.name }}</li>
                <li class="table-item">{{ lineupData.prod004.name }}</li>
                <li class="table-item">{{ lineupData.prod005.name }}</li>
                <li class="table-item">{{ lineupData.prod006.name }}</li>
              </ul>
            </li>
            <li class="table-row">
              <ul class="table-column">
                <li class="table-item"></li>
                <li class="table-item">
                  <img :src="lineupData.prod001.img" :alt="lineupData.prod001.name">
                </li>
                <li class="table-item">
                  <img :src="lineupData.prod002.img" :alt="lineupData.prod002.name">
                </li>
                <li class="table-item">
                  <img :src="lineupData.prod003.img" :alt="lineupData.prod003.name">
                </li>
                <li class="table-item">
                  <img :src="lineupData.prod004.img" :alt="lineupData.prod004.name">
                </li>
                <li class="table-item">
                  <img :src="lineupData.prod005.img" :alt="lineupData.prod005.name">
                </li>
                <li class="table-item">
                  <img :src="lineupData.prod006.img" :alt="lineupData.prod006.name">
                </li>
              </ul>
            </li>
            <li class="table-row">
              <ul class="table-column">
                <li class="table-item">Type</li>
                <li class="table-item">{{ lineupData.prod001.type }}</li>
                <li class="table-item">{{ lineupData.prod002.type }}</li>
                <li class="table-item">{{ lineupData.prod003.type }}</li>
                <li class="table-item">{{ lineupData.prod004.type }}</li>
                <li class="table-item">{{ lineupData.prod005.type }}</li>
                <li class="table-item">{{ lineupData.prod006.type }}</li>
              </ul>
            </li>
            <li class="table-row">
              <ul class="table-column">
                <li class="table-item">Frequency</li>
                <li class="table-item">{{ lineupData.prod001.frequency }}</li>
                <li class="table-item">{{ lineupData.prod002.frequency }}</li>
                <li class="table-item">{{ lineupData.prod003.frequency }}</li>
                <li class="table-item">{{ lineupData.prod004.frequency }}</li>
                <li class="table-item">{{ lineupData.prod005.frequency }}</li>
                <li class="table-item">{{ lineupData.prod006.frequency }}</li>
              </ul>
            </li>
            <li class="table-row">
              <ul class="table-column">
                <li class="table-item">Detection range</li>
                <li class="table-item">{{ lineupData.prod001.detection }}</li>
                <li class="table-item">{{ lineupData.prod002.detection }}</li>
                <li class="table-item">{{ lineupData.prod003.detection }}</li>
                <li class="table-item">{{ lineupData.prod004.detection }}</li>
                <li class="table-item">{{ lineupData.prod005.detection }}</li>
                <li class="table-item">{{ lineupData.prod006.detection }}</li>
              </ul>
            </li>
            <li class="table-row">
              <ul class="table-column">
                <li class="table-item">Azimuth Angle FoV</li>
                <li class="table-item" v-html="lineupData.prod001.azimuth"></li>
                <li class="table-item" v-html="lineupData.prod002.azimuth"></li>
                <li class="table-item" v-html="lineupData.prod003.azimuth"></li>
                <li class="table-item" v-html="lineupData.prod004.azimuth"></li>
                <li class="table-item" v-html="lineupData.prod005.azimuth"></li>
                <li class="table-item" v-html="lineupData.prod006.azimuth"></li>
              </ul>
            </li>
            <li class="table-row">
              <ul class="table-column">
                <li class="table-item">Elevation Angle FoV</li>
                <li class="table-item">{{ lineupData.prod001.elevation }}</li>
                <li class="table-item">{{ lineupData.prod002.elevation }}</li>
                <li class="table-item">{{ lineupData.prod003.elevation }}</li>
                <li class="table-item">{{ lineupData.prod004.elevation }}</li>
                <li class="table-item">{{ lineupData.prod005.elevation }}</li>
                <li class="table-item">{{ lineupData.prod006.elevation }}</li>
              </ul>
            </li>
            <li class="table-row">
              <ul class="table-column">
                <li class="table-item">Update Rate</li>
                <li class="table-item">{{ lineupData.prod001.update }}</li>
                <li class="table-item">{{ lineupData.prod002.update }}</li>
                <li class="table-item">{{ lineupData.prod003.update }}</li>
                <li class="table-item">{{ lineupData.prod004.update }}</li>
                <li class="table-item">{{ lineupData.prod005.update }}</li>
                <li class="table-item">{{ lineupData.prod006.update }}</li>
              </ul>
            </li>
            <li class="table-row">
              <ul class="table-column">
                <li class="table-item">Comm. Interface</li>
                <li class="table-item">{{ lineupData.prod001.interface }}</li>
                <li class="table-item">{{ lineupData.prod002.interface }}</li>
                <li class="table-item">{{ lineupData.prod003.interface }}</li>
                <li class="table-item">{{ lineupData.prod004.interface }}</li>
                <li class="table-item">{{ lineupData.prod005.interface }}</li>
                <li class="table-item">{{ lineupData.prod006.interface }}</li>
              </ul>
            </li>
            <li class="table-row">
              <ul class="table-column">
                <li class="table-item">Main Power supply</li>
                <li class="table-item">{{ lineupData.prod001.power }}</li>
                <li class="table-item">{{ lineupData.prod002.power }}</li>
                <li class="table-item">{{ lineupData.prod003.power }}</li>
                <li class="table-item">{{ lineupData.prod004.power }}</li>
                <li class="table-item">{{ lineupData.prod005.power }}</li>
                <li class="table-item">{{ lineupData.prod006.power }}</li>
              </ul>
            </li>
            <li class="table-row">
              <ul class="table-column">
                <li class="table-item">Operating Temperature</li>
                <li class="table-item">{{ lineupData.prod001.temperature }}</li>
                <li class="table-item">{{ lineupData.prod002.temperature }}</li>
                <li class="table-item">{{ lineupData.prod003.temperature }}</li>
                <li class="table-item">{{ lineupData.prod004.temperature }}</li>
                <li class="table-item">{{ lineupData.prod005.temperature }}</li>
                <li class="table-item">{{ lineupData.prod006.temperature }}</li>
              </ul>
            </li>
            <li class="table-row">
              <ul class="table-column">
                <li class="table-item">IP Rating</li>
                <li class="table-item">{{ lineupData.prod001.ip }}</li>
                <li class="table-item">{{ lineupData.prod002.ip }}</li>
                <li class="table-item">{{ lineupData.prod003.ip }}</li>
                <li class="table-item">{{ lineupData.prod004.ip }}</li>
                <li class="table-item">{{ lineupData.prod005.ip }}</li>
                <li class="table-item">{{ lineupData.prod006.ip }}</li>
              </ul>
            </li>
            <li class="table-row">
              <ul class="table-column">
                <li class="table-item">Dimension (mm)</li>
                <li class="table-item">{{ lineupData.prod001.dimension }}</li>
                <li class="table-item">{{ lineupData.prod002.dimension }}</li>
                <li class="table-item">{{ lineupData.prod003.dimension }}</li>
                <li class="table-item">{{ lineupData.prod004.dimension }}</li>
                <li class="table-item">{{ lineupData.prod005.dimension }}</li>
                <li class="table-item">{{ lineupData.prod006.dimension }}</li>
              </ul>
            </li>
            <li class="table-row">
              <ul class="table-column">
                <li class="table-item">Weight (g)</li>
                <li class="table-item">{{ lineupData.prod001.weight }}</li>
                <li class="table-item">{{ lineupData.prod002.weight }}</li>
                <li class="table-item">{{ lineupData.prod003.weight }}</li>
                <li class="table-item">{{ lineupData.prod004.weight }}</li>
                <li class="table-item">{{ lineupData.prod005.weight }}</li>
                <li class="table-item">{{ lineupData.prod006.weight }}</li>
              </ul>
            </li>
          </ul>
        </div>
        <p class="table-caption">
          * Long-Range/Short-Range/Ultra-Short-Range
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductLineup",
  computed: {
    scrollY() {
      return this.$store.getters["ModuleHeader/ScrollY"]
    },
    lineupData() {
      return this.$store.getters["DesData"].lineupData;
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    this.$store.getters["HeaderData"].scrollY = 0;
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style scoped>

</style>