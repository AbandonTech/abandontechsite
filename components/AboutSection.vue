<template>
    <div class="text-center py-36 text-base-content">
        <div class="w-full md:w-1/2 px-4 md:px-32 mx-auto">
            <h1 class="text-6xl mb-4">{{ props.title }}</h1>
            <p class="text-2xl">{{ props.description }}</p>
        </div>
        
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        description: String
    })
</script>