<template>
    <ProjectAboutPage v-bind="minecraftAdminProps" />
</template>

<script setup>
    const minecraftAdminProps = {
        title: "Minecraft Admin",
        externalLink: "https://mc.abandontech.cloud",
        description: `Minecraft Admin is your ultimate solution for effortlessly managing Minecraft servers of any size. Our comprehensive toolkit empowers you to navigate the challenges of Minecraft server administration with unparalleled ease.

            Equipped with fine-grained organization and user permissions, Minecraft Admin enables you to grant your team precisely the powers they require while imposing necessary restrictions to uphold smooth and secure operations. Whether it's assigning staff members varying levels of access or regulating command execution permissions, our platform ensures seamless control over your Minecraft ecosystem.

            Additionally, Minecraft Admin prioritizes your security by allowing you to anonymize your host server's IP address, thereby safeguarding your privacy and establishing a protective barrier between your users and your host server.

            As we continuously strive to enhance your experience, Minecraft Admin is a dynamic project with ambitious goals. Stay tuned for impending updates and exciting new features as our development journey unfolds.`
    }
</script>
