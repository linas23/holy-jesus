<template>
  <v-card height="85vh" flat class="d-flex justify-center align-center">
    <v-container>
      <v-card min-height="150" elevation="15">
        <div v-if="!loading">
          <v-card-title class="headline font-weight-black warning--text">{{verse.reference}}</v-card-title>
          <v-card-text class="secondary--text text--darken-3 title" v-html="verse.content"></v-card-text>
        </div>
        <div v-else class="text-center pt-12">
          <progressCircle></progressCircle>
        </div>
      </v-card>
      <div class="d-flex justify-space-between mt-5">
        <v-btn text v-if="verseNumber >= verse.previous.number" @click="getPrevious">
          <v-icon left>mdi-arrow-left-bold</v-icon>Prev
        </v-btn>
        <v-btn text @click="getNext" v-if="verse.next">
          Next
          <v-icon right>mdi-arrow-right-bold</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  head() {
    return {
      title: "Verse - " + this.verse.reference
    };
  },
  data() {
    return {
      verseNumber: 0,
      loading: false
    };
  },
  computed: {
    verse() {
      return this.$store.getters.verse;
    }
  },
  async asyncData({ store }) {
    let verses = store.getters.verses;
    let el = verses[0];
    let verseId = el.id;
    let bibleId = el.bibleId;
    await store.dispatch("getVerse", { verseId, bibleId });
  },
  methods: {
    async getPrevious() {
      this.verseNumber--;
      this.loading = true;
      let el = this.verse;
      let verseId = el.previous.id;
      let bibleId = el.bibleId;
      await this.$store.dispatch("getVerse", { verseId, bibleId });
      this.loading = false;
    },
    async getNext() {
      this.verseNumber++;
      this.loading = true;
      let el = this.verse;
      let verseId = el.next.id;
      let bibleId = el.bibleId;
      await this.$store.dispatch("getVerse", { verseId, bibleId });
      this.loading = false;
    }
  }
};
</script>

<style>
span {
  display: none;
}
</style>