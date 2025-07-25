export default defineNuxtRouteMiddleware((to, from) => {
    const transition = useState('page-transition', () => ({
        name: 'default',
    }))

    const isSlug = (r) => /^\/article\/.+/.test(r.path)

    if (isSlug(to) && isSlug(from)) {
        transition.value = { name: 'article-page', mode: 'out-in' }
    } else {
        transition.value = { name: 'page', mode: 'out-in' }
    }

})