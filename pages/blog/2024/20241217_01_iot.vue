<script setup>
import { useI18n } from 'vue-i18n'
// import { useRouter } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
useHead({
  title: 'Blog Detail',
})

definePageMeta({
  hideNavbar: true,
})

const router = useRouter()
const route = useRoute()

function goBack() {
  router.back()
}

const { t, tm, locale, mergeLocaleMessage } = useI18n()

const slug = route.params.slug

const loadBlogLocale = async (lang) => {
  const messages = await import(`~/locales/blogs/20241217_01_iot.${lang}.json`)
  mergeLocaleMessage(lang, { blog: messages.default })
}

onMounted(() => {
  loadBlogLocale(locale.value)
})

watch(locale, (newLang) => {
  loadBlogLocale(newLang)
})


</script>

<template>
  <article class="blog-detail active text-gray-200" data-page="blog-detail">
    <div class="sticky top-0 backdrop-blur-sm py-3 px-4 z-20">
      <button
        @click="goBack"
        class="blog-back-btn flex items-center gap-2 text-gray-300 hover:text-white transition mb-2"
      >
        <ion-icon name="arrow-back-outline" class="text-lg"></ion-icon>
        <span><p>{{ $t('all.back') }}</p></span>
      </button>
    </div>

    <header>
      <h2 class="h2 article-title ">
        <p>{{ t('blog.title') }}</p>
      </h2>
    </header>

    <!-- SECTION -->
    <section class="blog-content px-4 md:px-12 lg:px-32 py-10 space-y-12">

      <!-- Image 1 -->
      <figure class="w-full">
        <img
          src="/images/blog/2024/20241217_01/20241217_01_01.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image1Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 1 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section1.heading') }}</h3>
        <p>{{ t('blog.section1.content') }}</p>
      </div>

      <!-- Section 2 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section2.heading') }}</h3>
        <p>{{ t('blog.section2.content') }}</p>
      </div>

      <!-- Image 2 -->
      <figure class="w-full">
        <img
          src="/images/blog/2024/20241217_01/20241217_01_02.png"
          alt="Machine To Machine"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image2Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 3 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section3.heading') }}</h3>
        <p>{{ t('blog.section3.content') }}</p>
      </div>

      <!-- Image 3 -->
      <figure class="w-full">
        <img
          src="/images/blog/2024/20241217_01/20241217_01_03.png"
          alt="IoT != Software JOIN Hardware"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image3Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 4 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section4.heading') }}</h3>
        <p>{{ t('blog.section4.content01') }}</p>
        <p>{{ t('blog.section4.content02') }}</p>
        <p>{{ t('blog.section4.content03') }}</p>
      </div>

      <!-- Image 4 -->
      <figure class="w-full">
        <img
          src="/images/blog/2024/20241217_01/20241217_01_04.png"
          alt="What is Internet of Things"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image4Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 5 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section5.heading') }}</h3>
        <p>{{ t('blog.section5.content01') }}</p>
        <p>{{ t('blog.section5.content02') }}</p>
      </div>

      <!-- Image 5 -->
      <figure class="w-full">
        <img
          src="/images/blog/2024/20241217_01/20241217_01_05.png"
          alt="Example Internet of Things"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image5Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 6 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section6.heading') }}
        </h3>
        <p>
          {{ t('blog.section6.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section6.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 6 -->
      <figure class="w-full">
        <img
          src="/images/blog/2024/20241217_01/20241217_01_06.png"
          alt="Smart City"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image6Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 7 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section7.heading') }}</h3>
        <p>{{ t('blog.section7.content') }}</p>
      </div>

      <!-- Image 7 -->
      <figure class="w-full">
        <img
          src="/images/blog/2024/20241217_01/20241217_01_07.png"
          alt="เราอยู่ในยุคของ Smart…."
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image7Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 8 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section8.heading') }}</h3>
        <p>{{ t('blog.section8.content01') }}</p>
        <p>{{ t('blog.section8.content02') }}</p>
      </div>

      <!-- Image 8 -->
      <figure class="w-full">
        <img
          src="/images/blog/2024/20241217_01/20241217_01_08.png"
          alt="สรุปเปรียบเทียบ Internet Of Thing"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image8Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 9 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section9.heading') }}</h3>
        <p>{{ t('blog.section9.content') }}</p>
      </div>

      <!-- Image 9 -->
      <figure class="w-full">
        <img
          src="/images/blog/2024/20241217_01/20241217_01_09.png"
          alt="แล้วคุณ ให้คำนิยามของ IoT ว่าอย่างไร ?"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image9Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 10 -->
      <div class="blog-highlight">
        <span class="font-semibold text-white">
          {{ t('blog.section10.heading') }}
        </span>
        {{ t('blog.section10.content') }}
      </div>

      <!-- Tags + Share -->
      <div class="blog-section flex flex-col gap-6">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in ['Iot', 'Internet Of Things', 'Internet Of Everything', 'IOT']"
            :key="tag"
            class="blog-tag"
          >
            #{{ tag }}
          </span>
        </div>

        <div class="flex items-center gap-4">
          <span class="text-gray-400 text-sm">{{ $t('all.share') }}:</span>
          <ion-icon name="logo-tiktok" class="blog-icon"></ion-icon>
          <ion-icon name="logo-youtube" class="blog-icon"></ion-icon>
          <ion-icon name="logo-instagram" class="blog-icon"></ion-icon>
          <ion-icon name="logo-facebook" class="blog-icon"></ion-icon>
          <ion-icon name="logo-twitter" class="blog-icon"></ion-icon>
          <ion-icon name="logo-linkedin" class="blog-icon"></ion-icon>
          <ion-icon name="logo-medium" class="blog-icon"></ion-icon>
        </div>
      </div>
    </section>
  </article>
</template>
