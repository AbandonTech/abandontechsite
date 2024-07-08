<template>
    <div class="text-center py-12 lg:py-28 text-base-content">
        <div class="w-full md:w-2/3 px-4 md:px-20 mx-auto">
            <h1 class="text-5xl lg:text-6xl mb-4">{{ props.title }}</h1>
            <img class="mx-auto w-64 lg:w-80 my-14" :src="props.imagePath" :alt="props.imgAlt" />
            <p class="text-2xl">{{ props.description }}</p>
        </div>
        
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        imagePath: String,
        imgAlt: String,
        description: String
    })
</script>