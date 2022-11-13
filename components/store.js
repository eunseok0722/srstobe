import moduleHeader from "./modules/mdHeader.js";
import moduleFooter from "./modules/mdFooter.js";
import moduleMainPage from "./modules/mdMainPage.js";

const Store = Vuex.createStore({
    modules: {
        moduleHeader,
        moduleFooter,
        moduleMainPage,
    },
    state: {
        count: 0,
        path: {
            img: '../assets/images/',
            components: '../components/'
        },
    },
    getters: {
        HeaderData: function HeaderData(state) {
            return state.HeaderData;
        },
    },
    mutations: {}
})

export default Store