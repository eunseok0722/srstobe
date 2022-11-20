const state = ({
    // navMenuItem: [
    //     {id: 1, name: 'Magazine', path: '/magazine'},
    //     {id: 2, name: 'Authors', path: '/authors'},
    //     {id: 3, name: 'Podcast', path: '/podcast'},
    // ],
    // logoImg : { url: 'fyrre_magazine.png' },
    navActive: false,
    scrollY: 0,
    lastScrollY: 0,
    timer: null,
});

const getters = {
    HeaderData: function HeaderData(state) {
        return state
    }
}

const mutations = {
    navActivate(state) {
        state.navActive = true;
    },
    navInactivate(state) {
        state.navActive = false;
    },
    // handleScroll(state) {
    //     if(state.timer === null) {
    //         state.timer = setTimeout(function() {
    //             state.lastScrollY = state.scrollY
    //             state.scrollY = window.scrollY
    //             clearTimeout(state.timer)
    //             state.timer = null
    //         }, 200)
    //     }
    // }
    handleScroll(state) {
        if(state.timer === null) {
            state.timer = setTimeout(function () {
                state.lastScrollY = state.scrollY
                state.scrollY = window.scrollY
                clearTimeout(state.timer)
                state.timer = null
            }, 200)
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}