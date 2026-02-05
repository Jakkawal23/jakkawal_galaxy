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
  const messages = await import(`~/locales/blogs/2025/20250106_02_atomic_habits.${lang}.json`)
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
      <!-- Image 01 -->
      <figure class="w-full">
        <ImageGallery :images="['/images/blog/2025/20250106_02/20250106_02_01.png']"/>
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image1Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 1 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section1.heading') }}</h3>
        <p>{{ t('blog.section1.content') }}</p>
      </div>

      <!-- Image 02 -->
      <figure class="w-full">
        <ImageGallery :images="['/images/blog/2025/20250106_02/20250106_02_02.png']"/>
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image2Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 2 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section2.heading') }}</h3>
        <p>{{ t('blog.section2.content') }}</p>
      </div>

      <!-- Image 03 -->
      <figure class="w-full">
        <ImageGallery :images="['/images/blog/2025/20250106_02/20250106_02_03.png']"/>
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image3Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 3 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section3.heading') }}</h3>
        <p>{{ t('blog.section3.content') }}</p>
      </div>

      <!-- Image 04 -->
      <figure class="w-full">
        <ImageGallery :images="['/images/blog/2025/20250106_02/20250106_02_04.png']"/>
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image4Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 4 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section4.heading') }}
        </h3>
        <p>
          {{ t('blog.section4.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section4.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 05 -->
      <figure class="w-full">
        <ImageGallery :images="['/images/blog/2025/20250106_02/20250106_02_05.png']"/>
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image5Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 5 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section5.heading') }}</h3>
        <p>{{ t('blog.section5.content') }}</p>
      </div>

      <!-- Section 6 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section6.heading') }}</h3>
        <p>{{ t('blog.section6.content') }}</p>
      </div>

      <!-- Section 7 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section7.heading') }}</h3>
        <p>{{ t('blog.section7.content') }}</p>
      </div>

      <!-- Section 8 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section8.heading') }}</h3>
        <p>{{ t('blog.section8.content') }}</p>
      </div>

      <!-- Image 06 -->
      <figure class="w-full">
        <ImageGallery :images="['/images/blog/2025/20250106_02/20250106_02_06.png']"/>
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image6Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 9 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section9.heading') }}</h3>
        <p>{{ t('blog.section9.content') }}</p>
      </div>

      <!-- Section 10 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section10.heading') }}</h3>
        <p>{{ t('blog.section10.content') }}</p>
      </div>

      <!-- Section 11 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section11.heading') }}</h3>
        <p>{{ t('blog.section11.content') }}</p>
      </div>

      <!-- Section 12 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section12.heading') }}</h3>
        <p>{{ t('blog.section12.content') }}</p>
      </div>

      <!-- Image 07 -->
      <figure class="w-full">
        <ImageGallery :images="['/images/blog/2025/20250106_02/20250106_02_07.png']"/>
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image7Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 13 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section13.heading') }}</h3>
        <p>{{ t('blog.section13.content') }}</p>
      </div>

      <!-- Section 14 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section14.heading') }}</h3>
        <p>{{ t('blog.section14.content') }}</p>
      </div>

      <!-- Section 15 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section15.heading') }}</h3>
        <p>{{ t('blog.section15.content') }}</p>
      </div>

      <!-- Section 16 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section16.heading') }}</h3>
        <p>{{ t('blog.section16.content') }}</p>
      </div>

      <!-- Image 08 -->
      <figure class="w-full">
        <ImageGallery :images="['/images/blog/2025/20250106_02/20250106_02_08.png']"/>
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image8Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 17 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section17.heading') }}</h3>
        <p>{{ t('blog.section17.content') }}</p>
      </div>

      <!-- Section 18 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section18.heading') }}</h3>
        <p>{{ t('blog.section18.content') }}</p>
      </div>

      <!-- Section 19 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section19.heading') }}</h3>
        <p>{{ t('blog.section19.content') }}</p>
      </div>

      <!-- Section 20 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section20.heading') }}</h3>
        <p>{{ t('blog.section20.content') }}</p>
      </div>

      <!-- Image 09 -->
      <figure class="w-full">
        <ImageGallery :images="['/images/blog/2025/20250106_02/20250106_02_09.png']"/>
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image9Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 21 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section21.heading') }}</h3>
        <p>{{ t('blog.section21.content') }}</p>
      </div>

      <!-- Image 10 -->
      <figure class="w-full">
        <ImageGallery :images="['/images/blog/2025/20250106_02/20250106_02_10.png']"/>
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image10Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 22 -->
      <div class="blog-highlight">
        <span class="font-semibold text-white">
          {{ t('blog.section22.heading') }}
        </span>
        {{ t('blog.section22.content') }}
      </div>

      <!-- Tags + Share -->
      <div class="blog-section flex flex-col gap-6">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in ['Book', 'Atomic Habits']"
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
