<template>
    <div class="flex flex-col justify-center py-20 lg:py-20">
        <div class="text-base-content text-center text-4xl p-4 lg:text-7xl">
            <h1 class="text-4xl lg:text-9xl mb-10">{{ props.title }}</h1>
        </div>
        <div class="self-center w-11/12 lg:w-2/3 mb-10">
            <p class="text-base-content text-2xl whitespace-pre-line">
                {{ props.description }}
            </p>
        </div>
        <NuxtLink :to="props.externalLink" class="self-center" target="_blank" rel="noreferrer"><button type="button" class="btn btn-md w-64 btn-outline">{{ props.title }} <svg class="h-4 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></button></NuxtLink>
    </div>
</template>

<script setup >
    const props = defineProps({
        title: String,
        description: String,
        externalLink: String,
    })
</script>
