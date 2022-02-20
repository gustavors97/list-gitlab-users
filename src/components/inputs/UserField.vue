<template>
  <v-col cols="12" class="py-0 mb-4">
    <data-source-autocomplete-field
      name="data-source-autocomplete-field"
      :data-source="userDataSource"
      :title="label"
      :value="value"
      multiple
      @change="onChange($event)"
    />
  </v-col>
</template>

<script>
import UserDataSource from "@/api/UserDataSource";
import DataSourceAutocompleteField from "@/components/inputs/DataSourceAutocompleteField";

export default {
  name: "UserField",

  props: {
    label: {
      type: String,
      default: "Select an option",
    },
    value: {
      type: [Object, Array],
      default: null,
    },
  },

  components: {
    DataSourceAutocompleteField,
  },

  data: () => ({
    userDataSource: new UserDataSource(),
  }),

  methods: {
    onChange(value) {
      this.$emit("change", value);
    },
  },
};
</script>
