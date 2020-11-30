<template>
  <v-app light>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed light app>
      <v-row justify="center" class="mt-9">
        <!-- <p class="h d-inline">H</p> -->
        <p class="r d-inline">Qualityofcare</p>
      </v-row>
      <v-row justify="center">
        <v-avatar size="125">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-row>
      <v-row justify="center" class="mb-0 ml-n3">
        <p class="adminName">Super Admin</p>
      </v-row>
      <v-list dense flat>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          color="primary"
          class="mb-3"
        >
          <v-list-item-action>
            <!-- <v-icon>{{ item.icon }}</v-icon> -->
            <v-img
              :src="
                $route.path === item.to ? `${item.iconActive}` : `${item.icon}`
              "
            ></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="font-weight-black" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed light color="#F4F4F4" flat app>
      <v-app-bar-nav-icon
        class="d-block d-sm-none"
        @click.stop="drawer = !drawer"
      />
      <v-text-field
        class="mt-7 rounded-lg ml-2"
        filled
        light
        flat
        dense
        solo
        color="#003187"
        placeholder="Search"
        background-color="white"
        append-icon="mdi-magnify"
      ></v-text-field>
      <v-spacer />
      <v-btn class="mx-7 rounded-lg pa-5" color="white" depressed shaped>
        <v-badge color="#9E5DB8" offset-x="11" dot overlap>
          <v-icon color="#003187">mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>
      <v-btn class="mr-7 rounded-lg pa-5" color="white" depressed shaped>
        <v-icon color="#003187">mdi-image-filter-vintage</v-icon>
      </v-btn>
      <v-avatar size="45">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
      </v-avatar>
    </v-app-bar>
    <v-main>
      <v-container class="main-content">
        <div>
          <popup />
          <nuxt />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: null,
      fixed: false,
      items: [
        {
          iconActive: "/icons/gauge.png",
          icon: "/icons/dashboard.png",
          title: "Dashboard",
          to: "/dashboard"
        },
        {
          iconActive: "/icons/company-ac.png",
          icon: "/icons/companies.png",
          title: "Semantic Area",
          to: "/questions?q=fp"
        },
        {
          icon: "/icons/report.png",
          title: "Feedbacks",
          to: "/inspire"
        },
        // {
        //   icon: "/icons/bell.png",
        //   title: "Notifications",
        //   to: "/inspire"
        // },
        // {
        //   icon: "/icons/help.png",
        //   title: "Help",
        //   to: "/inspire"
        // }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>

<style scoped>
.main-content {
  background-color: #f4f4f4;
  min-height: 89vh;
  max-height: auto;
}

.adminName {
  font: normal normal bold 12px/20px Nunito;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}

.h {
  text-align: left;
  font: normal normal normal 35px/47px Nunito;
  letter-spacing: 0px;
  color: #ffffff;
  text-shadow: 2px 0 0 #9e5db8, -2px 0 0 #9e5db8, 0 2px 0 #9e5db8,
    0 -2px 0 #9e5db8, 1px 1px #9e5db8, -1px -1px 0 #9e5db8, 1px -1px 0 #9e5db8,
    -1px 1px 0 #9e5db8;
  opacity: 1;
}

.r {
  text-align: left;
  font: normal normal bold 35px/47px Nunito;
  letter-spacing: 0px;
  color: #003187;
  opacity: 1;
}

.v-btn {
  width: 36px !important;
  min-width: 36px !important;
}
</style>
