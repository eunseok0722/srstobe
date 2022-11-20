<template>
  <div class="content award-history-content">
    <!--  Content header | 제목  -->
    <div class="content-header">
      <h3 class="tit-cont">Global #1 4D Image Radar</h3>
    </div>
    <!--  Content header | 제목  -->
    <!--  Content body | 본문   -->
    <section>
      <ul class="his-list">
        <li class="list-item">
          <article class="his-item">
            <div class="dia-box">
              <div class="dia-dot"></div>
              <div class="dia-line">
                <span>2020</span>
              </div>
            </div>
            <div class="txt-box">
              <div class="box">
                <p class="tit-art">
                  2Q Series B Fund
                </p>
              </div>
              <div class="box">
                <p class="tit-art">
                  2Q Series B Fund
                </p>
                <p class="txt-l">
                  First Introduction of Sub-1 Degree
                  4D Image Radar RETINA 8H
                </p>
              </div>
            </div>
          </article>
        </li>
        <li class="list-item">
          <article class="his-item">
            <div class="dia-box">
              <div class="dia-dot"></div>
              <div class="dia-line">
                <span>2019</span>
              </div>
            </div>
            <div class="txt-box">
              <div class="box">
                <p class="tit-art">
                  3Q Korean Prime
                  Miniaster's Award in
                  2019
                </p>
                <p class="txt-l">
                  Radio Broadcasting Technology
                  Awards
                </p>
              </div>
              <div class="box">
              <p class="tit-art">
                2Q Series A Fund
              </p>
              </div>
              <div class="box">
                <p class="tit-art">
                  1Q CES 2019
                </p>
                <p class="txt-l">
                  First Introduction of 4D Image
                  Radar RETINA 4S
                </p>
              </div>
            </div>
          </article>
        </li>
        <li class="list-item">
          <article class="his-item">
            <div class="dia-box">
              <div class="dia-dot"></div>
              <div class="dia-line">
                <span>2017</span>
              </div>
            </div>
            <div class="txt-box">
              <div class="box">
                <p class="tit-art">
                  3Q Seeding /Growth Stage
                </p>
              </div>
            </div>
          </article>
        </li>
        <li class="list-item">
          <article class="his-item">
            <div class="dia-box">
              <div class="dia-dot"></div>
              <div class="dia-line">
                <span>2015</span>
              </div>
            </div>
            <div class="txt-box">
              <div class="box">
                <div class="tit-art">
                  4Q Incubation Stage
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </section>
    <!--   //content body | 본문   -->
  </div>
</template>

<script>
export default {
  name: "AwardHeadCont",
  computed: {
    img() {
      return `../assets/images/img_about_001.png`
    }
  },
}
</script>