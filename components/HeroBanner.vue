<template>
    <div class="w-full pt-12">
        <ClientOnly>
            <img v-if="$colorMode.value == 'dark'" class="w-1/2 select-none mx-auto" src="assets/img/logoVerticalColorLightText.svg">
            <img v-else class="w-1/2 select-none mx-auto" src="assets/img/logoVerticalColor.svg">
        </ClientOnly>
        <div class="flex flex-row justify-center gap-7 pt-12">
            <button class="btn btn-lg btn-wide btn-primary">Primary</button>
            <button class="btn btn-lg btn-wide btn-outline">Default</button>
        </div>
    </div>
</template>