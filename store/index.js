export const state = () => ({
    bibles: [],
    bibleBooks: [],
    chapters: [],
    verses: [],
    verse: {}
})
export const getters = {
    bibles: state => state.bibles,
    bibleBooks: state => state.bibleBooks,
    chapters: state => state.chapters,
    verses: state => state.verses,
    verse: state => state.verse
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
    }

}
export const actions = {
    async getBibleList({ commit }) {
        try {
            let { data } = await this.$axios.$get('/bibles?language=eng')
            let bibles = data.map(el => {
                let { id, name, description } = el;
                return { id, name, description }
            })
            commit('SET_BIBLES', bibles)
        } catch (e) {
            throw e
        }
    },
    async getBibleBooks({ commit }, id) {
        try {
            let { data } = await this.$axios.$get(`/bibles/${id}/books`)
            commit('SET_BIBLE_BOOKS', data)
        } catch (e) {
            throw e
        }
    },

    async getChaptersForABible({ commit }, { bibleId, bookId }) {
        try {
            let { data } = await this.$axios.$get(`/bibles/${bibleId}/books/${bookId}/chapters`)
            commit('SET_CHAPTERS', data);
            return true;
        } catch (e) {
            throw e
        }
    },

    async getVersesForAChapter({ commit }, { chapterId, bibleId }) {
        try {
            let { data } = await this.$axios.$get(`/bibles/${bibleId}/chapters/${chapterId}/verses`)
            commit('SET_VERSES', data);
        } catch (e) {
            throw e
        }

    },
    async getVerse({ commit }, { verseId, bibleId }) {
        try {
            let { data } = await this.$axios.$get(`/bibles/${bibleId}/verses/${verseId}`)
            commit('SET_VERSE', data)
        } catch (e) {
            throw e
        }
    }
}