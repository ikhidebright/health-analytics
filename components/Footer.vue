<template>
  <div>
    <footer class="footer">
      <div class="footerbg">
        <img src="/assets/img/footer-bg.png" alt="" />
      </div>
      <div class="footer-top pt-120 pb-110">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <!-- footer widget -->
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="/">
                    <h2 style="color: black;">
                      Qualityofcare
                    </h2>
                    <!-- <img src="/assets/img/logo.png" alt=""
									/> -->
                  </a>
                </div>
                <p>
                  A platform that is meant to give feedback to Hospital
                  management when a client visits the hospital
                </p>
                <div
                  @click="googleTranslateElementInit"
                  id="google_translate_element"
                  class="d-inline"
                >
                  <button>
                    <p class="red d-inline">Change language</p>
                  </button>
                </div>
                <!-- footer social area -->
                <div class="footer-social-area">
                  <ul class="social-icons social-icons-light nav">
                    <!-- <li>
                      <a href="#" target="_blank"
                        ><i class="fa fa-facebook-f"></i
                      ></a>
                    </li> -->
                    <li>
                      <a
                        href="https://twitter.com/Sulaiman2316059"
                        target="_blank"
                        ><i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/sulaiman-gbadamosi-318a775b/"
                        target="_blank"
                        ><i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <!-- <li>
                      <a href="#" target="_blank"
                        ><i class="fa fa-google-plus"></i
                      ></a>
                    </li> -->
                  </ul>
                </div>
                <!-- End of footer social area -->
              </div>
              <!--End of footer widget -->
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="footer-widget">
                <div class="widget-header">
                  <h5>Our Info</h5>
                </div>
                <div class="widget-body">
                  <ul class="address-list">
                    <li>
                      <span><i class="fa  fa-phone-square"></i></span>
                      <a href="tel:+2348081568665">+2348081568665</a>
                    </li>
                    <li>
                      <span><i class="fa  fa-envelope"></i></span>
                      <a href="mailto:gbadamosi@gtechglobal.org"
                        >gbadamosi@gtechglobal.org</a
                      >
                    </li>
                    <li>
                      <span><i class="fa  fa-envelope"></i></span>
                      <a href="mailto:sulaimangbada@gmail.com"
                        >sulaimangbada@gmail.com</a
                      >
                    </li>
                    <!-- <li>
                      <span><i class="fa  fa-map"></i></span>
                      855 road, Opp Polaris Bank, Lugbe, Abuja
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
            <!-- -->

            <div class="col-lg-4 col-sm-6">
              <div class="footer-widget">
                <div class="widget-body">
                  <div class="twetter-post-inner">
                    <div class="footer-post-details">
                      @Qualityofcare Get accurate health statistics for Nigeria
                      <br /><a href="#">http://yhdj58.tp8/JK</a>
                    </div>

                    <div class="twetter-post">
                      <span><i class="fa fa-twitter"></i></span>
                      Qualityofcare - {{ new Date().getFullYear() }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-text text-center">
          <p>© copyright 2020 Quality of care</p>
        </div>
      </div>
    </footer>

    <!-- back to top -->
    <div @click="scrollTop" :class="`back-to-top ${scrollBtn ? 'show' : ''}`">
      <a href="#"><i class="fa fa-chevron-up"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  head() {
    return {
      script: [
        {
          src:
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        }
      ]
    };
  },
  data() {
    return {
      scrollBtn: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    googleTranslateElementInit() {
      new google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    },
    handleScroll() {
      if (window.scrollY > 70) {
        this.scrollBtn = true;
      } else if (window.scrollY < 70) {
        this.scrollBtn = false;
      }
    },

    scrollTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
.icon {
  font-size: 11px;
}
.red {
  color: red;
  font-weight: bold;
}
</style>
