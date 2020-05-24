export const state = () => ({
    bibles: [],
    bibleBooks: [],
    chapters: [],
    verses: [],
})
export const getters = {
    bibles: state => state.bibles,
    bibleBooks: state => state.bibleBooks,
    chapters: state => state.chapters,
    verses: state => state.verses,
}
export const mutations = {
    SET_BIBLES(state, bibles) {
        state.bibles = [...bibles]
    },
    SET_BIBLE_BOOKS(state, books) {
        state.bibleBooks = [...books];
    },
    SET_CHAPTERS(state, chapters) {
        state.chapters = [...chapters]
    },
    SET_VERSES(state, verses) {
        state.verses = [...verses]
    },
    SET_VERSE(state, verse) {
        state.verse = verse;
    },
    CLEAR(state, name) {
        console.log(name)
        state[name] = [];
        console.log(state.name)
    }

}
export const actions = {
    async getBibleList({ commit }) {
        // commit('CLEAR', 'bibles')

        let { data } = await this.$axios.$get('/bibles?language=eng')
        let bibles = data.map(el => {
            let { id, name, description } = el;
            return { id, name, description }
        })
        commit('SET_BIBLES', bibles)
    },
    async getBibleBooks({ commit }, id) {
        // commit('CLEAR', 'bibleBooks')
        let { data } = await this.$axios.$get(`/bibles/${id}/books`)
        commit('SET_BIBLE_BOOKS', data)
    },

    async getChaptersForABible({ commit }, { bibleId, bookId }) {
        // commit('CLEAR', 'chapters')
        let { data } = await this.$axios.$get(`/bibles/${bibleId}/books/${bookId}/chapters`)
        commit('SET_CHAPTERS', data);
        return true;
    },

    async getVersesForAChapter({ commit }, { chapterId, bibleId }) {
        // commit('CLEAR', 'verses')
        let { data } = await this.$axios.$get(`/bibles/${bibleId}/chapters/${chapterId}/verses`)
        commit('SET_VERSES', data);

    },
    async getVerse({ commit }, { verseId, bibleId }) {
        // commit('CLEAR', 'verse')
        let { data } = await this.$axios.$get(`/bibles/${bibleId}/verses/${verseId}`)
        return data.content
    }
}