<template>
  <div class="inve-contents">
    <div class="content inve-head-content head-content" :class="{'header-fix-padding': scrollY}">
      <!--  Content header | 제목  -->
      <div class="content-header" :class="{'header-fix': scrollY}">
        <h3 class="tit-cont">Investors & Partners</h3>
      </div>
      <!--  Content header | 제목  -->

      <section>
        <ul class="inve-list">
          <li class="list-item" v-for="item in articleData" :key="item">
            <div class="inve-item">
              <img :src="item.img" :alt="item.name">
            </div>
          </li>
        </ul>
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
      return this.$store.getters["ArticleData"].investorsData;
    },
  },
  methods: {
    handleScroll() {
      return this.$store.commit("ModuleHeader/handleScroll");
    }
  },
}
</script>