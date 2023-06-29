<template>
<main id="back" class="bg-pink min-h-screen relative w-full overflow-hidden">
    <h1 class="text-2xl md:text-5xl text-yellowDark top-1/2 flex  -translate-y-1/2 w-full h-fit absolute justify-center uppercase">
        <span class="wordUpL px-1.5">Coming</span>
        <span class="wordUpR px-1.5">soon</span>
    </h1>
    <div class="absolute logo" style="">
        <img class="logo1" src="/logo1.svg">
        <img class="logo2" src="/logo2.svg">
    </div>

</main>
</template>

<script>
export default {
    name: 'IndexPage',
    mounted() {
        this.logoIntro()
    },

    methods: {
        logoIntro() {
            const gsap = this.$gsap
            gsap.fromTo('.logo1', { x: 100, opacity: 0 }, { x: 10, y: 24, opacity: 1, duration: 0.2, delay: 0.5 })
            gsap.fromTo('.logo2', { x: -40, y: 0, opacity: 0, duration: 0.2 }, { y: -5, x: 0, duration: 0.2, opacity: 1, delay: 0.5 })
            gsap.to('.logo1', { delay: 2, scale: 5, y: -400, autoAlpha: 0 })
            gsap.to('.logo2', { delay: 2, scale: 5, y: 400, autoAlpha: 0 })
            gsap.to('#back', { delay: 2, backgroundColor: '#fbd355' })

            gsap.from('.wordUpL', { x: -300, opacity: 0, duration: 0.3, delay: 2 })
            gsap.from('.wordUpR', { x: 300, opacity: 0, duration: 0.3, delay: 2 })
        }
    }
}
</script>

<style scoped>
h1,
h2,
h3,
h4 {
    font-family: supersize-bk, sans-serif;
    font-style: normal;
    font-weight: 400;
}
.logo{
    height: 230px;
    width: 300px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
</style>
