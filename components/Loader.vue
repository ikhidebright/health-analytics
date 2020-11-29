<template>
  <v-dialog v-model="status" hide-overlay persistent width="400">
    <v-card color="primary" dark class="pt-1">
      <v-card-text class="text-center font-weight-medium">
        {{ text }}

        <v-progress-linear indeterminate color="white" class="mb-0" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    text: {
      type: String
    },
    status: {
      type: Boolean
    }
  }
};
</script>
