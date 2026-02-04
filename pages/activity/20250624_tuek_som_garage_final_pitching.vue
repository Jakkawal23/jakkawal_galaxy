<script setup>
import { useI18n } from 'vue-i18n'
// import { useRouter } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
useHead({
  title: 'Activity Detail',
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

const loadActivityLocale = async (lang) => {
  const messages = await import(`~/locales/activity/20250624_tuek_som_garage_final_pitching.${lang}.json`)
  mergeLocaleMessage(lang, { activity: messages.default })
}

onMounted(() => {
  loadActivityLocale(locale.value)
})

watch(locale, (newLang) => {
  loadActivityLocale(newLang)
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
        <p>{{ t('activity.title') }}</p>
      </h2>
    </header>

    <!-- SECTION -->
    <section class="blog-content px-4 md:px-12 lg:px-32 py-10 space-y-12">

      <!-- Image 1 -->
      <figure class="w-full">
        <img
          src="/images/activity/20250624/20250624_01.png"
          alt="INTERNET OF THINGS"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t("activity.image1Description") }}</p>
        </figcaption>
      </figure>

      <!-- Section 1 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t("activity.section1.heading") }}</h3>
        <p>{{ t("activity.section1.content") }}</p>
      </div>

      <!-- Section 2 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t("activity.section2.heading") }}</h3>
        <p>{{ t("activity.section2.content") }}</p>
      </div>

      <!-- Section 3 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t("activity.section3.heading") }}</h3>
        <p>{{ t("activity.section3.content") }}</p>
      </div>

      <!-- Section 4 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t("activity.section4.heading") }}</h3>
        <p>{{ t("activity.section4.content") }}</p>
      </div>

      <!-- Image Grid -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('activity.gallery.heading') }}</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <!-- <img src="/images/activity/20250624/20250624_02.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250624/20250624_03.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250624/20250624_04.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250624/20250624_05.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250624/20250624_06.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250624/20250624_07.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250624/20250624_08.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250624/20250624_09.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250624/20250624_10.png" class="rounded-lg object-cover" /> -->
        </div>
      </div>

      <!-- Tags + Share -->
      <div class="blog-section flex flex-col gap-6">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in [
              'กิจกรรม',
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
