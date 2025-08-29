<template>
  <button
    aria-label="Select a theme"
    class="fixed z-50 right-0 bottom-16 xl:bottom-8 pl-2 h-10 pr-1 rounded-l-full flex cursor-pointer items-center justify-center bg-[var(--theme-main)] text-[var(--theme-background)] group"
    @click="toggleOpen"
  >
    <Icon
      name="mdi:close"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-5 lg:size-6 group-hover:-translate-x-3 transition-transform duration-200"
      :class="{
        'opacity-0': !isOpen
      }"
    />
    <Icon
      name="mdi:settings-outline"
      class="size-5 lg:size-6 group-hover:-translate-x-1 transition-transform duration-200"
      :class="{
        'opacity-0': isOpen
      }"
    />
  </button>
  <div
    class="fixed rounded-l-[25px] z-10 flex flex-row-reverse bottom-16 xl:bottom-8 right-10 gap-1"
  >
    <button
      v-for="(item, index) in themes"
      :key="item.value"
      class="capitalize cursor-pointer h-10 w-10 flex items-center justify-center ease-out rounded-full transition-all"
      :class="{
        'opacity-0 translate-x-2 pointer-events-none': !isOpen,
      }"
      :style="{
        backgroundColor: `rgb(${item.main})`,
        transitionDelay: isOpen
          ? `${index * 0.05}s`
          : `${(themes.length - index - 1) * 0.05}s`,
      }"
      :aria-label="`Select ${item.name} theme`"
      @click="setTheme(item.name)"
    >
      <span
        class="size-4 inline-block rounded-full"
        :style="{ backgroundColor: `rgb(${item.background})` }"
      ></span>
    </button>
  </div>
</template>
<script setup>
import red from "~/assets/js/red.js";
import yellow from "~/assets/js/yellow.js";
import gray from "~/assets/js/gray.js";
import brown from "~/assets/js/brown.js";
import blue from "~/assets/js/blue.js";
import green from "~/assets/js/green.js";
const themes = [red, yellow, gray, brown, blue, green];
const isOpen = ref(false);

function toggleOpen() {
  isOpen.value = !isOpen.value;
}
function setTheme(name) {
  useColorTheme(name);
  isOpen.value = false;
}
</script>
<style></style>
