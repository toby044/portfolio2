<template>
  <div
    class="fixed z-50 right-0 bottom-4"
    :class="{
      '': isOpen,
    }"
  >
    <button
      aria-label="Select a theme"
      class="relative z-20 pl-2 h-10 pr-1 rounded-l-full flex cursor-pointer items-center justify-center bg-[var(--theme-main)] text-[var(--theme-background)] group"
      @click="toggleOpen"
    >
      <Icon
        v-if="isOpen"
        name="mdi:close"
        class="size-5 lg:size-6 group-hover:-translate-x-1 transition-transform duration-200"
      />
      <Icon
        v-else
        name="mdi:settings"
        class="size-5 lg:size-6 group-hover:-translate-x-1 transition-transform duration-200"
      />
    </button>
    <div
      class="absolute rounded-l-[25px] z-10 flex flex-row-reverse bottom-0 right-10 gap-1"
    >
      <button
        v-for="(item, index) in themes"
        :key="item.value"
        class="capitalize cursor-pointer h-10 w-10 flex items-center justify-center ease-out rounded-full transition-all"
        :class="{
          'opacity-0 translate-x-2': !isOpen,
        }"
        :style="{
          backgroundColor: `rgb(${item.main})`,
          transitionDelay: isOpen
            ? `${index * 0.05}s`
            : `${(themes.length - index - 1) * 0.05}s`,
        }"
        @click="setTheme(item.name)"
      >
        <span
          class="size-4 inline-block rounded-full"
          :style="{ backgroundColor: `rgb(${item.background})` }"
        ></span>
      </button>
    </div>
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
