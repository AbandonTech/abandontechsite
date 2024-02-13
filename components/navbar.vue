<template>
    <div class="navbar h-20 fixed bg-primary">
        <div class="flex-1">
            <NuxtLink to="/">
            <img class="h-8" src="assets/img/logoHorizontalDarkMode.svg" />
                <!-- <ClientOnly>
                    <img v-if="$colorMode.value == 'dark'" class="h-10" src="assets/img/logoHorizontalDarkMode.svg">
                    <img v-else class="h-10" src="assets/img/logoHorizontalLightMode.svg">
                </ClientOnly> -->
            </NuxtLink>
        </div>

        <div class="flex-none">
            <ul class="menu menu-horizontal text-lg px-1">
                <li><NuxtLink to="/projects">Projects</NuxtLink></li>
            </ul>
        </div>

    </div>
</template>


