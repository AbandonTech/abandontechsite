<template>
    <div class="flex justify-center py-36">
        <div>
            <div class="text-base-content text-center text-7xl">
                <h1 v-if="debug" class="-rotate-2">&#60;!-- <span class="underline underline-offset-8 decoration-wavy decoration-[5px] decoration-amber-300">TODO:</span> Write a Good Slogan --&#62;</h1>
                <template v-else>
                    <h1>Empowering Businesses</h1>
                    <h1>Through Technology</h1>
                </template>
            </div>
            <div class="flex gap-7 justify-center mt-16">
                <button class="btn btn-lg btn-wide btn-primary">Learn More</button>
                <button class="btn btn-lg btn-wide btn-outline">Contact Us</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const route = useRoute()
    const debug = "debug" in route.query
</script>
