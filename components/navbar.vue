<template>
    <div class="navbar px-7 h-20 fixed bg-primary">
        <div class="flex-1">
            <NuxtLink to="/">
                <img class="h-8 select-none" src="/img/logoHorizontalDarkMode.svg" />
            </NuxtLink>
        </div>

        <div class="flex-none">
            <ul class="menu menu-horizontal text-lg px-1">

                <li><NuxtLink to="/projects" @click="removeClickFocus">Projects</NuxtLink></li>
                <li><NuxtLink to="/services" @click="removeClickFocus">Services</NuxtLink></li>
                <li><NuxtLink to="/about" @click="removeClickFocus">About Us</NuxtLink></li>

            </ul>
        </div>

    </div>
</template>

<script setup>
    function removeClickFocus() {
        // Hack to remove focus/hover effects when clicked elements are permanently focused when clicked
        document.activeElement?.blur();
    }
</script>
