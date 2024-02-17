<template>
    <div class="navbar px-7 h-20  fixed bg-primary">
        <div class="flex-1">
            <NuxtLink to="/">
                <img class="h-8 select-none" src="assets/img/logoHorizontalDarkMode.svg" />
            </NuxtLink>
        </div>

        <div class="flex-none">
            <ul class="menu menu-horizontal text-lg px-1">

                <li class="dropdown dropdown-end dropdown-hover">
                    <div tabindex="0" role="button">Projects</div>
                        <ul tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 text-base-content rounded-box w-40">
                            <li><NuxtLink to="/projects">Abandon Auth</NuxtLink></li> 
                            <li><NuxtLink to="/projects">Minecraft Admin</NuxtLink></li>
                        </ul>
                </li>

                <li class="dropdown dropdown-end dropdown-hover">
                    <div tabindex="0" role="button">Docs</div>
                        <ul tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 text-base-content rounded-box w-40">
                            <li><NuxtLink to="/projects">Abandon Auth</NuxtLink></li> 
                            <li><NuxtLink to="/projects">Minecraft Admin</NuxtLink></li>
                        </ul>
                </li>

                <li><NuxtLink to="/projects">About Us</NuxtLink></li>

            </ul>
        </div>

    </div>
</template>


