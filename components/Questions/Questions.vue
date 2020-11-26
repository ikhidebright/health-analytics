<template>
  <div>
    <v-row class="ma-0">
      <v-col
        style="padding: 0 !important"
        cols="12"
        sm="6"
        class="d-none d-sm-block pa-0"
      >
        <v-col cols="6" class="half-bg fill-height pa-0">
          <div class="cover">
            <span />
          </div>
        </v-col>
      </v-col>

      <v-col
        class="pa-0 pt-1 pt-sm-5 questions d-sm-flex flex-sm-column justify-sm-center"
        cols="12"
        sm="6"
      >
        <div class="">
          <v-row class="ma-0 justify-start" v-if="showQuestions">
            <p
              class="ma-0 pl-4 p-margin pb-1 pl-sm-0 d-block font-weight-bold primary-text"
            >
              Category: <span class="font-weight-regular">{{ category }}</span>
            </p>
          </v-row>

          <v-row class="ma-0 pl-4 pl-sm-0 justify-start" v-if="showQuestions">
            <p class="ma-0 p-margin pb-0 font-weight-bold primary-text">
              Question:
              <span class="font-weight-regular"
                >{{ questionNumber }}/{{ questions.length }}</span
              >
            </p>
          </v-row>

          <v-row
            class="ma-0 pl-4 pl-sm-0 justify-start pb-2 pb-sm-5"
            v-if="showQuestions"
          >
            <v-col class="pa-0" cols="12">
              <QuestionCard :question="currentQuestion" :heading="heading" />
            </v-col>
          </v-row>

          <!-- Any other comments input -->
          <v-row
            class="ma-0 justify-start pb-2 pb-sm-5"
            v-if="showCommentsForm"
          >
            <v-col class="pa-0 px-4 px-sm-0" cols="12">
              <p class="ma-0 pb-3 font-weight-medium text-h6 primary-text">
                Do you have any other concerns, comments or suggestions? Please
                enter them here.
              </p>

              <v-col class="pa-0" cols="12" sm="8">
                <v-textarea
                  outlined
                  v-model="otherComments"
                  placeholder="Enter comments..."
                  color="#613DD0"
                ></v-textarea>
              </v-col>
            </v-col>
          </v-row>

          <!-- contact form -->
          <v-row class="ma-0 flex-center pb-2 pb-sm-5" v-if="showContactForm">
            <v-col class="pa-0" cols="10" sm="8">
              <p
                class="ma-0 text-center pb-3 font-weight-medium text-h5 primary-text"
              >
                Enter your contact information
              </p>

              <v-form ref="contactForm">
                <v-text-field
                  label="Fullname"
                  color="#613DD0"
                  dense
                  outlined
                  v-model="fullname"
                  :rules="textRules"
                ></v-text-field>

                <v-text-field
                  label="Phone Number"
                  color="#613DD0"
                  dense
                  outlined
                  v-model="phoneNumber"
                  counter="11"
                  :rules="phoneRules"
                ></v-text-field>

                <v-text-field
                  label="Email address"
                  color="#613DD0"
                  dense
                  outlined
                  v-model="email"
                  :rules="emailRules"
                ></v-text-field>

                <v-autocomplete
                  label="State"
                  color="#613DD0"
                  dense
                  outlined
                  v-model="state"
                  :items="states"
                  :rules="textRules"
                >
                </v-autocomplete>

                <v-autocomplete
                  label="Local Government"
                  color="#613DD0"
                  dense
                  outlined
                  v-model="LGA"
                  :rules="textRules"
                  :items="LGAs"
                  item-text="name"
                  item-value="id"
                >
                </v-autocomplete>
              </v-form>
            </v-col>
          </v-row>

          <!-- Buttons -->
          <v-row class="ma-0 flex-space">
            <v-col class="pa-0 d-flex justify-start" cols="5" sm="4">
              <v-btn
                class="text-capitalize"
                color="#613DD0"
                text
                :disabled="questionIndex < 1"
                @click="previousQuestion"
                block
              >
                <v-icon>
                  mdi-arrow-left
                </v-icon>
                Previous
              </v-btn>
            </v-col>

            <v-col class="pa-0 d-flex justify-end" cols="5" sm="4">
              <v-btn
                class="text-capitalize"
                color="#613DD0"
                dark
                @click="submit"
                block
                v-if="showContactForm"
              >
                <v-progress-circular
                  v-if="loadingStatus"
                  indeterminate
                ></v-progress-circular>
                <span v-else>Submit</span>
              </v-btn>

              <v-btn
                block
                class="text-capitalize"
                color="#613DD0"
                dark
                @click="nextQuestion"
                v-else
                >Next
                <v-icon>
                  mdi-arrow-right
                </v-icon></v-btn
              >
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <!-- Notification snackbar -->
    <v-snackbar
      v-model="notificationStatus"
      :timeout="timeout"
      class="text-capitalize py-3"
    >
      <div class="flex-center align-btn">
        <div>
          <v-icon class="mr-2">
            mdi-information-outline
          </v-icon>
          <span v-text="notificationText" />
        </div>

        <v-btn color="pink" text @click="closeNotification">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </v-snackbar>
  </div>
