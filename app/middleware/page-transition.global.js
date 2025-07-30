export default defineNuxtRouteMiddleware((to, from) => {
    const transition = useState('page-transition', () => ({
        name: 'default',
    }))
    const isSlug = (r) => /^\/articles\/.+/.test(r.path)
    const routes = ['/', '/projects', '/articles']
    const getIndex = (r) => routes.indexOf(r.path)

    if (isSlug(to) && (isSlug(from) || from.path === '/articles')) {
        transition.value = { name: 'article-page', mode: 'out-in' }
    } else if (isSlug(from) && getIndex(to) !== -1) {
        // Moving away from /article/*slug to a main route
        transition.value = { name: 'transition-up', mode: 'out-in' }
    } else if (getIndex(to) !== -1 && getIndex(from) !== -1) {
        const direction = getIndex(to) > getIndex(from) ? 'up' : 'down'
        transition.value = { name: `transition-${direction}`, mode: 'out-in' }
    }
})