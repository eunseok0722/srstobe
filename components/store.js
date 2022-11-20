import ModuleHeader from "./modules/MdHeader.js";
import ModuleMain from "./modules/MdMain.js";
import ModuleArticle from "./modules/MdArticle.js";
import ModulePost from "./modules/MdPost.js";



const Store = Vuex.createStore({
    modules: {
        ModuleHeader,
        ModuleMain,
        ModuleArticle,
        ModulePost,
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
        }
    },
    mutations: {}
})

export default Store