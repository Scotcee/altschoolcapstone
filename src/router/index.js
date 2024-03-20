import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LogIn from '../views/LogIn.vue';
import SignUp from '../views/SignUp.vue';
import NotFound from '../views/Error.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/login',
            component: LogIn,
        },
        {
            path: '/signup',
            component: SignUp
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound
        }
    ]
});

export default router;