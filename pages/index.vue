<script setup>
import { useI18n } from 'vue-i18n'

useHead({})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Testimonials */
const { data: testimonials } = await useFetch('/api/about/testimonials')

const testimonialItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showTestimonial(id) {
  testimonialItem.value = testimonials.value.find(item => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeTestimonaial() {
  testimonialItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}

/* Services */
const { data: services } = await useFetch('/api/about/services')
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <!-- about text -->
    <section class="about-text">
      <p>{{ $t('about.intro1') }}</p>
      <p>{{ $t('about.intro2') }}</p>
    </section>

    <!-- services -->
    <section class="service">
      <h3 class="h3 service-title">
        {{ $t('about.servicesTitle') }}
      </h3>

      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>

    <!-- testimonials -->
    <section class="testimonials">
      <h3 class="h3 testimonials-title">
        {{ $t('about.testimonialsTitle') }}
      </h3>

      <ul class="testimonials-list has-scrollbar">
        <li
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="testimonials-item"
          @click="showTestimonial(testimonial.id)"
        >
          <div class="content-card">
            <figure class="testimonials-avatar-box">
              <img :src="testimonial.image" alt="Daniel lewis" width="60">
            </figure>

            <h4 class="h4 testimonials-item-title">
              {{ testimonial.title?.[locale] || testimonial.title?.en }}
            </h4>

            <div class="testimonials-text">
              <p>
                {{ testimonial.content?.[locale] || testimonial.content?.en }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <!-- testimonial modal -->
    <div class="modal-container" :class="{ active: activeModal }">
      <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" />

      <section class="testimonials-modal">
        <button class="modal-close-btn" @click="closeTestimonaial">
          <ion-icon name="close-outline" />
        </button>

        <div class="flex gap-5 mb-5 justify-start items-center">
          <div class="modal-avatar-box">
            <img :src="testimonialItem.image" alt="Daniel lewis" width="80">
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title">
              {{ testimonialItem.title }}
            </h4>
            <time datetime="2021-06-14">{{ $t('about.sampleDate') }}</time>
          </div>
        </div>

        <div class="flex gap-5 items-start">
          <img class="my-auto hidden md:block" src="/images/icon-quote.svg" alt="quote icon">
          <p
            class="text-justify text-gray-400 text-sm md:text-md"
            v-html="locale === 'en' ? testimonialItem.content?.en : testimonialItem.content?.th"
          />
        </div>
        <div class="mt-2 flex justify-end text-sm text-gray-600 italic">
          {{ $t('about.companyName') }}
        </div>
      </section>
    </div>

    <!-- clients -->
    <section class="clients">
      <h3 class="h3 clients-title">
        {{ $t('about.clientsTitle') }}
      </h3>

      <ul class="clients-list has-scrollbar">
        <li class="clients-item" v-for="n in 5" :key="n">
          <a href="#">
            <img :src="`/images/partner-logo-${n}.png`" :alt="$t('about.clientAlt', { number: n })">
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>
