<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" class="mx-auto">
        <v-data-table
          :items="items"
          item-key="name"
          sort-by="name"
          group-by="name"
          class="elevation-1"
          show-group-by
        >
          <template v-slot:item="{ item }">
            <template v-for="(value, name, index) in item.username">
              <div class="font-weight-bold px-4 py-2" :key="index">
                {{ value }}
              </div>
            </template>
          </template>
        </v-data-table>

        <v-row justify="end" class="px-3 mt-6">
          <v-btn
            @click.prevent="back()"
            class="px-6"
            color="#0FBED7"
            rounded
            outlined
            plain
            large
            type="button"
          >
            back
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ListProjectsView",

  computed: {
    items: {
      get() {
        const items = this.$store.state.form.data;

        var test = items.map((item) => {
          return {
            name: item.name,
            username: item.search.map((user) => {
              return user.node.username;
            }),
          };
        });

        return test;
      },
    },
  },

  methods: {
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>