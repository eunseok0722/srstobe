import moduleHeader from "./modules/mdHeader.js";

const Store = Vuex.createStore({
    modules: {
        moduleHeader,
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