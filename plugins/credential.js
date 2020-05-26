export default function ({ $axios }) {
    $axios.setBaseURL('https://api.scripture.api.bible/v1')
    $axios.setHeader('api-key', 'b295d1c8ee8ade4b0197cdf3e924b695')
}