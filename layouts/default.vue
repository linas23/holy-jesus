<template>
  <v-app>
    <v-app-bar app class="accent" elevate-on-scroll hide-on-scroll fixed>
      <v-toolbar-title>
        <v-icon color="error" x-large>mdi-christianity</v-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text v-for="(route,index) in routes" :key="index" :to="route.link">
        <v-icon left>{{route.icon}}</v-icon>
        {{route.title}}
      </v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer app absolute class="font-weight-medium" padless>
      <v-col class="text-center secondary" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Linas 23</strong> —
        <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          title: "Home",
          link: "/",
          icon: "mdi-home"
        },
        {
          title: "Bible",
          link: "/bible",
          icon: "mdi-book"
        }
      ],
      drawer: false
    };
  }
};
</script>

<style>
</style>