<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" class="mx-auto">
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
          item-key="name"
          sort-by="name"
          class="elevation-1"
        >
          <template v-slot:item="{ item }">
            <tr>
              <td class="text-left px-4 font-weight-medium">
                {{ item.name }}
              </td>

              <td class="d-flex px-4">
                <template v-for="(value, index) in item.node">
                  <span :key="index" class="d-flex mr-4 my-auto">
                    <v-avatar size="25" class="mr-2 my-auto">
                      <v-img :src="value.avatarUrl"></v-img>
                    </v-avatar>

                    <div>
                      <v-list-item-title
                        v-html="value.name"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="value.username"
                        class="grey--text mt-n2"
                      ></v-list-item-subtitle>
                    </div>
                  </span>
                </template>
              </td>
            </tr>
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

  data() {
    return {
      headers: [
        {
          text: "Project name",
          align: "start",
          filterable: false,
          value: "name",
          width: "150px"
        },
        { text: "Users", value: "users" },
      ],
    };
  },

  methods: {
    back() {
      this.$router.push("/");
    },
  },
};
</script>
