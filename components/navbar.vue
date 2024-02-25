<template>
    <div class="navbar px-7 h-20 fixed bg-primary">
        <div class="flex-1">
            <NuxtLink to="/">
                <img class="h-8 select-none" src="/img/logoHorizontalDarkMode.svg" />
            </NuxtLink>
        </div>

        <div class="flex-none">
            <ul class="menu menu-horizontal text-lg px-1">

                <li class="dropdown dropdown-end dropdown-hover">
                    <div tabindex="0" role="button"><NuxtLink to="/projects" @click="removeDropdownFocus">Projects</NuxtLink></div>
                        <ul tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 text-base-content rounded-box w-40">
                            <li><NuxtLink to="/projects/abandonauth" @click="removeDropdownFocus">Abandon Auth</NuxtLink></li> 
                            <li><NuxtLink to="/projects/minecraftadmin" @click="removeDropdownFocus">Minecraft Admin</NuxtLink></li>
                        </ul>
                </li>

                <li class="dropdown dropdown-end dropdown-hover">
                    <div tabindex="0" role="button"><NuxtLink to="/projects" @click="removeDropdownFocus">Services</NuxtLink></div>
                        <ul tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 text-base-content rounded-box w-40">
                            <li><NuxtLink to="/projects" @click="removeDropdownFocus">Hosting</NuxtLink></li> 
                            <li><NuxtLink to="/projects" @click="removeDropdownFocus">Web Dev</NuxtLink></li>
                            <li><NuxtLink to="/projects" @click="removeDropdownFocus">Backend</NuxtLink></li>
                        </ul>
                </li>

                <li><NuxtLink to="/projects">About Us</NuxtLink></li>

            </ul>
        </div>

    </div>
</template>

<script setup>
    function removeDropdownFocus() {
        // Hack to close dropdowns when they are clicked
        // Removes focus that is holding element open
        document.activeElement?.blur();
    }
</script>
