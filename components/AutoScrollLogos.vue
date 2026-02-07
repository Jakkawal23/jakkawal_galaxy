<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const scrollContainer = ref(null)
let animationId = null

const updateScroll = () => {
  const el = scrollContainer.value
  if (el) {
    // Speed control: 0.8 is a smooth, slow drift
    el.scrollLeft += 0.8

    // Reset loop: Once it reaches the halfway point (end of the first set)
    if (el.scrollLeft >= el.scrollWidth / 2) {
      el.scrollLeft = 0
    }
  }
  animationId = requestAnimationFrame(updateScroll)
}

const startAutoScroll = () => {
  if (!animationId) animationId = requestAnimationFrame(updateScroll)
}

const stopAutoScroll = () => {
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
}

onMounted(() => {
  // Delay slightly to ensure browser has calculated widths
  setTimeout(() => startAutoScroll(), 500)
})

onUnmounted(() => stopAutoScroll())
</script>

<template>
  <ul
    v-if="images && images.length > 0"
    ref="scrollContainer"
    class="clients-list has-scrollbar"
    @mouseenter="stopAutoScroll"
    @mouseleave="startAutoScroll"
    @touchstart="stopAutoScroll"
    @touchend="startAutoScroll"
  >
    <li
      v-for="(img, index) in [...images, ...images]"
      :key="index"
      class="clients-item"
    >
      <a href="#">
        <img :src="img.src" :alt="img.alt">
      </a>
    </li>
  </ul>
</template>

<style scoped>
/* ส่วนของลิสต์ */
.clients-list {
  display: flex;
  align-items: center; /* จัดให้โลโก้ทุกอันอยู่กึ่งกลางแนวตั้ง */
  gap: 40px; /* ระยะห่างระหว่างโลโก้ */
  overflow-x: auto;
  scroll-snap-type: none !important;
  scroll-behavior: auto !important;
}

/* ส่วนของรายการ (กรอบ) */
.clients-item {
  flex-shrink: 0;
  /* กำหนดขนาดที่ต้องการตรงนี้ */
  width: 150px; 
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ส่วนของรูปภาพ */
.clients-item img {
  /* บังคับให้ขนาดเต็มกรอบที่ครอบไว้ */
  width: 100%;
  height: 100%;
  
  /* หัวใจสำคัญ: ทำให้รูปเล็กลงหรือใหญ่ขึ้นตามกรอบโดยไม่เบี้ยว 
     และยังคงสัดส่วนเดิมไว้ (คล้าย background-size: contain) */
  object-fit: contain;
  
  filter: grayscale(1);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.clients-item img:hover {
  filter: grayscale(0);
  opacity: 1;
  transform: scale(1.1); /* ขยายขึ้นนิดหน่อยเวลาชี้ */
}

/* Hide scrollbar */
.has-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>