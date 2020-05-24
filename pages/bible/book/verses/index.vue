<template>
  <v-container>
    <div class="headline">verses</div>
    <v-card class="my-5" v-for="(verse,index) in verses" :key="index">
      <v-card-text v-html="verse"></v-card-text>
      <!-- {{verse}} -->
    </v-card>
  </v-container>
</template>

<script>
export default {
  /* computed: {
    sortedVerses: function() {
      return this.verses[0];
      let verseArray = this.verses.sort((a, b) => {
        return (
          a
            .split("</span>")[0]
            .split(" ")
            .pop() -
          b
            .split("</span>")[0]
            .split(" ")
            .pop()
        );
      });
      return verseArray;
      //   console.log(this.verses);
    }
  }, */
  asyncData({ store }) {
    let verses = [];
    let verseIds = store.getters.verses;
    verseIds.forEach(async el => {
      let content = await store.dispatch("getVerse", {
        verseId: el.id,
        bibleId: el.bibleId
      });
      verses.push(content);
    });
    return {
      verses
    };
  }
};
</script>

<style>
</style>