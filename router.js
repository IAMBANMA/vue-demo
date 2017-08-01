import Vue from 'vue';
import Router from 'vue-router';
import header from './components/header';
import aside from './components/aside';
import content from './components/content';
import c00 from './components/c00';
import c01 from './components/c01';
import c02 from './components/c02';
import c03 from './components/c03';
import c04 from './components/c04';
import c05 from './components/c05';
import c06 from './components/c06';
import c07 from './components/c07';
import c08 from './components/c08';
import c09 from './components/c09';
import c10 from './components/c10';
import c11 from './components/c11';
import c12 from './components/c12';
import c20 from './components/c20';
import c30 from './components/c30';
import c31 from './components/c31';
import c32 from './components/c32';
import c33 from './components/c33';
import c34 from './components/c34';
import c35 from './components/c35';
import c40 from './components/c40';
import c41 from './components/c41';
import c50 from './components/c50';
import c60 from './components/c60';
import c70 from './components/c70';
import home from './components/home';
import child from './components/child';

Vue.use(Router);


export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        components: {
            header: header,
            aside: aside,
            content: content
        },
        children: [{
            path: '',
            component: home
        }, {
            path: 'c00',
            component: c00
        }, {
            path: 'c01',
            component: c01
        }, {
            path: 'c02',
            component: c02
        }, {
            path: 'c03',
            component: c03
        }, {
            path: 'c04',
            component: c04
        }, {
            path: 'c05',
            component: c05
        }, {
            path: 'c06',
            component: c06
        }, {
            path: 'c07',
            component: c07
        }, {
            path: 'c08',
            component: c08
        }, {
            path: 'c09',
            component: c09
        }, {
            path: 'c10',
            component: c10
        }, {
            path: 'c11',
            component: c11
        }, {
            path: 'c12',
            component: c12
        }, {
            path: 'c20',
            component: c20
        }, {
            path: 'c30',
            component: c30
        }, {
            path: 'c31',
            component: c31
        }, {
            path: 'c32',
            component: c32
        }, {
            path: 'c33',
            component: c33
        }, {
            path: 'c34',
            component: c34
        }, {
            path: 'c35',
            component: c35
        }, {
            path: 'c40',
            component: c40
        }, {
            path: 'c41',
            component: c41
        }, {
            path: 'c50',
            component: c50
        }, {
            path: 'c60',
            component: c60
        },{
            path:'c70',
            component:c70
        }]
    }],
    //使用前端路由,当切换到新路由时,想要页面滚动到顶部或者保持原先的滚动位置,都可以通过vue-router做到,而且更好!如下:
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
})
