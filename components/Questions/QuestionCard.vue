<template>
  <div>
    <v-row class="ma-0 justify-start">
      <p class="ma-0 font-weight-bold text-h5 pb-2 primary-text">
        {{ heading[question.title] }}
      </p>
    </v-row>

    <v-row class="ma-0 p-margin justify-start">
      <p class="ma-0 font-weight-regular text-h6 pb-2 pr-3">
        {{ question.question }}
      </p>
    </v-row>

    <v-row
      class="ma-0 justify-start pr-4"
      v-if="getQuestionTypes[question.questionType] === 'options'"
    >
      <v-radio-group v-model="question.answer" class="mt-0">
        <v-radio
          color="#613DD0"
          class="font-weight-regular"
          v-for="option in question.options"
          :key="option"
          :value="option"
          :label="option"
        >
        </v-radio>
      </v-radio-group>
    </v-row>

    <v-row
      class="ma-0 justify-start pr-4"
      v-if="getQuestionTypes[question.questionType] === 'agreeRange'"
    >
      <v-radio-group v-model="question.answer" class="mt-0">
        <v-radio
          color="#613DD0"
          class="font-weight-regular"
          v-for="option in agreeRangeOptions"
          :key="option"
          :label="option"
          :value="option"
        ></v-radio>
      </v-radio-group>
    </v-row>

    <v-row
      class="ma-0 justify-start"
      v-if="getQuestionTypes[question.questionType] === 'optionsWithSpecify'"
    >
      <div class="pr-4">
        <v-radio-group v-model="question.answer" class="mt-0">
          <v-radio
            color="#613DD0"
            class="font-weight-regular"
            v-for="option in question.options"
            :key="option"
            :label="option"
            :value="option"
          ></v-radio>
        </v-radio-group>

        <v-text-field
          clearable
          color="#613DD0"
          class="pa-0 text-input-width"
          placeholder="Others. Please specify"
          outlined
          dense
          hide-details
          v-model="question.answer"
        ></v-text-field>
      </div>
    </v-row>

    <v-row
      class="ma-0 justify-start"
      v-if="
        getQuestionTypes[question.questionType] === 'checkboxOptionsWithSpecify'
      "
    >
      <div class="pr-4">
        <v-checkbox
          color="#613DD0"
          class="font-weight-regular pa-0"
          hide-details
          v-for="option in question.options"
          :key="option"
          :label="option"
          :value="option"
          v-model="question.answer"
        ></v-checkbox>
      </div>
    </v-row>

    <v-row
      class="ma-0 justify-start pr-4"
      v-if="getQuestionTypes[question.questionType] === 'optionsAndType'"
    >
      <v-col class="pa-0" cols="12">
        <v-list dense>
          <v-list-item
            v-for="(option, index) in question.options"
            :key="option"
            class="px-0 align-end"
          >
            <p class="ma-0 pr-2">{{ option }}:</p>

            <v-spacer></v-spacer>

            <v-col class="pa-0" cols="4">
              <v-text-field
                clearable
                color="#613DD0"
                class="pa-0 text-input-width"
                placeholder="Enter response"
                dense
                hide-details
                v-model="question.answer[index]"
              ></v-text-field>
            </v-col>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-row
      class="ma-0 justify-start pt-3"
      v-if="getQuestionTypes[question.questionType] === 'type'"
    >
      <div class="pr-4">
        <v-text-field
          clearable
          color="#613DD0"
          placeholder="Enter answer"
          dense
          outlined
          v-model="question.answer"
        ></v-text-field>
      </div>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    question: {
      type: Object,
      required: true
    },
    heading: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      agreeRangeOptions: [
        "Strongly Agree",
        "Agree",
        "Not Sure",
        "Strongly Disagree",
        "Disagree"
      ]
    };
  },
  computed: {
    ...mapGetters(["getQuestionTypes"])
  }
};
</script>

<style lang="scss">
.primary-text {
  color: #613dd0;
}

.p-margin {
  margin-bottom: 0;
}

.flex {
  display: flex;
}
</style>
