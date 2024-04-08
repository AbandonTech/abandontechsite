<template>
    <ProjectAboutPage v-bind="minecraftRouterProps" />
</template>

<script setup>
    const minecraftRouterProps = {
        title: "Minecraft Router",
        externalLink: "https://github.com/AbandonTech/minecraftrouter",
        description: `Minecraft Router is the microservice that provides routing/proxying for Minecraft Admin. It acts as the protective barrier between users and your host server.

While this project is not quite as glamorous as some of our frontend or full-stack applications, we are still quite proud of it. After several iterations—and many tests—we found a solution that minimizes latency while giving us the ability to easily grow our application as requirements evolve. We accomplish this by leveraging the mystical powers of Golang.

The best part about it is that it is open-source; we hope that any work we do on this project can help others learn and maybe even inspire others to involve themselves in layers one through seven of TCP connections (very exciting).`
    }
</script>
