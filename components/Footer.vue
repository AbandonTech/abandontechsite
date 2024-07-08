<template>
    <footer id="footer" class="footer h-64 lg:h-full p-10 bg-primary text-primary-content">
        <div class="flex flex-col items-center text-2xl gap-4 mx-auto">
            <div class="flex flex-row gap-3">
                <ClientOnly>
                    <NuxtLink to="https://github.com/AbandonTech" target="_blank" aria-label="Navigate to AbandonTech's Github organization"><font-awesome-icon icon="fa-brands fa-github" /></NuxtLink>
                    <NuxtLink to="mailto:info@abandontech.cloud" target="_blank" aria-label="Send an email to AbandonTech"><font-awesome-icon icon="fa-solid fa-envelope" /></NuxtLink>
                    <NuxtLink to="https://discord.gg/SeQYbPt5ps" target="_blank" aria-label="Navigate to Discord to join AbandonTech's official Discord guild"><font-awesome-icon icon="fa-brands fa-discord" /></NuxtLink>
                </ClientOnly>
            </div>
            <p>info@abandontech.cloud</p>
        </div>
    </footer>
</template>