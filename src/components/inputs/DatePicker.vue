<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="label"
        readonly
        v-bind="attrs"
        v-on="on"
        :required="required"
        outlined
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(date)">
        OK
      </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  name: "DatePicker",

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

  watch: {
    date(newValue) {
      this.$emit('input', newValue);
    }
  },

  data() {
    return {
      date: this.value,
      modal: false,
    };
  },
};
</script>
