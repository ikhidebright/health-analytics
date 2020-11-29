<template>
  <v-dialog v-model="status" hide-overlay persistent width="400">
<<<<<<< HEAD
    <v-card color="primary" dark class="pt-1">
=======
    <v-card color="#613DD0" dark class="pt-1">
>>>>>>> 014e5e7a47558b48815bb3d3dfde94bc86c450ce
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
