import {createRouter, createWebHistory} from 'vue-router'
import AdminPage from "../pages/adminPages/AdminPage.vue";
import LandingPage from '../pages/landingPage/LandingPage.vue';
// TODO someday replace this with an auto generated router
// pain in the butt to batch add new routes
const routes = [

    { path: '/', component: () => import("../pages/landingPage/LandingPage.vue") },
    { path: '/login', component: () => import("../pages/loginPage/Login.vue") },
    { path: '/edit', component: () => import("../pages/editorPage/AddUpdate.vue") },
    { path: '/listing', component: () => import("../pages/listingPage/ListingPage.vue") },
    { path: '/test-user-icon', component: () => import("../pages/testPages/UserIconTestPage.vue") },
    { path: '/test-popup', component: () => import("../pages/testPages/PopupTestPage.vue") },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import("../pages/NotFound.vue") },
    { path: '/view',component: () => import("../pages/viewPage/ViewPageLayout.vue") },
    {
        path: '/admin',
        name:'AdminPage',
        component: () => import("../pages/adminPages/AdminPage.vue/"),
        redirect:'admin/module-list',
        children: [
            {
                path: 'module-create',
                name: 'CreateModule',
                component: () => import("../pages/adminPages/module/CreateModule.vue"),
            },
            {
                path:'module-category-create',
                name: 'CreateModuleCategory',
                component: () => import("../pages/adminPages/module/CreateModuleCategory.vue"),
            },
            {
                path: 'module-list',
                name: 'ListModule',
                component: () => import("../pages/adminPages/module/ListModule.vue"),
            },
            {
                path: 'assignment-create',
                name: 'CreateAssignment',
                component: () => import("../pages/adminPages/assignment/CreateAssignment.vue"),
            },
            {
                path: 'assignment-list',
                name: 'ListAssignment',
                component: () => import("../pages/adminPages/assignment/ListAssignment.vue"),
                children:{
                    path:'show',
                    name:'AssignmentListShow',
                    component: () => import("../pages/adminPages/assignment/list/ListShow.vue"),
                }
            },
            {
                path: 'user-create',
                name: 'CreateUser',
                component: () => import("../pages/adminPages/user/CreateUser.vue"),
            },
            {
                path: 'user-list',
                name: 'ListUser',
                component: () => import("../pages/adminPages/user/ListUser.vue"),
            }
        ]},
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
router.beforeResolve((to, from, next) => {
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [name, value] = cookie.split("=");
    acc[name] = value;
    return acc;
  }, {});

  const jwtToken = cookies.token;

  if (!jwtToken) {
    if (to.path === "/admin") {
      return next("/login");
    }
    return next();
  }

  try {
    const payload = JSON.parse(atob(jwtToken.split(".")[1]));

    if (to.path === "/login") {
      return next("/");
    }

    next();
  } catch (error) {
    console.error("Hibás token:", error);
    return next("/login");
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
