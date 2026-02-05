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
  const messages = await import(`~/locales/blogs/2025/20250107_01_check_tin_id.${lang}.json`)
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
          src="/images/blog/2025/20250107_01/20250107_01_01.png"
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
        <p>{{ t('blog.section2.content01') }}</p>
        <p>{{ t('blog.section2.content02') }}</p>
        <p>{{ t('blog.section2.content03') }}</p>
        <p>{{ t('blog.section2.content04') }}</p>
      </div>

      <!-- Image 2 -->
      <figure class="w-full">
        <img
          src="/images/blog/2025/20250107_01/20250107_01_02.png"
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

      <!-- Section 4 -->
      <div class="blog-section">
        <h3 class="blog-section-title">{{ t('blog.section4.heading') }}</h3>
        <p>{{ t('blog.section4.content') }}</p>
      </div>

      <!-- Code Example Section -->
      <div class="blog-section my-8">
        <h3 class="blog-section-title text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          {{ t('blog.section5.heading') }}
        </h3>
        
        <!-- Content 01 -->
        <div class="relative bg-gray-900 text-gray-100 rounded-xl shadow-md overflow-hidden">
          <!-- Header bar (เหมือน code editor) -->
          <div class="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span class="w-3 h-3 rounded-full bg-red-500"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span class="w-3 h-3 rounded-full bg-green-500"></span>
            <span class="ml-3 text-sm text-gray-400">{{ t('blog.section5.content01') }}</span>
          </div>

          <!-- Code content -->
          <pre class="p-4 overflow-x-auto text-sm leading-relaxed">
            <code class="language-python">
def check_id(value: str) -> bool:
  if len(value) == 13 and value.isdigit():
      check_sum = 0
      for i in range(len(value) - 1):
          check_sum += int(value[i]) * (13 - i)
      check_digit = (11 - (check_sum % 11)) % 10
      return check_digit == int(value[12])
  return False
            </code>
          </pre>
        </div>

        <!-- Content 02 -->
        <div class="relative bg-gray-900 text-gray-100 rounded-xl shadow-md overflow-hidden">
          <!-- Header bar (เหมือน code editor) -->
          <div class="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span class="w-3 h-3 rounded-full bg-red-500"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span class="w-3 h-3 rounded-full bg-green-500"></span>
            <span class="ml-3 text-sm text-gray-400">{{ t('blog.section5.content02') }}</span>
          </div>

          <!-- Code content -->
          <pre class="p-4 overflow-x-auto text-sm leading-relaxed">
            <code class="language-python">
private bool CheckID(string id)
{
  if (id.Length == 13 && id.All(char.IsDigit))
  {
      int sum = 0;
      for (int i = 0; i < id.Length - 1; i++)
      {
          sum += int.Parse(id[i].ToString()) * (13 - i);
      }
      int checkDigit = (11 - (sum % 11)) % 10;

      return checkDigit == int.Parse(id[12].ToString());
  }
  return true;
}
            </code>
          </pre>
        </div>

        <!-- Content 03 -->
        <div class="relative bg-gray-900 text-gray-100 rounded-xl shadow-md overflow-hidden">
          <!-- Header bar (เหมือน code editor) -->
          <div class="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span class="w-3 h-3 rounded-full bg-red-500"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span class="w-3 h-3 rounded-full bg-green-500"></span>
            <span class="ml-3 text-sm text-gray-400">{{ t('blog.section5.content03') }}</span>
          </div>

          <!-- Code content -->
          <pre class="p-4 overflow-x-auto text-sm leading-relaxed">
            <code class="language-python">
export function CheckID(value) {
  if(value.length == 13){
      let checkSum = 0;
      for (let i = 0; i < value.length - 1; i++) {
          checkSum = checkSum + (Number(value[i]) * (value.length - i));
      }
      let result = (11 - (checkSum % 11)) % 10;
      return result === Number(value[12]);
  }
  return false;
}
            </code>
          </pre>
        </div>
      </div>

      <!-- Section 6 -->
      <div class="blog-highlight">
        <span class="font-semibold text-white">
          {{ t('blog.section6.heading') }}
        </span>
        {{ t('blog.section6.content') }}
      </div>

      <!-- Tags + Share -->
      <div class="blog-section flex flex-col gap-6">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in ['เลขบัตรประชาชน', 'บัตรประชาชน', 'เลขประจำตัวผู้เสียภาษี', 'ตรวจสอบเลขบัตรประชาชน']"
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
