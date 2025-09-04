<template>
    <div class="page-header">
        <BreadCrumb
            v-if="crumbs"
            :crumbs="crumbs"
        />

        <div class="flex justify-between">
            <h1 class="font-medium text-2xl">{{ title }}</h1>
            <time v-if="date">
                {{
                    new Date(date).toLocaleDateString("en", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })
                }}
            </time>
        </div>
        <p
            v-if="description"
            class=""
        >
            {{ description }}
        </p>
    </div>
</template>
<script setup lang="ts">
interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface Props {
  title?: string;
  description?: string;
  date?: string;
  crumbs?: BreadcrumbItem[];
}

defineProps<Props>();
</script>
<style lang="postcss"></style>
