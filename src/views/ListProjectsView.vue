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
            <template v-for="(value, index) in item.node">
              <v-list-item-content class="py-0" :key="index">
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img :src="value.avatarUrl"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="value.name"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="value.username"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-content>
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
        return items.map((item) => {
          return {
            name: item.name,
            node: item.search.map((value) => {
              return value.node;
            }),
          };
        });
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
