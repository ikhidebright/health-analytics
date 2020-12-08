<template>
  <header class="header">
    <!-- Start Header Navbar-->
    <div
      :class="
        `main-header inner-header header-2 ${sticky ? 'sticky fadeInDown' : ''}`
      "
    >
      <div class="main-menu-wrap">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-3 col-lg-3 col-md-4 col-6">
              <!-- Logo -->
              <div class="logo">
                <nuxt-link to="/">
                  <h2 class="main-logo2" style="color: white;">
                    Qualityofcare
                  </h2>
                  <!-- <img
										class="main-logo2"
										src="/assets/img/logo2.png"
										data-rjs="2"
										alt="jironis"
									/> -->
                  <!-- <img
										class="sticky-logo"
										src="/assets/img/gtech.jpeg"
										data-rjs="2"
										alt="jironis"
									/> -->
                  <h2 class="sticky-logo" style="color: purple;">
                    Qualityofcare
                  </h2>
                </nuxt-link>
              </div>
              <!-- End of Logo -->
            </div>
            <div class="col-xl-6 col-lg-6 col-md-4 col-6 menu-button">
              <div class="menu--inner-area clearfix">
                <div class="menu-wraper">
                  <nav>
                    <!-- Header-menu -->
                    <div class="header-menu dosis">
                      <div id="menu-button" class="">
                        <i class="fa fa-bars"></i>
                      </div>

                      <ul class="main-nav">
                        <li>
                          <a>Thematic Area</a>
                          <ul>
                            <li class="active">
                              <!-- <nuxt-link to="/questions?q=hiv"
                                >Hiv Questions</nuxt-link
                              > -->
                              <nuxt-link :to="$i18n.path('questions?q=hiv')"
                                >Hiv Questions</nuxt-link
                              >
                            </li>
                            <li class="active">
                              <nuxt-link to="/questions?q=fp"
                                >Family Planning</nuxt-link
                              >
                            </li>
                            <li class="active">
                              <nuxt-link to="/questions?q=delivery"
                                >Delivery</nuxt-link
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <!-- End of Header-menu -->
                  </nav>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-5 d-md-block d-none">
              <div class="urgent-call text-right">
                <nuxt-link to="/questions" class="btn">Take Test</nuxt-link>
              </div>
              <div class="Content">
                <div class="container">
                  <h1 class="Content__Title">
                    {{ $t("home.title") }}
                  </h1>
                  <p>{{ $t("home.introduction") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header Navbar-->
  </header>
</template>

<script>
export default {
  name: "NavTwo",
  data() {
    return {
      sticky: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    this.mobileMenu();
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true;
      } else if (window.scrollY < 70) {
        this.sticky = false;
      }
    },

    mobileMenu() {
      //Mobile Menu Toggle
      let mainNavToggler = document.querySelector("#menu-button");
      let mainNav = document.querySelector(".main-nav");

      mainNavToggler.addEventListener("click", function() {
        //mainNavToggler.classList.add('menu-opened');
        mainNav.style.display =
          mainNav.style.display != "block" ? "block" : "none";
      });
    }
  }
};
</script>

<style scoped></style>
