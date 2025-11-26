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

      <!-- Hero Image -->
      <figure class="w-full">
        <img
          src="/images/activity/20250717/20250717_02.png"
          alt="Activity Cover"
          class="rounded-2xl shadow-lg w-full object-cover activity-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('activity.imageDescription') }}</p>
        </figcaption>
      </figure>

      <figure class="w-full">
        <img
          src="/images/activity/20250717/20250717_03.png"
          alt="Activity Cover"
          class="rounded-2xl shadow-lg w-full object-cover activity-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('activity.imageDescription') }}</p>
        </figcaption>
      </figure>

      <!-- Introduction -->
      <div class="activity-section">
        <h3 class="activity-section-title">{{ t('activity.intro.heading') }}</h3>
        <p>{{ t('activity.intro.content') }}</p>
      </div>

      <!-- Sub Section with Icon -->
      <div class="activity-section">
        <h3 class="activity-section-title flex items-center gap-2">
          <ion-icon name="rocket-outline" class="text-sky-400"></ion-icon>
          {{ t('activity.gettingStarted.heading') }}
        </h3>
        <p>
          {{ t('activity.gettingStarted.description') }}
        </p>

        <ul class="activity-list">
          <li v-for="(item, i) in tm('activity.gettingStarted.list')" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Section 4 -->
      <div class="activity-section">
        <h3 class="activity-section-title">{{ t('activity.section4.heading') }}</h3>
        <p>{{ t('activity.section4.content01') }}</p>
        <p>{{ t('activity.section4.content02') }}</p>
        <p>{{ t('activity.section4.content03') }}</p>
      </div>

      <!-- Section 5 -->
      <div class="activity-section">
        <h3 class="activity-section-title">{{ t('activity.section5.heading') }}</h3>
        <p>{{ t('activity.section5.content01') }}</p>
        <p>{{ t('activity.section5.content02') }}</p>
      </div>

      <!-- Section 6 -->
      <div class="activity-section">
        <h3 class="activity-section-title flex items-center gap-2">
          {{ t('activity.section6.heading') }}
        </h3>
        <p>
          {{ t('activity.section6.description') }}
        </p>

        <ul class="activity-list pl-4">
          <li v-for="(item, i) in tm('activity.section6.list')" :key="i">
            • &nbsp;&nbsp;&nbsp; {{ item }}
          </li>
        </ul>
      </div>

      <!-- Highlight Box -->
      <div class="activity-highlight">
        💡 <span class="font-semibold text-white">{{ t('activity.highlightBox.heading') }}</span>
        {{ t('activity.highlightBox.content') }}
      </div>

      <!-- Quote -->
      <blockquote class="activity-quote">
        {{ t('activity.quote.heading') }}
        <span class="text-gray-400">— {{ t('activity.quote.content') }}</span>
      </blockquote>

      <!-- Sub Section -->
      <div class="activity-section">
        <h3 class="activity-section-title flex items-center gap-2">
          <ion-icon name="color-palette-outline" class="text-pink-400"></ion-icon>
          {{ t('activity.subSection.heading') }}
        </h3>
        <p>
          {{ t('activity.subSection.content') }}
        </p>
      </div>

      <!-- Table Example -->
      <div class="activity-section">
        <h3 class="activity-section-title">{{ t('activity.tableExample.heading') }}</h3>
        <div class="overflow-x-auto">
          <table class="activity-table w-full text-left border-collapse">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Vue 3</th>
                <th>React</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Setup</td>
                <td>Composition API</td>
                <td>Hooks</td>
              </tr>
              <tr>
                <td>Styling</td>
                <td>Scoped CSS</td>
                <td>CSS-in-JS</td>
              </tr>
              <tr>
                <td>Performance</td>
                <td>🚀 Fast</td>
                <td>⚡ Fast</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Image Grid -->
      <div class="activity-section">
        <h3 class="activity-section-title">{{ t('activity.gallery.heading') }}</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/images/activity/20250717/20250717_04.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250717/20250717_05.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250717/20250717_06.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250717/20250717_07.png" class="rounded-lg object-cover" />
        </div>
      </div>

      <div class="activity-section">
        <h3 class="activity-section-title">{{ t('activity.gallery.heading') }}</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/images/activity/20250717/20250717_08.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250717/20250717_09.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250717/20250717_10.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250717/20250717_11.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250717/20250717_12.png" class="rounded-lg object-cover" />
          <img src="/images/activity/20250717/20250717_13.png" class="rounded-lg object-cover" />
        </div>
      </div>

      <!-- Tags + Share -->
      <div class="activity-section flex flex-col gap-6">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in ['vue', 'tailwind', 'frontend', 'design', 'tutorial']"
            :key="tag"
            class="activity-tag"
          >
            #{{ tag }}
          </span>
        </div>

        <div class="flex items-center gap-4">
          <span class="text-gray-400 text-sm">{{ $t('all.share') }}:</span>
          <ion-icon name="logo-facebook" class="activity-icon"></ion-icon>
          <ion-icon name="logo-twitter" class="activity-icon"></ion-icon>
          <ion-icon name="logo-linkedin" class="activity-icon"></ion-icon>
        </div>
      </div>
    </section>
  </article>
</template>
