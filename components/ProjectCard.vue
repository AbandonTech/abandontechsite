<template>
    <div class="bg-base-100 text-base-content flex flex-col lg:flex-row justify-center lg:justify-between items-center border border-base-content/20 rounded-2xl w-11/12 lg:w-8/12 2xl:w-1/2 h-[85vh] lg:h-80 mx-auto mt-12 p-4 lg:p-0">
        <div class="w-full lg:w-1/2">
            <h3 class="text-center text-4xl">{{ props.title }}</h3>
            <img class="w-1/3 mx-auto mt-4" :src="props.imagePath" :alt="`The logo for ${props.title }`" />
        </div>

        <div class="flex flex-col w-full  gap-10 justify-center lg:w-1/2">
            <p class="text-lg lg:w-10/12 text-center mt-4 md:mt-12 lg:mt-0 mx-auto">{{ props.description }}</p>
            <div class="flex flex-col lg:flex-row gap-4 items-center justify-center">
                <NuxtLink :to="props.internalLink"><button type="button" class="btn btn-md w-64 lg:w-28 xl:w-44 2xl:w-48 btn-primary">Learn More</button></NuxtLink>
                <ClientOnly>
                    <NuxtLink :to="props.externalLink" target="_blank" rel="noreferrer"><button type="button" class="btn btn-md w-64 lg:w-44 xl:w-44 2xl:w-48 btn-outline">{{ props.title }} <svg class="h-4 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></button></NuxtLink>
                </ClientOnly>
            </div>
            
        </div>
        
        
    </div>
</template>

<script setup >
    const props = defineProps({
        title: String,
        imagePath: String,
        description: String,
        externalLink: String,
        internalLink: String
    })
</script>