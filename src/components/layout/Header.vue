<template>
    <header class="header" :class="{'open' : navOpen, 'hidden-navbar': !showNavbar}">
        <h1 class="logo"><a href="/" title="메인으로 이동"><img src="../../assets/images/logo.png" alt="로고"></a></h1>
        <button type="button" class="btn-gnb" :class="{close : navOpen}" @click="changeToggle" title="메뉴"><span></span><span></span><span></span></button>
        <Nav :open="navOpen" @change-toggle="fromNav"/>
    </header>
</template>
<script>
import Nav from "./Nav.vue"
const OFFSET = 60
export default {
    components: {
        Nav
    },
    data() {
        return {
            navOpen: false,
            showNavbar: true,
            lastScrollPosition: 0,
            scrollValue: 0
        }
    },
    mounted () {
        this.lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', this.onScroll)
        const viewportMeta = document.createElement('meta')
        viewportMeta.name = 'viewport'
        viewportMeta.content = 'width=device-width, initial-scale=1'
        document.head.appendChild(viewportMeta)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        changeToggle(){
            this.navOpen = !this.navOpen;
            if(this.navOpen){
                document.body.classList.add('hidden');
            }else{
                document.body.classList.remove('hidden');
            }
        },
        fromNav(isOpen) {
            this.navOpen = isOpen;
        },
        onScroll () {
            if (window.pageYOffset < 0) {
                return
            }
            if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
                return
            }
            this.showNavbar = window.pageYOffset < this.lastScrollPosition
            this.lastScrollPosition = window.pageYOffset
        }
    },
}
</script>