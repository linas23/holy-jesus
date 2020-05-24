<template>
  <v-container>
    <div class="display-1 secondary--text text-center">Get started with one of the books</div>
    <v-row>
      <v-col cols="12" md="6" v-for="(bible,index) in bibles" :key="index">
        <v-card height="111" :to="'bible/book/'+bible.id">
          <v-card-title class="title info--text">{{bible.name}}</v-card-title>
          <v-card-subtitle class="warning--text">{{bible.description}}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, actions } from "vuex";
export default {
  computed: {
    ...mapGetters(["bibles"])
  },
  created() {
    this.$store.dispatch("getBibleList");
  }
};
</script>

<style>
</style>