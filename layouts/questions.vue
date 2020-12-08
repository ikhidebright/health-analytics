<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in navbarItems"
          :key="i"
          :to="item.to"
          @click="routeTo(item.route)"
          active-class="#613DD0"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <div @click="googleTranslate" id="google_translate">
        <div class="language-picker">
          <button><p class="change">Change language</p></button>
        </div>
      </div> -->
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app color="#613DD0">
      <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer" />
      <div @click="googleTranslateElementInit" id="google_translate_element">
        <button><p class="language">Language</p></button>
      </div>
      <div class="nav-container" v-if="!isMobile">
        <v-btn
          v-for="(item, index) in navbarItems"
          :key="index"
          text
          class="white--text text-capitalize"
          nuxt
          :to="item.route"
        >
          <span class="white">
            {{ item.name }}
          </span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main class="pa-0">
      <nuxt />
    </v-main>
  </div>
</template>

<script>
export default {
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
      clipped: false,
      drawer: false,
      miniVariant: false,
      navbarItems: [
        {
          icon: "mdi-apps",
          name: "Home",
          route: "/"
        },
        {
          icon: "mdi-apps",
          name: "Family Planning",
          route: "/questions?q=fp"
        },
        {
          icon: "mdi-apps",
          name: "HIV",
          route: "/questions?q=hiv"
        },
        {
          icon: "mdi-apps",
          name: "Delivery",
          route: "/questions?q=delivery"
        }
      ]
    };
  },
  methods: {
    routeTo(route) {
      this.$router.push(route);
    },
    googleTranslateElementInit() {
      new google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    }
    // googleTranslate() {
    //   new google.translate.TranslateElement(
    //     { pageLanguage: "en" },
    //     "google_translate"
    //   );
    // }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    }
  }
};
</script>

<style lang="scss" scoped>
.change {
  margin-left: 16px;
}
.language {
  color: white;
  margin-top: 2.5vh;
  margin-right: 50px;
  // font-size: 11px;
}
.nav-container {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .white {
    color: white;
  }
}
</style>
