<script setup>
const props = defineProps({
  items: Array,
  basePath: { type: String, default: '/project' },
  locale: String,
})

const scrollContainer = ref(null)
let animationId = null

const updateScroll = () => {
  const el = scrollContainer.value
  if (el) {
    // ปรับความเร็วตรงนี้: 0.5 = ช้าเนียน, 1 = ปกติ, 2 = เร็ว
    el.scrollLeft += 0.8

    // เงื่อนไข Loop: ถ้าเลื่อนถึงครึ่งหนึ่ง (จบชุดแรก) ให้ดีดกลับ 0
    if (el.scrollLeft >= el.scrollWidth / 2)
      el.scrollLeft = 0
  }
  // เรียกใช้ฟังก์ชันถัดไปในเฟรมหน้าจอถัดไป (นี่คือเคล็ดลับความสมูท)
  animationId = requestAnimationFrame(updateScroll)
}

const startAutoScroll = () => {
  if (!animationId)
    animationId = requestAnimationFrame(updateScroll)
}

const stopAutoScroll = () => {
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
}

onMounted(() => {
  // รอนิดนึงให้ DOM โหลดความกว้างให้ชัวร์ก่อนเริ่ม
  setTimeout(() => startAutoScroll(), 500)
})

onUnmounted(() => stopAutoScroll())
</script>

<template>
  <ul
    v-if="items && items.length > 0"
    ref="scrollContainer"
    class="testimonials-list has-scrollbar"
    @mouseenter="stopAutoScroll"
    @mouseleave="startAutoScroll"
    @touchstart="stopAutoScroll"
    @touchend="startAutoScroll"
  >
    <li
      v-for="(item, index) in [...items, ...items]"
      :key="index"
      class="testimonials-item"
    >
      <NuxtLink :to="`${basePath}/${item.slug}`" class="content-card">
        <figure class="testimonials-avatar-box">
          <img :src="item.image" :alt="item.title?.en" width="60">
        </figure>
        <h4 class="h4 testimonials-item-title">
          {{ item.title?.[locale] || item.title?.en }}
        </h4>
        <div class="testimonials-text">
          <p>{{ item.content?.[locale] || item.content?.en }}</p>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.testimonials-list {
  display: flex;
  overflow-x: auto;
  gap: 15px;
  /* ต้องปิด snap-type และ scroll-behavior: smooth เพราะมันจะขัดขวางการเลื่อนละเอียดระดับ pixel */
  scroll-snap-type: none !important;
  scroll-behavior: auto !important;
  -webkit-overflow-scrolling: touch;
}

.testimonials-item {
  flex-shrink: 0;
  /* ปิด pointer-events ชั่วคราวถ้าจำเป็น แต่ปกติไม่ต้อง */
}

/* ซ่อน scrollbar ถ้าต้องการความคลีน */
.has-scrollbar::-webkit-scrollbar {
  height: 4px;
}
</style>
