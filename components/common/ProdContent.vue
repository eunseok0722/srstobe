<template>
  <div class="content prod-content">
    <section>
      <article class="prod-cont">
        <div class="tit-box">
          <h4 class="tit-head fw-r">Product</h4>
        </div>
        <ul class="prod-list":class="articleData.prodType">
          <li class="list-item" v-for="item in articleData.prod" :key="item.id">
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
</template>

<script>
export default {
  name: "ProdContent",
  props: {
    articleData:Object
  },

}
</script>