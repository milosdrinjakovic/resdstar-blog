import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _546416cc = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)
const _598f1de6 = () => import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */).then(m => m.default || m)
const _66e5840b = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */).then(m => m.default || m)
const _2c2b5107 = () => import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages_posts_index" */).then(m => m.default || m)
const _067915ba = () => import('..\\pages\\admin\\auth\\index.vue' /* webpackChunkName: "pages_admin_auth_index" */).then(m => m.default || m)
const _18287f04 = () => import('..\\pages\\admin\\new-post\\index.vue' /* webpackChunkName: "pages_admin_new-post_index" */).then(m => m.default || m)
const _3bdbb32f = () => import('..\\pages\\admin\\_postId\\index.vue' /* webpackChunkName: "pages_admin__postId_index" */).then(m => m.default || m)
const _07ecef1a = () => import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages_posts__id_index" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _546416cc,
			name: "index"
		},
		{
			path: "/about",
			component: _598f1de6,
			name: "about"
		},
		{
			path: "/admin",
			component: _66e5840b,
			name: "admin"
		},
		{
			path: "/posts",
			component: _2c2b5107,
			name: "posts"
		},
		{
			path: "/admin/auth",
			component: _067915ba,
			name: "admin-auth"
		},
		{
			path: "/admin/new-post",
			component: _18287f04,
			name: "admin-new-post"
		},
		{
			path: "/admin/:postId",
			component: _3bdbb32f,
			name: "admin-postId"
		},
		{
			path: "/posts/:id",
			component: _07ecef1a,
			name: "posts-id"
		}
    ],
    
    
    fallback: false
  })
}
