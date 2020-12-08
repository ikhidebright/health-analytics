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
    ...mapGetters([
      "getHIVQuestions",
      "getFamilyPlanningQuestions",
      "getQualityImprovementSystemQuestions"
    ]),
    feedbackQuestions() {
      if (this.$route.query.q === "hiv") return this.getHIVQuestions;
      if (this.$route.query.q === "fp") return this.getFamilyPlanningQuestions;
      if (this.$route.query.q === "delivery")
        return this.getQualityImprovementSystemQuestions;
    },
    category() {
      if (this.$route.query.q === "hiv") return "HIV";
      if (this.$route.query.q === "fp") return "Family Planning";
      if (this.$route.query.q === "delivery")
        return "Quality Improvement System";
    }
  }
};
</script>

<style></style>
