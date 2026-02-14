<template>
  <div>
    <div :class="images.length === 1 ? 'flex justify-center' : 'grid grid-cols-2 md:grid-cols-3 gap-4'">
      <div 
        v-for="(src, index) in images" 
        :key="index"
        class="overflow-hidden rounded-lg bg-gray-800"
        :class="images.length === 1 ? 'max-w-2xl w-full' : 'aspect-video'"
      >
        <img 
          :src="src" 
          @click="openLightbox(index)"
          class="w-full h-full object-cover cursor-zoom-in hover:scale-105 transition duration-500"
        />
      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="isOpen" 
          class="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          @click="closeLightbox"
          @keydown.left="prevImage"
          @keydown.right="nextImage"
          @keydown.esc="closeLightbox"
          tabindex="0"
          ref="lightboxRef"
        >
          <button @click="closeLightbox" class="absolute top-6 right-6 text-white text-4xl z-[1000] hover:scale-110 transition">
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <template v-if="images.length > 1">
            <button 
              @click.stop="prevImage" 
              class="absolute left-4 md:left-10 text-white text-5xl hover:text-blue-400 transition z-[1000]"
            >
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <button 
              @click.stop="nextImage" 
              class="absolute right-4 md:right-10 text-white text-5xl hover:text-blue-400 transition z-[1000]"
            >
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </template>

          <div class="relative w-full h-full flex flex-col items-center justify-center" @click.stop>
            <div 
              class="relative flex items-center justify-center transition-all duration-300 overflow-auto max-w-[90vw] max-h-[85vh]"
              :class="isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'"
              @click="toggleZoom"
            >
              <img 
                :src="images[currentIndex]" 
                class="rounded shadow-2xl transition-transform duration-300 ease-in-out"
                :class="[
                  isZoomed ? 'scale-150 max-w-none' : 'max-w-full max-h-[75vh] object-contain'
                ]" 
              />
            </div>

            <div class="mt-6 flex flex-col items-center gap-2">
               <button 
                @click="toggleZoom" 
                class="bg-white/10 hover:bg-white/20 text-white px-4 py-1 rounded-full text-sm backdrop-blur-md transition flex items-center gap-2"
              >
                <ion-icon :name="isZoomed ? 'remove-circle-outline' : 'add-circle-outline'"></ion-icon>
                {{ isZoomed ? 'Zoom Out' : 'Zoom In' }}
              </button>
              
              <p v-if="images.length > 1" class="text-gray-400 text-sm font-mono">
                {{ currentIndex + 1 }} / {{ images.length }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
})

const isOpen = ref(false)
const isZoomed = ref(false)
const currentIndex = ref(0)
const lightboxRef = ref(null)

const toggleZoom = () => {
  isZoomed.value = !isZoomed.value
}

const openLightbox = (index) => {
  currentIndex.value = index
  isOpen.value = true
  isZoomed.value = false // Reset zoom on open
  document.body.style.overflow = 'hidden'
  
  nextTick(() => {
    lightboxRef.value?.focus()
  })
}

const closeLightbox = () => {
  isOpen.value = false
  isZoomed.value = false // Reset zoom on close
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  if (props.images.length <= 1) return
  isZoomed.value = false // Reset zoom when changing image
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevImage = () => {
  if (props.images.length <= 1) return
  isZoomed.value = false // Reset zoom when changing image
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Custom scrollbar for zoomed image if needed */
div::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
div::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

div:focus { outline: none; }
</style>