<template>
    <div class="flex flex-col lg:flex-row justify-between items-center border rounded-md w-11/12 md:w-1/2 mx-auto mt-12 p-12">
        <div class="w-full lg:w-1/2">
            <h3 class="text-base-content text-center text-4xl">{{ props.title }}</h3>
            <img class="w-full mt-4" :src="props.imagePath" />
        </div>

        <p class="w-full text-lg lg:w-1/2 p-4 lg:p-0 lg:pl-10">{{ props.description }}</p>
        
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        imagePath: String,
        description: String
    })
</script>