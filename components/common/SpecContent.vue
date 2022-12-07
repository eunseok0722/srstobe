<template>
  <div class="content spec-content">
    <div class="content-header">
      <h4 class="tit-cont fw-r">Product Specifications</h4>
      <p class="tit-r">Parameter / Specifications</p>
    </div>
    <section>
      <article class="prod-spec-cont">
        <ul class="spec-list">
          <li class="list-item" v-for="item in articleData.spec" :key="item.id" :class="item.class">
            <div class="spec-item">
              <div class="tit-box">
                <p class="tit-s">{{ item.tit }}</p>
              </div>
              <div class="spec-box">
                <p class="lb-txt-r">{{item.subCont}}</p>
                <p class="tit-art-03">{{ item.cont}}</p>
                <p v-html="item.subCont02"></p>
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
  name: "SpecContent",
  props: {
    articleData: Object
  }
}
</script>