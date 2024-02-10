<template>
    <div class="navbar h-20 fixed bg-sky-500 bg-opacity-30">
        <div class="flex-1">
            <NuxtLink to="/" class="text-white text-xl"><img class="h-10" src="~/assets/img/logoHorizontal.svg"></NuxtLink>
        </div>

        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li><NuxtLink to="/projects">Projects</NuxtLink></li>
            </ul>
        </div>

    </div>
</template>