<template>
<main id="back" class="bg-brandPink min-h-screen relative">
  <h1 id="soon" class="text-2xl md:text-5xl text-[#c1633a] top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-fit h-fit absolute uppercase" style="opacity: 0;">Coming soon</h1>
    <div class="absolute h-[230px] w-[300px] top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">

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
            gsap.to('#soon', { delay: 2, opacity: 1 })
            gsap.from('#soon', { delay: 2, y: 50 })
        }
    }

    // logo 1 10 - 24
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
</style>
