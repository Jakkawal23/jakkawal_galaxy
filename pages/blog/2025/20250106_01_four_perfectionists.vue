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
  const messages = await import(`~/locales/blogs/20250106_01_four_perfectionists.${lang}.json`)
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
        <img
          src="/images/blog/2025/20250106_01/20250106_01_01.png"
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

      <!-- Image 02 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_02.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
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
        <img
          src="/images/blog/2025/20250106_01/20250106_01_03.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
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
        <img
          src="/images/blog/2025/20250106_01/20250106_01_04.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image4Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 4 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section4.heading') }}</h3>
        <p>{{ t('blog.section4.content01') }}</p>
        <p>{{ t('blog.section4.content02') }}</p>
        <p>{{ t('blog.section4.content03') }}</p>
        <p>{{ t('blog.section4.content04') }}</p>
        <p>{{ t('blog.section4.content05') }}</p>
      </div>

      <!-- Image 05 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_05.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
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

      <!-- Image 06 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_06.png"
          alt="INTERNET OF THINGS"
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

      <!-- Image 07 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_07.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image7Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 8 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section8.heading') }}
        </h3>
        <p>
          {{ t('blog.section8.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section8.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 08 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_08.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image8Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 9 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section9.heading') }}</h3>
        <p>{{ t('blog.section9.content01') }}</p>
        <p>{{ t('blog.section9.content02') }}</p>
      </div>

      <!-- Section 10 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section10.heading') }}
        </h3>
        <p>
          {{ t('blog.section10.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section10.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 09 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_09.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image9Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 11 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section11.heading') }}
        </h3>
        <p>
          {{ t('blog.section11.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section11.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 10 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_10.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image10Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 12 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section12.heading') }}
        </h3>
        <p>
          {{ t('blog.section12.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section12.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 11 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_11.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image11Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 13 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section13.heading') }}
        </h3>
        <p>
          {{ t('blog.section13.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section13.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 12 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_12.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image12Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 14 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section14.heading') }}
        </h3>
        <p>
          {{ t('blog.section14.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section14.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Section 15 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section15.heading') }}</h3>
        <p>{{ t('blog.section15.content') }}</p>
      </div>

      <!-- Image 13 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_13.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image13Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 16 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section16.heading') }}</h3>
        <p>{{ t('blog.section16.content') }}</p>
      </div>

      <!-- Image 14 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_14.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image14Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 17 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section17.heading') }}</h3>
        <p>{{ t('blog.section17.content') }}</p>
      </div>

      <!-- Section 18 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section18.heading') }}
        </h3>
        <p>
          {{ t('blog.section18.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section18.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Section 19 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section10.heading') }}
        </h3>
        <p>
          {{ t('blog.section19.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section19.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 15 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_15.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image15Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 20 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section20.heading') }}</h3>
        <p>{{ t('blog.section20.content') }}</p>
      </div>

      <!-- Section 21 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section21.heading') }}</h3>
        <p>{{ t('blog.section20.content') }}</p>
      </div>

      <!-- Section 22 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section22.heading') }}</h3>
        <p>{{ t('blog.section22.content') }}</p>
      </div>

      <!-- Section 23 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section23.heading') }}</h3>
        <p>{{ t('blog.section23.content') }}</p>
      </div>

      <!-- Section 24 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section24.heading') }}</h3>
        <p>{{ t('blog.section24.content') }}</p>
      </div>

      <!-- Image 16 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_16.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image16Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 25 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section25.heading') }}
        </h3>
        <p>
          {{ t('blog.section25.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section25.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 17 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_17.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image17Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 26 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section26.heading') }}
        </h3>
        <p>
          {{ t('blog.section26.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section26.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 18 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_18.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image18Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 27 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section27.heading') }}
        </h3>
        <p>
          {{ t('blog.section27.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section27.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 19 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_19.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image19Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 28 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section28.heading') }}
        </h3>
        <p>
          {{ t('blog.section28.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section28.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 20 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_20.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image20Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 29 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section29.heading') }}</h3>
        <p>{{ t('blog.section29.content') }}</p>
      </div>

      <!-- Image 21 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_21.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image21Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 30 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section30.heading') }}
        </h3>
        <p>
          {{ t('blog.section30.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section30.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 22 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_22.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image22Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 31 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section31.heading') }}
        </h3>
        <p>
          {{ t('blog.section31.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section31.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 23 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_23.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image23Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 32 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section32.heading') }}
        </h3>
        <p>
          {{ t('blog.section32.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section32.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 24 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_24.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image24Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 33 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section33.heading') }}
        </h3>
        <p>
          {{ t('blog.section33.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section33.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 25 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_25.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image25Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 34 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section34.heading') }}
        </h3>
        <p>
          {{ t('blog.section34.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section34.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 26 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_26.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image26Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 35 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section35.heading') }}</h3>
        <p>{{ t('blog.section35.content') }}</p>
      </div>

      <!-- Section 36 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section36.heading') }}
        </h3>
        <p>
          {{ t('blog.section36.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section36.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Section 37 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section37.heading') }}
        </h3>
        <p>
          {{ t('blog.section37.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section37.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Section 38 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section38.heading') }}
        </h3>
        <p>
          {{ t('blog.section38.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section38.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Section 39 -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          {{ t('blog.section39.heading') }}
        </h3>
        <p>
          {{ t('blog.section39.description') }}
        </p>

        <ul class="blog-list pl-4">
          <li v-for="(item, i) in tm('blog.section39.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Image 27 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250106_01/20250106_01_27.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.image27Description') }}</p>
        </figcaption>
      </figure>

      <!-- Section 40 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section40.heading') }}</h3>
        <p>{{ t('blog.section40.content') }}</p>
      </div>

      <!-- Section 41 -->
      <div class="blog-highlight">
        <span class="font-semibold text-white">
          {{ t('blog.section41.heading') }}
        </span>
        {{ t('blog.section41.content') }}
      </div>

      <!-- Tags + Share -->
      <div class="blog-section flex flex-col gap-6">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in ['Book', 'Four Perfectionists']"
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
