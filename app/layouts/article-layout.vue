<template>
  <div
    class="lg:grid mt-16"
    :class="{
      'grid-cols-4 gap-10': showLongRead,
    }"
  >
    <ArticleLongread v-if="showLongRead" />
    <div class="lg:col-span-2">
      <slot />
    </div>
  </div>
</template>
<script setup>
defineProps({
  showLongRead: {
    type: Boolean,
    default: true,
  },
});
</script>
