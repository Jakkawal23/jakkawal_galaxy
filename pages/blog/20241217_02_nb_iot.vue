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
  const messages = await import(`~/locales/blogs/example-blog-post.${lang}.json`)
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

      <!-- Hero Image -->
      <figure class="w-full">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200"
          alt="Blog Cover"
          class="rounded-2xl shadow-lg w-full object-cover blog-image"
        />
        <figcaption class="text-center text-gray-400 text-sm mt-2 italic">
          <p>{{ t('blog.imageDescription') }}</p>
        </figcaption>
      </figure>

      <!-- Introduction -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.intro.heading') }}</h3>
        <p>{{ t('blog.intro.content') }}</p>
      </div>

      <!-- Sub Section with Icon -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          <ion-icon name="rocket-outline" class="text-sky-400"></ion-icon>
          {{ t('blog.gettingStarted.heading') }}
        </h3>
        <p>
          {{ t('blog.gettingStarted.description') }}
        </p>

        <ul class="blog-list">
          <li v-for="(item, i) in tm('blog.gettingStarted.list')" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Code Example -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.codeExample.heading') }}</h3>
        <pre class="blog-code">
          <code class="language-js">
          // Example component setup
          export default {
            setup() {
              const message = ref('Hello Tailwind!')
              return { message }
            }
          }
          </code>
        </pre>
      </div>

      <!-- Highlight Box -->
      <div class="blog-highlight">
        💡 <span class="font-semibold text-white">{{ t('blog.highlightBox.heading') }}</span>
        {{ t('blog.highlightBox.content') }}
      </div>

      <!-- Quote -->
      <blockquote class="blog-quote">
        {{ t('blog.quote.heading') }}
        <span class="text-gray-400">— {{ t('blog.quote.content') }}</span>
      </blockquote>

      <!-- Sub Section -->
      <div class="blog-section">
        <h3 class="blog-section-title flex items-center gap-2">
          <ion-icon name="color-palette-outline" class="text-pink-400"></ion-icon>
          {{ t('blog.subSection.heading') }}
        </h3>
        <p>
          {{ t('blog.subSection.content') }}
        </p>
      </div>

      <!-- Table Example -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.tableExample.heading') }}</h3>
        <div class="overflow-x-auto">
          <table class="blog-table w-full text-left border-collapse">
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
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.gallery.heading') }}</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://picsum.photos/id/1015/400/250" class="rounded-lg object-cover" />
          <img src="https://picsum.photos/id/1016/400/250" class="rounded-lg object-cover" />
          <img src="https://picsum.photos/id/1018/400/250" class="rounded-lg object-cover" />
          <img src="https://picsum.photos/id/1021/400/250" class="rounded-lg object-cover" />
          <img src="https://picsum.photos/id/1022/400/250" class="rounded-lg object-cover" />
          <img src="https://picsum.photos/id/1023/400/250" class="rounded-lg object-cover" />
        </div>
      </div>

      <!-- Tags + Share -->
      <div class="blog-section flex flex-col gap-6">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in ['vue', 'tailwind', 'frontend', 'design', 'tutorial']"
            :key="tag"
            class="blog-tag"
          >
            #{{ tag }}
          </span>
        </div>

        <div class="flex items-center gap-4">
          <span class="text-gray-400 text-sm">{{ $t('all.share') }}:</span>
          <ion-icon name="logo-facebook" class="blog-icon"></ion-icon>
          <ion-icon name="logo-twitter" class="blog-icon"></ion-icon>
          <ion-icon name="logo-linkedin" class="blog-icon"></ion-icon>
        </div>
      </div>
    </section>
  </article>
</template>
