import ModuleHeader from "./modules/MdHeader.js";
import ModuleMain from "./modules/MdMain.js";
import ModuleArticle from "./modules/MdArticle.js";
import ModulePost from "./modules/MdPost.js";
import ModuleDesign from "./modules/MdDesign.js"



const Store = Vuex.createStore({
    modules: {
        ModuleHeader,
        ModuleMain,
        ModuleArticle,
        ModulePost,
        ModuleDesign,
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
            return state.ModuleHeader;
        },
        MainData: function MainData(state) {
            return state.ModuleMain;
        },
        ArticleData: function ArticleData(state) {
            return state.ModuleArticle;
        },
        PostData: function PostData(state) {
            return state.ModulePost;
        },
        DesData: function DesData(state) {
            return state.ModuleDesign
        }
    },
    mutations: {}
})

export default Store