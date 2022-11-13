'use strict';

// vuex 연결
import Store from './store.js'
// vue-router 연결
import Router from './router.js'

// vue3-sfc-loader 설정
const options = {
    moduleCache: {
        vue: Vue,
    },
    async getFile(url) {
        const res = await fetch(url);
        if ( !res.ok )
            throw Object.assign(new Error(res.statusText + ' ' + url), { res });
        return {
            getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
        }
    },
    addStyle(textContent) {
        const style = Object.assign(document.createElement('style'), { textContent });
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
    },
}

const { loadModule } = window['vue3-sfc-loader'];

// 컴포넌트 선언
const MainHeader = Vue.defineAsyncComponent(()=> loadModule('../components/common/MainHeader.vue', options));
const CompHeader =  Vue.defineAsyncComponent(()=> loadModule('../components/common/CompHeader.vue', options));
const CompFooter =  Vue.defineAsyncComponent(()=> loadModule('../components/common/CompFooter.vue', options));

// vue 인스턴스 설정
const app = Vue.createApp({
    components: {
        MainHeader,
        CompHeader,
        CompFooter,
    },
    computed() {
        state: {
            return this.$store.getState()
        }
    },
    created() {
    }
})
/* store, router 사용하기, #app에 마운트하기 */
app.use(Store).use(Router).mount('#app');

