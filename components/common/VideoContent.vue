<template>
  <div class="content video-content">
    <div class="content-header">
      <h3 class="tit-cont">{{ articleData.video.tit }}</h3>
    </div>
    <section>
      <div class="img-wrap">
        <iframe :src="articleData.video.src" :title="articleData.video.tit"
                :allow="articleData.video.opt"
                allowfullscreen></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "VideoContent",
  props: {
    articleData: Object
  }
}
</script>