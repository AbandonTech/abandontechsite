<template>
    <NuxtLink :to="props.externalLink" target="_blank" class="bg-base-100 text-base-content flex flex-col lg:flex-row justify-center lg:justify-between items-center border border-base-content/20 rounded-2xl w-11/12 lg:w-1/2 h-[80vh] lg:h-80 mx-auto mt-12 p-12 duration-300 lg:hover:scale-110">
        <div class="w-full lg:w-1/2">
            <h3 class="text-center text-4xl">{{ props.title }}</h3>
            <img class="w-1/3 mx-auto mt-4" :src="props.imagePath" />
        </div>

        <p class="w-full text-lg lg:w-1/2 p-4 lg:p-0 lg:pl-10">{{ props.description }}</p>
        
    </NuxtLink>
</template>

<script setup >
    const props = defineProps({
        title: String,
        imagePath: String,
        description: String,
        externalLink: String
    })
</script>