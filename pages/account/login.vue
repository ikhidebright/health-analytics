<template>
  <div>
    <v-row class="ma-0">
      <v-col md="1"> </v-col>
      <v-col cols="12" md="5" class="pa-0">
        <v-card class="pa-5 card-top">
          <v-container>
            <v-form class="pa-0">
              <h2>
                <b>Login to your Admin Account</b>
              </h2>
              <v-row
                justify="center"
                align="center"
                cols="12"
                md="6"
                lg="2"
                no-gutters
              >
                <v-col cols="12" md="12" sm="12" xs="12">
                  <div>
                    <v-text-field label="Email" required></v-text-field>
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                    <v-col cols="12">
                      <p style="float: right; font-size: 14px;">
                        <nuxt-link to="/account/recover_password"
                          >Forgot Password ?</nuxt-link
                        >
                      </p>
                    </v-col>
                  </div>
                </v-col>

                <v-col cols="12" class align="right">
                  <v-btn lg dark align="right" @click="onLogin">login</v-btn>
                  <Loader :text="text" :status="status" />
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="5" class="pa-0 right-top d-none d-sm-none d-md-flex">
        <div class="place-center">
          <h3>Welcome to your Dashboard....</h3>
          <small><em>qualityofcare</em></small>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Loader from "~/components/Loader";
export default {
  layout: "none",
  components: {
    Loader
  },
  data() {
    return {
      text: "",
      status: false,
      show1: false,
      password: "Password",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`
      }
    };
  },

  methods: {
    async onLogin() {
      try {
        this.status = true;
        this.text = "Login........";
        setTimeout(() => {
          this.$router.push("/dashboard");
        }, 2500);
      } catch (error) {
        this.status = false;
        console.log(error);
      }
    }
  }
};
</script>
<style scoped>
@import "../../assets/css/styles.css";
</style>
