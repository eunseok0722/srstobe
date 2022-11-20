<template>
  <section :class="'layout-'+articleData.type">
    <article v-for="list in articleData.data" :key="list.id">
      <div class="img-wrap">
        <router-link :to="list.path">
          <img :src="path + list.src + '.png'" alt="article img">
        </router-link>
      </div>
      <div class="art-tet">
        <div class="tit-box">
          <template v-if="list.subTit">
            <p class="tit-l">{{ list.subTit }}</p>
          </template>
          <template v-else></template>
          <h6 class="tit-art">
            <router-link :to="list.path">
              {{ list.title }}
            </router-link>
          </h6>
        </div>
        <div class="txt-box">
          <p class="txt-l">{{ list.txt }}</p>
        </div>
      </div>
    </article>
    <template v-if="pagination">
      <article class="pagination-wrap">
        <div class="pagination">
          <div class="btn-page prev">
            <a href="#">
              <i class="blind">이전 페이지 이동</i>
            </a>
          </div>
          <ul class="page-list">
            <li class="list-item">
              <div class="page-item">
                <a href="#" class="tit-l">1</a>
              </div>
            </li>
            <li>
              <div class="page-item">
                <a href="#" class="tit-l">2</a>
              </div>
            </li>
            <li>
              <div class="page-item">
                <a href="#" class="tit-l">3</a>
              </div>
            </li>
          </ul>
          <div class="btn-page next">
            <a href="#">
              <i class="blind">다음 페이지 이동</i>
            </a>
          </div>
        </div>
      </article>
    </template>
  </section>
</template>

<script>
export default {
  name: "articleType",
  props: {
    articleData: Object,
    pagination: Boolean,
  },
  computed: {
    path() {
      return this.$store.state.path.img;
    }
  }
}
</script>