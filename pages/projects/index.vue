<template>
    <div class="lg:mt-20" />
    <ProjectCard v-bind="projectCardProps.abandonAuth" />
    <ProjectCard v-bind="projectCardProps.minecraftAdmin" />
    <ProjectCard v-bind="projectCardProps.minecraftRouter" />
    <div class="mt-12" />
</template>

<script setup>
    const projectCardProps = {
        minecraftAdmin: {
            title: "Minecraft Admin",
            imagePath: "/img/minecraftAdminLogo.svg",
            externalLink: "https://mc.abandontech.cloud",
            description: `Web application for managing Minecraft servers and giving users fine-grained
            permissions for executing RCON commands. It also features a proxy for protecting each server's IP address.`
        },
        abandonAuth: {
            title: "Abandon Auth",
            imagePath: "/img/padlock.svg",
            externalLink: "https://auth.abandontech.cloud",
            description: `OAuth and Identity Management provider that simplifies user authentication and consolidates user identities
            accross OAuth providers.`
        },
        minecraftRouter: {
            title: "Minecraft Router",
            imagePath: "/img/minecraftAdminLogo.svg",
            externalLink: "https://github.com/AbandonTech/minecraftrouter",
            description: `Microservice for resolving DNS to Minecraft servers while providing privacy for server owners by protecting
                their IP address from connecting users.`
        }
    }
</script>