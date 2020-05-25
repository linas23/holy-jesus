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
      console.log(content);
      let doc = new DOMParser().parseFromString(content, "text/html").body
        .childNodes[0];
      let node = doc.querySelector("span .v");

      if (node) {
        let index = node.dataset.number;
        let newContent = {
          id: index,
          content: doc.innerHTML
        };
        // console.log(newContent);
        verses.push(newContent);
      } else {
        verses.push(content);
      }
      verses = verses.sort((a, b) => a.id - b.id);
    });
    return {
      verses
    };
  }
  /* watch: {
    verses: function(value) {
      return value.sort((a, b) => a.id - b.id);
    }
  } */
};
</script>

<style>
</style>