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

          <div class="relative max-w-5xl max-h-[85vh] flex flex-col items-center" @click.stop>
            <img 
              :src="images[currentIndex]" 
              class="max-w-full max-h-full rounded shadow-2xl animate-zoom object-contain" 
            />
            <p v-if="images.length > 1" class="text-gray-400 mt-4 text-sm font-mono">
              {{ currentIndex + 1 }} / {{ images.length }}
            </p>
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
const currentIndex = ref(0)
const lightboxRef = ref(null)

const openLightbox = (index) => {
  currentIndex.value = index
  isOpen.value = true
  document.body.style.overflow = 'hidden'
  
  // ให้ Focus ที่ Modal เพื่อให้กดปุ่มลูกศรที่คีย์บอร์ดได้ทันที
  nextTick(() => {
    lightboxRef.value?.focus()
  })
}

const closeLightbox = () => {
  isOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  if (props.images.length <= 1) return
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevImage = () => {
  if (props.images.length <= 1) return
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.animate-zoom { animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
@keyframes zoom {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
/* ลบเส้นขอบสีฟ้าเวลา Focus Modal */
div:focus { outline: none; }
</style>