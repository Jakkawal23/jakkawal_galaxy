<script setup>
import { useI18n } from 'vue-i18n'

useHead({})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Highlight */
const { data: highlightProjects } = await useFetch('/api/about/highlightProjects')
const { data: highlightActivites } = await useFetch('/api/about/highlightActivites')
const { data: highlightAward } = await useFetch('/api/about/highlightAward')

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

    <!-- Highlight Projects -->
    <section class="testimonials">
      <h3 class="h3 testimonials-title">
        {{ $t('about.highlightProjectTitle') }}
      </h3>

      <ul class="testimonials-list has-scrollbar">
        <li
          v-for="project in highlightProjects"
          :key="project.id"
          class="testimonials-item"
        >
          <NuxtLink :to="`/project/${project.slug}`" class="content-card">
            <figure class="testimonials-avatar-box">
              <img :src="project.image" alt="Daniel lewis" width="60">
            </figure>

            <h4 class="h4 testimonials-item-title">
              {{ project.title?.[locale] || project.title?.en }}
            </h4>

            <div class="testimonials-text">
              <p>
                {{ project.content?.[locale] || project.content?.en }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <!-- Highlight Activity -->
    <section class="testimonials">
      <h3 class="h3 testimonials-title">
        {{ $t('about.highlightActivityTitle') }}
      </h3>

      <ul class="testimonials-list has-scrollbar">
        <li
          v-for="activity in highlightActivites"
          :key="activity.id"
          class="testimonials-item"
        >
          <NuxtLink :to="`/project/${activity.slug}`" class="content-card">
            <figure class="testimonials-avatar-box">
              <img :src="activity.image" alt="Daniel lewis" width="60">
            </figure>

            <h4 class="h4 testimonials-item-title">
              {{ activity.title?.[locale] || activity.title?.en }}
            </h4>

            <div class="testimonials-text">
              <p>
                {{ activity.content?.[locale] || activity.content?.en }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <!-- Highlight Award -->
    <section class="testimonials">
      <h3 class="h3 testimonials-title">
        {{ $t('about.highlightAwardTitle') }}
      </h3>

      <ul class="testimonials-list has-scrollbar">
        <li
          v-for="award in highlightAward"
          :key="award.id"
          class="testimonials-item"
        >
          <NuxtLink :to="`/project/${award.slug}`" class="content-card">
            <figure class="testimonials-avatar-box">
              <img :src="award.image" alt="Daniel lewis" width="60">
            </figure>

            <h4 class="h4 testimonials-item-title">
              {{ award.title?.[locale] || award.title?.en }}
            </h4>

            <div class="testimonials-text">
              <p>
                {{ award.content?.[locale] || award.content?.en }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <!-- clients -->
    <section class="clients">
      <h3 class="h3 clients-title">
        {{ $t('about.clientsTitle') }}
      </h3>

      <ul class="clients-list has-scrollbar">
        <li v-for="n in 5" :key="n" class="clients-item">
          <a href="#">
            <img :src="`/images/partner-logo-${n}.png`" :alt="$t('about.clientAlt', { number: n })">
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>
