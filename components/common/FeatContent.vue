<template>
  <div class="content feat-content">
    <section>
      <article class="feat-cont">
        <ul class="feat-list">
          <li class="list-item" v-for="item in articleData.feat" :key="item.id">
            <div class="feat-item ty02" :class="item.class">
              <div class="tit-box">
                <p class="tit-art-04">{{ item.tit }}</p>
              </div>
              <div class="cont-box">
                <p class="lb-tit-r" v-html="item.cont">
                </p>
              </div>
            </div>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "FeatContent",
  props: {
    articleData: Object
  }
}
</script>