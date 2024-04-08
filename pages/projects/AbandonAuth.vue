<template>
    <ProjectAboutPage v-bind="abandonAuthProps" />
</template>

<script setup>
    const abandonAuthProps = {
        title: "Abandon Auth",
        externalLink: "https://auth.abandontech.cloud",
        description: `AbandonAuth is your premier authentication and identity management solution designed to streamline the authentication process for your web applications.
        
            AbandonAuth specializes in simplifying authentication by leveraging a diverse array of third-party providers. This approach significantly reduces the coding burden and effort needed to implement authentication within your applications.

            By entrusting us with the intricate aspects of authentication, you can redirect your focus towards refining the core functionalities of your projects. Rest assured, your users' security remains our utmost priority as they seamlessly authenticate through their preferred providers.
            
            Experience hassle-free authentication with AbandonAuth, empowering you to prioritize your project's growth and innovation while ensuring your users' security.`
    }
</script>
