<template>
  <div class="c-blur-image">
    <canvas
      v-if="!imageLoaded"
      ref="canvas"
      class="c-blur-image__placeholder"
    />
    <img
      :src="src"
      :alt="alt"
      class="c-blur-image__full-image"
      :class="{ 'c-blur-image__full-image--loaded': imageLoaded }"
      @load="onImageLoad"
    />
  </div>
</template>

<script setup>
import { decode } from 'blurhash'

const props = defineProps({
  src: String,
  blurhash: String,
  alt: String,
  width: { type: Number, default: 32 },
  height: { type: Number, default: 32 }
})

const canvas = ref(null)
const imageLoaded = ref(false)

onMounted(() => {
  if (props.blurhash && canvas.value) {
    const pixels = decode(props.blurhash, props.width, props.height)
    const imageData = new ImageData(pixels, props.width, props.height)
    const ctx = canvas.value.getContext('2d')
    ctx.putImageData(imageData, 0, 0)
  }
})

const onImageLoad = () => {
  console.log('Image loaded')
  imageLoaded.value = true
}
</script>

<style scoped>
.c-blur-image {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.c-blue-image__placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(20px);
  scale: 1.1;
}

.c-blur-image__full-image {
  display: block;
  width: 100%;
  height: auto;
  display:none;
  transition: opacity 0.3s ease-in-out;
}

.c-blur-image__full-image--loaded {
  display: inline;
}
</style>