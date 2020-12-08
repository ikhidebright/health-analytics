export default {
  // mode: "universal",
  ssr: true,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/logo.jpeg" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700"
      },
      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/assets/plugins/mediabox/mediabox.min.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" },
      { rel: "stylesheet", href: "/assets/css/custom.css" }
    ],
    script: [{ src: "/assets/plugins/mediabox/mediabox.min.js", body: true }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#f77ade",
    height: "4px"
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "~/plugins/highcharts.js",
      ssr: true
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false
    }
  }
};
