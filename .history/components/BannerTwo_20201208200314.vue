<template>
  <div class="banner-area-inner">
    <div class="banner-inner-area banner-area1 banner2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <!-- banner text -->
            <div class="banner-text-inner">
              <section>
                <!-- <h1>{{ fullText }}</h1> -->
                <div class="language-picker">
                  <button @click="changeLanguage('en')">EN</button> |
                  <button @click="changeLanguage('fr')">FR</button>
                </div>
              </section>
              <h1>{{ fullText.title }}</h1>
              <p>
                A platform that is meant to give feedback to Hospital managemnet
                when a client visits the hospital
              </p>
              <a href="#" class="btn">Give feedback</a>
              <!-- <a href="#" class="btn">Discover More</a> -->
            </div>
            <!-- banner text -->
          </div>
          <div class="col-lg-5 offset-lg-1 col-md-4 offse-xl-2">
            <div class="banner-shape-wrap">
              <div class="banner-shape-inner">
                <img
                  src="/assets/img/banner/shaps1.png"
                  alt=""
                  class="shape shape1 rotate3d"
                />
                <img
                  src="/assets/img/banner/shaps2.png"
                  alt=""
                  class="shape shape2 rotate2d"
                />
                <img
                  src="/assets/img/banner/shaps3.png"
                  alt=""
                  class="shape shape3 rotate-2d"
                />
                <img
                  src="/assets/img/banner/shaps4.png"
                  alt=""
                  class="shape shape4 rotate3d"
                />
                <img
                  src="/assets/img/banner/shaps5.png"
                  alt=""
                  class="shape shape5 rotate2d"
                />
                <img
                  src="/assets/img/banner/shaps6.png"
                  alt=""
                  class="shape shape6 rotate-2d"
                />
                <img
                  src="/assets/img/banner/shaps7.png"
                  alt=""
                  class="shape shape7 rotate3d"
                />
              </div>
            </div>
            <!-- banner image-->
            <div class="banner-image">
              <img
                style="border-radius: 40px"
                src="https://images.unsplash.com/photo-1538043153213-2a1914e811bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt=""
              />
            </div>
            <!--End of banner image-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerTwo",
  computed: {
    fullText() {
      //   console.log("name", this.$t("article"));
      let data = JSON.stringify(this.$t("article"));
      return JSON.parse(data);
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style scoped></style>
