<template>
    <div>
        <NuxtLayout name="article-layout"> </NuxtLayout>
    </div>
</template>
<script setup>
definePageMeta({
    pageTransition: { name: "article", mode: "out-in" },
});
</script>
