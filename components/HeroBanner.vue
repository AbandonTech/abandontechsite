<template>
    <div class="flex justify-center py-36">
        <div>
            <div class="text-base-content text-center text-4xl p-4 lg:text-7xl">
                <h1 v-if="debug" class="-rotate-2">&#60;!-- <span class="underline underline-offset-8 decoration-wavy decoration-[5px] decoration-amber-300">TODO:</span> Write a Good Slogan --&#62;</h1>
                <template v-else>
                    <h1>Empowering Businesses</h1>
                    <h1>Through Technology</h1>
                </template>
            </div>
            <div class="flex flex-col lg:flex-row gap-2 lg:gap-7 items-center justify-center mt-16">
                <button type="button" class="btn btn-lg btn-wide btn-primary" @click="scrollToFooter">Contact Us</button>
                <NuxtLink to="/projects"><button type="button" class="btn btn-lg btn-wide btn-outline">Our Portfolio</button></NuxtLink>
            </div>
        </div>  
    </div>
</template>

<script setup>
    const route = useRoute()
    const debug = "debug" in route.query

    function scrollToFooter() {
        document.getElementById('footer').scrollIntoView()
    }

</script>
