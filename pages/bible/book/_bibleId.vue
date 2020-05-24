<template>
  <v-container>
    <div class="headline text-center">
      Available Books for
      <br />
      <span class="secondary--text display-1">{{bookName.name}}</span>
    </div>
    <v-row>
      <v-col cols="12" md="6" v-for="(bible,index) in bibleBooks" :key="index">
        <v-card hover min-height="77" link @click="getChapters(bible)">
          <v-card-title class="info--text">{{bible.name}}</v-card-title>
          <v-card-subtitle class="warning--text">{{bible.nameLong}}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, actions } from "vuex";
export default {
  computed: {
    ...mapGetters(["bibleBooks", "bibles"]),
    bookName: function() {
      return this.bibles.find(el => el.id == this.$route.params.bibleId);
    }
  },
  created() {
    this.$store.dispatch("getBibleBooks", this.$route.params.bibleId);
  },
  methods: {
    async getChapters(book) {
      let bibleId = this.$route.params.bibleId;
      let bookId = book.id;
      await this.$store.dispatch("getChaptersForABible", {
        bookId,
        bibleId
      });
      this.$router.push(`/bible/book/chapter`);
    }
  }
};
</script>

<style>
</style>