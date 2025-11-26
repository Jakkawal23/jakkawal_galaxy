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
  const messages = await import(`~/locales/activity/example-activity-post.${lang}.json`)
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
  <article class="activity-detail active text-gray-200" data-page="activity-detail">
    <div class="sticky top-0 backdrop-blur-sm py-3 px-4 z-20">
      <button
        @click="goBack"
        class="activity-back-btn flex items-center gap-2 text-gray-300 hover:text-white transition mb-2"
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
    <section class="activity-content px-4 md:px-12 lg:px-32 py-10 space-y-12">


    </section>
  </article>
</template>
