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
                    <NuxtLink :to="props.externalLink" target="_blank" rel="noreferrer"><button type="button" class="btn btn-md w-64 lg:w-44 xl:w-44 2xl:w-48 btn-outline">{{ props.title }} <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /></button></NuxtLink>
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