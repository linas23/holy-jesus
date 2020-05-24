<template>
  <v-container>
    <div class="display-1 info--text">
      Chapters of
      <span class="secondary--text">{{chapters[0].reference}}</span>
    </div>
    <v-row justify="center">
      <v-col cols="6" sm="3" v-for="(chapter,index) in chapters" :key="index">
        <v-card
          hover
          height="111"
          class="justify-center d-flex align-center card"
          @click="getVerses(chapter)"
        >
          <v-card-title class="info--text">{{chapter.reference}}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["chapters"])
  },
  methods: {
    async getVerses(chapter) {
      let chapterId = chapter.id,
        bibleId = chapter.bibleId;
      await this.$store.dispatch("getVersesForAChapter", {
        chapterId,
        bibleId
      });
      this.$router.push("/bible/book/verses");
    }
  }
};
</script>

<style lang="scss">
.card {
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    background: red;
    height: 3px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}
</style>