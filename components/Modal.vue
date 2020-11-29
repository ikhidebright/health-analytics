<template>
  <v-dialog v-model="status" max-width="370" @click:outside="emitClose">
    <v-card>
      <v-card-title class="headline">
        <slot name="title"></slot>
      </v-card-title>

      <v-card-text>
        <slot name="text"></slot>
      </v-card-text>

      <v-card-actions>
        <slot name="actionButtons"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean
    }
  },
  methods: {
    emitClose() {
      this.$emit("close-modal");
    }
  }
};
</script>

<style></style>
