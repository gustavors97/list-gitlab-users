<template>
  <v-text-field
    v-model="text"
    :label="label"
    :rules="textRules"
    @input="handleInput()"
    required
    outlined
  ></v-text-field>
</template>

<script>
export default {
  name: "TextField",

  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      text: this.value,
      textRules: [
        (v) => (this.required ? !!v || "This field is required" : true),
      ],
    };
  },

  methods: {
    handleInput() {
      this.$emit("input", this.text);
    },
  },
};
</script>
