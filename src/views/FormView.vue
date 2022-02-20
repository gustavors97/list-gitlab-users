<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" class="mx-auto">
        <v-form ref="form" class="py-5" v-model="valid" lazy-validation>
          <text-field
            label="Project name"
            :required="true"
            @input="data.name = $event"
          />

          <text-field
            label="Project details (optional)"
            @input="data.details = $event"
          />

          <v-row>
            <v-col cols="6" class="pb-0">
              <date-picker
                label="Project start date (optional)"
                @input="data.startDate = $event"
              />
            </v-col>

            <v-col cols="6" class="pb-0">
              <date-picker
                label="Project end date (optional)"
                @input="data.endDate = $event"
              />
            </v-col>

            <user-field label="Search users" @change="data.search = $event" />

            <v-row justify="end" class="pa-6">
              <v-btn
                @click.prevent="next()"
                class="px-6 mr-5"
                color="#0FBED7"
                rounded
                outlined
                plain
                large
                type="button"
                :disabled="btnLoading"
              >
                next
              </v-btn>

              <v-btn
                class="px-6 white--text"
                color="#0FBED7"
                rounded
                large
                :loading="btnLoading"
                :disabled="btnLoading"
                type="submit"
                @click.prevent="submit"
              >
                submit
              </v-btn>
            </v-row>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DatePicker from "@/components/inputs/DatePicker";
import TextField from "@/components/inputs/TextField";
import UserField from "@/components/inputs/UserField";

export default {
  name: "FormView",

  components: {
    DatePicker,
    TextField,
    UserField,
  },

  data: () => ({
    data: {
      name: null,
      details: null,
      startDate: null,
      endDate: null,
      search: null,
    },
    valid: true,
    btnLoading: false,
  }),

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.btnLoading = true;
        this.$store.commit("setData", this.data);
        this.clearDataValues();
        this.$refs.form.reset();
        this.$refs.form.resetValidation();
        this.btnLoading = false;
        this.next();
      }
    },
    next() {
      this.$router.push("/listProjects");
    },
    clearDataValues() {
      this.data = {
        name: null,
        details: null,
        startDate: null,
        endDate: null,
        search: null,
      };
    },
  },
};
</script>
