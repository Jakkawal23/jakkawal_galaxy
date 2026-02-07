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

// Define your logos array
const partnerLogos = Array.from({ length: 5 }, (_, i) => ({
  src: `/images/partner-logo-${i + 1}.png`,
  alt: `Partner Logo ${i + 1}`
}))
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
      <AutoScrollList
        :items="highlightProjects"
        :locale="locale"
        base-path="/project"
      />
    </section>

    <!-- Highlight Activity -->
    <section class="testimonials">
      <h3 class="h3 testimonials-title">
        {{ $t('about.highlightActivityTitle') }}
      </h3>
      <AutoScrollList
        :items="highlightActivites"
        :locale="locale"
        base-path="/activity"
      />
    </section>

    <!-- Highlight Award -->
    <section class="testimonials">
      <h3 class="h3 testimonials-title">
        {{ $t('about.highlightAwardTitle') }}
      </h3>
      <AutoScrollList
        :items="highlightAward"
        :locale="locale"
        base-path="/activity"
      />
    </section>

    <!-- Soft Skills -->
    <section class="resume-section">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="people-outline" />
        </div>
        <h3 class="h3">Soft Skills</h3>
      </div>
      <ul class="tag-list">
        <li
          v-for="skill in [
            'Problem Solving',
            'Team Leadership',
            'Product Planning',
            'Public Speaking',
            'Growth Mindset ',
            'Teamwork',
            'Communication',
            'Time Management',
          ]"
          :key="skill"
        >
          {{ skill }}
        </li>
      </ul>
    </section>

    <!-- Technical Skills -->
    <section class="resume-section">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="code-slash-outline" />
        </div>
        <h3 class="h3">Technical Skills</h3>
      </div>
      <ul class="tag-list">
        <li
          v-for="tech in [
            'JavaScript',
            'TypeScript',
            'Python',
            'Node.js',
            'C',
            'C#',
            'Dart',
            'Angular',
            'Vue',
            '.NET',
            'Flutter',
            'PostgreSQL',
            'SQL Server',
            'NoSQL',
          ]"
          :key="tech"
        >
          {{ tech }}
        </li>
      </ul>
    </section>

    <!-- Tools & Platforms -->
    <section class="resume-section">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="hammer-outline" />
        </div>
        <h3 class="h3">Tools & Platforms</h3>
      </div>
      <ul class="tag-list">
        <li
          v-for="tool in [

            'Docker',
            'Git',
            'Postman',
            'Figma',
            'Firebase',
            'Vercel',
            'Notion',
            'Jira',
            'ClickUp',
          ]"
          :key="tool"
        >
          {{ tool }}
        </li>
      </ul>
    </section>

    <!-- clients -->
    <section class="clients">
      <h3 class="h3 clients-title">
        {{ $t('about.clientsTitle') }}
      </h3>
      <AutoScrollLogos :images="partnerLogos" />
    </section>
  </article>
</template>
