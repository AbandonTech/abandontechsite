<template>
    <ProjectCard v-bind="projectCardProps.minecraftAdmin" />
    <ProjectCard v-bind="projectCardProps.abandonAuth" />
    <div class="mt-12" />
</template>

<script setup>
    const projectCardProps = {
        minecraftAdmin: {
            title: "Minecraft Admin",
            imagePath: "/img/logoVerticalColorLightText.svg",
            description: `Minecraft Admin is a web application for managing your Minecraft servers and giving users fine-grained
            permissions for executing RCON commands on your servers. It also features a proxy for protecting each server's IP address.`
        },
        abandonAuth: {
            title: "Abandon Auth",
            imagePath: "/img/logoVerticalColorLightText.svg",
            description: `OAuth and Identity Management provider`
        }
    }
</script>