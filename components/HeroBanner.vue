<template>
    <div class="flex justify-center pt-16">
        <div>
            <div class="text-base-content text-center text-8xl">
                <!-- <h1>Technology Without</h1>
                <h1>The Baggage</h1> -->
                <h1>{{ toHtmlComment("TODO:") }}</h1>
                <h1>{{ toHtmlComment("Write a Good Slogan") }}</h1>
            </div>
            <div class="flex gap-7 justify-center mt-16">
                <button class="btn btn-lg btn-wide btn-primary">Learn More</button>
                <button class="btn btn-lg btn-wide btn-outline">Contact Us</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    function toHtmlComment(txt) {
        return `<!-- ${txt} -->`
    }
</script>