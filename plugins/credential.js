export default function ({ $axios }) {
    $axios.setBaseURL('https://api.scripture.api.bible/v1')
    $axios.setHeader('api-key', process.env.JC_CREDENTIAL)
}