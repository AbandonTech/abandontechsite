<template>
    <HeroBanner />

    <AboutSection class="bg-base-200" :title="aboutSectionData.hosting.title" :description="aboutSectionData.hosting.description" />
    <AboutSection class="bg-base-100" :title="aboutSectionData.webDev.title" :description="aboutSectionData.webDev.description" />
    <AboutSection class="bg-base-200" :title="aboutSectionData.other.title" :description="aboutSectionData.other.description" />

    <Footer />
</template>

<script setup>
    const aboutSectionData = {
        hosting: {
            title: "Hosting and Management",
            description: `We provide a number of solutions for hosting applications and services. From simple, static websites
            to complex applications, it is our goal to assist you with a personalized experience that fits your needs.`
        },
        webDev: {
            title: "Web Dev",
            description: `Our team is made up of talented developers and designers. Collectively we cover a large range of 
                    skills across fullstack web development. Our aim to to create unique work that is custom tailored to
                    your business or personal goals.`
        },
        other: {
            title: "Anything Else",
            description: `Our team can also assist in a number of other areas within technology. If you do not see what you 
                    need listed here, please feel free to reach out.`
        }
    }
</script>