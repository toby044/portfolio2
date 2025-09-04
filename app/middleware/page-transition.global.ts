import type { RouteLocationNormalized } from 'vue-router';

interface PageTransition {
  name: string;
  mode?: string;
}

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const transition = useState<PageTransition>('page-transition', () => ({
    name: 'default',
  }));
  
  const isSlug = (r: RouteLocationNormalized): boolean => /^\/articles\/.+/.test(r.path);
  const routes: string[] = ['/', '/projects', '/articles'];
  const getIndex = (r: RouteLocationNormalized): number => routes.indexOf(r.path);

  if (isSlug(to) && (isSlug(from) || from.path === '/articles')) {
    transition.value = { name: 'article-page', mode: 'out-in' };
  } else if (isSlug(from) && getIndex(to) !== -1) {
    // Moving away from /article/*slug to a main route
    transition.value = { name: 'transition-up', mode: 'out-in' };
  } else if (getIndex(to) !== -1 && getIndex(from) !== -1) {
    const direction: string = getIndex(to) > getIndex(from) ? 'up' : 'down';
    transition.value = { name: `transition-${direction}`, mode: 'out-in' };
  }
});