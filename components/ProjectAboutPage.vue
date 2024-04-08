<template>
    <div class="flex flex-col justify-center py-20 lg:py-20">
        <div class="text-base-content text-center text-4xl p-4 lg:text-7xl">
            <h1 class="text-4xl lg:text-9xl mb-10">{{ props.title }}</h1>
        </div>
        <div class="self-center w-11/12 lg:w-2/3 mb-10">
            <p class="text-primary-content text-xl whitespace-pre-line">
                {{ props.description }}
            </p>
        </div>
        <NuxtLink :to="props.externalLink" class="self-center" target="_blank" rel="noreferrer"><button type="button" class="btn btn-md w-64 btn-outline">{{ props.title }} <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /></button></NuxtLink>
    </div>
</template>

<script setup >
    const props = defineProps({
        title: String,
        description: String,
        externalLink: String,
    })
</script>
