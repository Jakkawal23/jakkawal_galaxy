<script setup>
import { useI18n } from 'vue-i18n'
// import { useRouter } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
useHead({
  title: 'Project Detail',
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

const loadProjectLocale = async (lang) => {
  const messages = await import(`~/locales/project/20251028_yunnan_homestay_seo_web.${lang}.json`)
  mergeLocaleMessage(lang, { project: messages.default })
}

onMounted(() => {
  loadProjectLocale(locale.value)
})

watch(locale, (newLang) => {
  loadProjectLocale(newLang)
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
        <p>{{ t('project.title') }}</p>
      </h2>
    </header>

    <!-- SECTION -->
    <section class="blog-content px-4 md:px-12 lg:px-32 py-10 space-y-12">

      <!-- Image 1 -->
      <figure class="w-full">
        <img
          src="/images/project/20251028/20251028_01.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t("project.image1Description") }}</p>
        </figcaption>
      </figure>

      <!-- Section 1 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t("project.section1.heading") }}</h3>
        <p>{{ t("project.section1.content") }}</p>
      </div>

      <!-- Section 2 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t("project.section2.heading") }}</h3>
        <p>{{ t("project.section2.content") }}</p>
      </div>

      <!-- Section 3 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t("project.section3.heading") }}</h3>
        <p>{{ t("project.section3.content") }}</p>
      </div>

      <!-- Section 4 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t("project.section4.heading") }}</h3>
        <p>{{ t("project.section4.content") }}</p>
      </div>

      <!-- Image Grid -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('project.gallery.heading') }}</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/images/project/20251028/20251028_02.png" class="rounded-lg object-cover" />
          <img src="/images/project/20251028/20251028_03.png" class="rounded-lg object-cover" />
          <img src="/images/project/20251028/20251028_04.png" class="rounded-lg object-cover" />
          <img src="/images/project/20251028/20251028_05.png" class="rounded-lg object-cover" />
          <img src="/images/project/20251028/20251028_06.png" class="rounded-lg object-cover" />
          <img src="/images/project/20251028/20251028_07.png" class="rounded-lg object-cover" />
          <img src="/images/project/20251028/20251028_08.png" class="rounded-lg object-cover" />
          <img src="/images/project/20251028/20251028_09.png" class="rounded-lg object-cover" />
          <img src="/images/project/20251028/20251028_10.png" class="rounded-lg object-cover" />
        </div>
      </div>

      <!-- Tags + Share -->
      <div class="blog-section flex flex-col gap-6">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in [
              'เลขบัตรประชาชน',
              'บัตรประชาชน',
            ]"
            :key="tag"
            class="blog-tag"
          >
            #{{ tag }}
          </span>
        </div>

        <div class="flex items-center gap-4">
          <span class="text-gray-400 text-sm">{{ $t("all.share") }}:</span>
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
