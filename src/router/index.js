
import { createRouter, createWebHistory } from "vue-router"
import TopBar from '@/components/TopBar.vue';
import NavBar from '@/components/NavBar.vue';
import splashSc from "../pages/splashSc.vue";

import Teacher from "../pages/Teacher.vue";
import Exams  from "@/pages/Exams.vue";
import Classes from "../pages/Classes.vue"
import ProfilE from "../pages/ProfilE.vue";
import logIn from "../pages/logIn.vue";
import Student from "../pages/Student.vue";



const routes = [
    {
        name: 'topbar',
        path: '/topbar',
        component: TopBar,
    },
    {
        name: 'splash',
        path: '/',
        component: splashSc,
    },
    {
        path: '/NavBar',
        component: NavBar,
    },


    {
        name: 'login',
        path: '/login',
        component: logIn,
    },
    {
        name: 'teacher',
        path: '/teacher',
        component: Teacher,
    },
    {
        name: 'exams',
        path: '/exams',
        component: Exams,
    },
    {
        name: 'student',
        path: '/student',
        component: Student,
    },
    {
        name: 'classes',
        path: '/classes',
        component: Classes,
    },
    {
        name: 'profile',
        path: '/profile',
        component: ProfilE,
    },


]


const router = Router();
router.push('/');
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    // export default router;
    return router;
}