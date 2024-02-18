<template>
    <HeroBanner />
    <AboutSection class="bg-base-200" :title="aboutSectionData.hosting.title" :description="aboutSectionData.hosting.description" />
    <AboutSection class="bg-base-100" :title="aboutSectionData.webDev.title" :description="aboutSectionData.webDev.description" />
    <AboutSection class="bg-base-200" :title="aboutSectionData.other.title" :description="aboutSectionData.other.description" />

</template>

<script setup>
    const aboutSectionData = {
        hosting: {
            title: "Hosting and Management",
            description: `We provide a number of solutions for hosting applications and services. Whether it is a simple 
                    static site or a complex and distributed service, we would love to assist you in reliably and scalably deploying 
                    your applications.`
        },
        webDev: {
            title: "Web Dev",
            description: `Our team is made up of talented developers and designers. Collectively we cover a large range of 
                    sills across fullstack web development.`
        },
        other: {
            title: "Anything Else",
            description: `Our team can also assist in a number of other areas within technology. If you do not see what you 
                    need listed here, please feel free to reach out.`
        }
    }
</script>