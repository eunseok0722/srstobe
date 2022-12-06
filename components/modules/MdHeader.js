const state = ({
    // navMenuItem: [
    //     {id: 1, name: 'Magazine', path: '/magazine'},
    //     {id: 2, name: 'Authors', path: '/authors'},
    //     {id: 3, name: 'Podcast', path: '/podcast'},
    // ],
    // logoImg : { url: 'fyrre_magazine.png' },
    navActive: false,
    windowY: 0,
    scrollY: 0,
    lastScrollY: 0,
    timer: null,
    breadcrumbData: {
        dp01: {
            opt: ['APPLICATIONS', 'PRODUCTS', 'DESIGN', 'ABOUT SRS'],
            dft: 'APPLICATIONS',
        },
        dp02: {
            opt: ['Automotive', 'Industrial', 'Healthcare', 'Smart Places'],
            dft: 'Automotive',
        },
        dp03: {
            opt: ['Autonomous Driving', 'UAM', 'In-Cabin', 'Last Mile Delivery', 'AGV'],
            dft: 'Autonomous Driving',
        }
    }
});

const getters = {
    HeaderData: function HeaderData(state) {
        return state
    },
    ScrollY: function ScrollY(state) {
        return state.scrollY >= 300
    },
    ScrollTop: function scrollTop(state) {
        return state.scrollY >= 1080
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