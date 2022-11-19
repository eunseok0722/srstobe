// vue3-sfc-loader 설정
const options = {
    moduleCache: {
        vue: Vue,
        // scss: source => Object.assign(sass(source), { deps: () => [] }),
    },
    async getFile(url) {
        const res = await fetch(url);
        if (!res.ok)
            throw Object.assign(new Error(res.statusText + ' ' + url), {res});
        return {
            getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
        }
    },
    addStyle(textContent) {
        const style = Object.assign(document.createElement('style'), {textContent});
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
    },
}
const {loadModule} = window['vue3-sfc-loader'];

// 컴포넌트 선언
const
    SrsMain = () => loadModule('../components/main/SrsMain.vue', options),
    AboutMain = () => loadModule('../components/about/AboutMain.vue', options);

const routes = [
    {
        name: 'main-content',
        path: '/',
        component: SrsMain,
    },
    {
        name: 'about-srs',
        path: '/about',
        component: AboutMain,
    },
]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
    scrollBehavior() {
        return {top: 0}
    }
})

export default router