</template>

<script>
import statesList from "~/utils/states";
import QuestionCard from "~/components/Questions/QuestionCard";

export default {
  head: {
    title: "Feedback - Submit feedback"
  },
  props: {
    questionInfo: {
      type: Object,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  components: { QuestionCard },
  data: () => ({
    loadingText: "",
    loadingStatus: false,
    notificationStatus: false,
    notificationText: "Your response was submitted successfully.",
    timeout: 10000,
    modalStatus: false,
    showQuestions: true,
    showCommentsForm: false,
    showContactForm: false,
    questionIndex: 0,
    otherComments: "",
    fullname: "",
    phoneNumber: "",
    email: "",
    state: "FCT",
    value: true,
    LGA: 1,
    textRules: [v => !!v || "Field is required"],
    phoneRules: [
      v => !!v || "Field is required",
      v => v.length === 11 || "Please enter a valid phone number"
    ]
  }),
  computed: {
    questions() {
      return this.questionInfo.questions;
    },
    heading() {
      return this.questionInfo.title;
    },
    emailRules() {
      // validate email input only if it has been filled
      if (Boolean(this.email)) {
        return [
          v =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "E-mail must be valid"
        ];
      }
    },
    questionNumber() {
      return this.questionIndex + 1;
    },
    currentQuestion() {
      return this.questions[this.questionIndex];
    },
    states() {
      return statesList.data.map(state => state.state.name);
    },
    LGAs() {
      const stateLGA = statesList.data.find(
        state => state.state.name === this.state
      );
      return stateLGA.state.locals;
    }
  },
  watch: {
    questions: {
      deep: true,
      handler() {
        localStorage.setItem("surveyQuestions", JSON.stringify(this.questions));
      }
    }
  },
  methods: {
    nextQuestion() {
      if (this.questionIndex + 1 < this.questions.length) {
        this.questionIndex = ++this.questionIndex;
        return;
      }

      if (
        this.showQuestions &&
        this.questionIndex + 1 >= this.questions.length
      ) {
        this.showQuestions = false;
        this.showCommentsForm = true;
        return;
      }

      if (this.showCommentsForm) {
        this.showQuestions = false;
        this.showCommentsForm = false;
        this.showContactForm = true;
        return;
      }
    },
    previousQuestion() {
      if (this.showQuestions && this.questionIndex > 0) {
        this.questionIndex = --this.questionIndex;
        return;
      }

      if (this.showCommentsForm) {
        this.showQuestions = true;
        this.showCommentsForm = false;
        this.showContactForm = false;
        return;
      }

      if (this.showContactForm) {
        this.showQuestions = false;
        this.showCommentsForm = true;
        this.showContactForm = false;
        return;
      }
    },
    closeNotification() {
      this.notificationStatus = false;
    },
    submit() {
      this.loadingText = "Your feedback is being submitted. Please wait...";
      this.loadingStatus = true;

      setTimeout(() => {
        localStorage.removeItem("surveyQuestions");
        this.loadingText = "";
        this.loadingStatus = false;
        this.notificationStatus = true;
      }, 2500);
    }
  }
};
</script>

<style lang="scss">
.half-bg {
  background: url("/regbackground.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  padding: 0;
}

.questions {
  min-height: 90vh;
}

.cover {
  position: relative;
  background: #613dd0;
  opacity: 0.3;
  height: 100%;
  width: 100%;
}

.flex-center {
  display: flex;
  justify-content: center;
}

.flex-space {
  display: flex;
  justify-content: space-around;
}

.align-btn {
  align-items: center;
}

.p-margin {
  margin-bottom: 0;
}
</style>
