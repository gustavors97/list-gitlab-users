<template>
  <v-app>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
            alt="io.insure"
            class="shrink my-8"
            contain
            min-width="100"
            :src="require('./assets/logo.svg')"
            transition="scale-transition"
            height="100"
          />
        </v-col>

        <v-col cols="12" lg="6" class="mx-auto">
          <v-card-title class="text-h5 font-weight-bold px-0">
            List GitLab Users
          </v-card-title>

          <v-card-subtitle class="text-left px-0">
            Recruiting process challenge #2. By: Gustavo Rodrigues Silva.
          </v-card-subtitle>
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </v-container>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
