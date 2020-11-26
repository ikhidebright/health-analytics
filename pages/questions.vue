<template>
  <div>
    <Questions :questionInfo="feedbackQuestions" :category="category" />
  </div>
</template>

<script>
import Questions from "~/components/Questions/Questions";
import { mapGetters } from "vuex";

export default {
  head: {
    title: "Feedback questions"
  },
  layout: "questions",
  components: {
    Questions
  },
  computed: {
    ...mapGetters(["getHIVQuestions", "getFamilyPlanningQuestions"]),
    feedbackQuestions() {
      if (this.$route.query.q === "hiv") return this.getHIVQuestions;
      if (this.$route.query.q === "fp") return this.getFamilyPlanningQuestions;
    },
    category() {
      if (this.$route.query.q === "hiv") return "HIV";
      if (this.$route.query.q === "fp") return "Family Planning";
    }
  }
};
</script>

<style></style>
