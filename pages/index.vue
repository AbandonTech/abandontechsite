<template>
    <HeroBanner />

    <AboutSection class="bg-base-200" v-bind="aboutSectionData.hosting" />
    <AboutSection class="bg-base-100" v-bind="aboutSectionData.webDev" />
    <AboutSection class="bg-base-200" v-bind="aboutSectionData.other" />
</template>

<script setup>
    const aboutSectionData = {
        hosting: {
            title: "Hosting and Management",
            imagePath: "/img/aboutHosting.svg",
            description: `We offer a variety of solutions for hosting applications and services. Whether you need a simple, 
                    static website or a complex application, our goal is to provide you with a personalized experience tailored to your needs.`
        },
        webDev: {
            title: "Web Dev",
            imagePath: "/img/aboutWebDev.svg",
            description: `Our team consists of talented developers and designers with a diverse range of skills in full-stack web development. 
                    We aim to create distinctive solutions that are specifically crafted to align with your business or personal goals.`
        },
        other: {
            title: "Anything Else",
            imagePath: "/img/aboutOther.svg",
            description: `Our expertise goes beyond web development and deployments. If you don't 
                    see what you need listed, please reach out to us for personalized assistance.`
        }
    }
</script>