import ModuleHeader from "./modules/MdHeader.js";
import ModuleMain from "./modules/MdMain.js";

const Store = Vuex.createStore({
    modules: {
        ModuleHeader,
        ModuleMain,

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