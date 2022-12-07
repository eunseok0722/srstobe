// vue3-sfc-loader 설정

const options = {
    moduleCache: {
        vue: Vue, // scss: source => Object.assign(sass(source), { deps: () => [] }),
    }, async getFile(url) {
        const res = await fetch(url);
        if (!res.ok) throw Object.assign(new Error(res.statusText + ' ' + url), {res});
        return {
            getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
        }
    }, addStyle(textContent) {
        const style = Object.assign(document.createElement('style'), {textContent});
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
    },
}
const {loadModule} = window['vue3-sfc-loader'];

// 컴포넌트 선언
const SrsMain = () => loadModule('../components/main/SrsMain.vue', options),
    AboutMain = () => loadModule('../components/about/AboutMain.vue', options),
    NewsRoomMain = () => loadModule('../components/about/NewsRoomMain.vue', options),
    NewsRoomPost = () => loadModule('../components/about/NewsRoomPost.vue', options),
    AwardsMain = () => loadModule('../components/about/AwardsMain.vue', options),
    ProductsMain = () => loadModule('../components/products/ProductsMain.vue', options),
    ProductArticle = () => loadModule('../components/products/ProductArticle.vue', options),
    ApplicationsMain = () => loadModule('../components/applications/ApplicationsMain.vue', options),
    AutonomousDriving = () => loadModule('../components/applications/AutonomousDriving.vue', options),
    Elevator = () => loadModule('../components/applications/Elevator.vue', options),
    Office = () => loadModule('../components/applications/Office.vue', options),
    SmartPolePinnn = () => loadModule('../components/applications/SmartPolePinnn.vue', options);


const routes = [
    {
        name: 'main-content',
        path: '/',
        component: SrsMain,
    },
    {
        name: 'applications',
        path: '/applications',
        component: ApplicationsMain,
        children: [
            {
                path: 'autonomous-driving',
                name: 'autonomous-driving',
                component: AutonomousDriving,
                // props: route => ({name:String(route.params.id)})
            },
            {
                path: 'elevator',
                name: 'elevator',
                component: Elevator,
                // props: route => ({name:String(route.params.id)})
            },
            {
                path: 'office',
                name: 'office',
                component: Office,
                // props: route => ({name:String(route.params.id)})
            },
            {
                path: 'smart-pole-pinnn',
                name: 'smart-pole-pinnn',
                component: SmartPolePinnn,
                // props: route => ({name:String(route.params.id)})
            },
        ]
    },
    {
        name: 'products',
        path: '/products',
        component: ProductsMain,
        children: [
            {
                path: ':id',
                name: 'productArticle',
                component: ProductArticle,
                props: route => ({name:String(route.params.id)})
            },
        ]
    },
    {
        name: 'about-srs',
        path: '/about',
        component: AboutMain,
        children: [
            {
                path: 'newsroom',
                component: NewsRoomMain,
            },
            {
                path: 'newsroom/:id',
                component: NewsRoomPost,
            },
            {
                path: 'awards',
                component: AwardsMain,
            },
        ]
    }
]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
    scrollBehavior() {
        return {top: 0}
    }
})

export default router