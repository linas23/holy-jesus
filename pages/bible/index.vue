<template>
  <v-container>
    <div class="display-1 secondary--text text-center">Get started with one of the books</div>
    <v-row v-if="bibles">
      <v-col cols="12" md="6" v-for="(bible,index) in bibles" :key="index">
        <v-card
          height="111"
          :to="'bible/book/'+bible.id"
          :data-aos="index % 2 == 0 ? 'slide-left':'slide-right'"
          data-aos-delay="2222"
          easing="ease-in-quart"
        >
          <v-card-title class="title info--text">{{bible.name}}</v-card-title>
          <v-card-subtitle class="warning--text">{{bible.description}}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <div v-else>
      <progress-circle></progress-circle>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, actions } from "vuex";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  computed: {
    ...mapGetters(["bibles"])
  },
  mounted() {
    AOS.init();
  },
  created() {
    this.$store.dispatch("getBibleList").catch(e => {
      this.$router.push("/error");
    });
  }
};
</script>

<style>
</style>