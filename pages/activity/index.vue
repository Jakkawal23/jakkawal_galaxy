<script setup>
import { useI18n } from 'vue-i18n'

useHead({
  title: 'Activity',
})

const { locale } = useI18n({ useScope: 'global' })
const { data: activities } = await useFetch('/api/activity/activities')
const { data: categories } = await useFetch('/api/activity/activityCategories')

const activityList = [...activities.value]
const activeCategory = ref(0)
const filterMenu = ref(false)
const activeCategoryName = ref('')


function changeFilter(id) {
  activeCategory.value = id
  if (id !== 0)
    activeCategoryName.value = categories.value.find(item => item.id === id).title

  filterMenu.value = !filterMenu.value
}
</script>

<template>
  <article class="activity active" data-page="activity">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.activity') }}
      </h2>
    </header>

    <section class="activity-posts">
      <ul class="filter-list">
        <li class="filter-item">
          <button :class="{ active: activeCategory === 0 }" @click="changeFilter(0)">
            <p>{{ $t('all.all') }}</p>
          </button>
        </li>

        <li v-for="category in categories" :key="category.id" class="filter-item" @click="changeFilter(category.id)">
          <button :class="{ active: activeCategory === category.id }">
            {{ locale === 'en' ? category.title?.en : category.title?.th }}
          </button>
        </li>
      </ul>

      <div class="filter-select-box">
        <button :class="{ active: filterMenu }" class="filter-select" @click="filterMenu = !filterMenu">
          <div class="select-value">
            {{ activeCategory !== 0 ? (locale === 'en' ? activeCategoryName?.en : activeCategoryName?.th) : 'Select Category' }}
          </div>

          <div class="select-icon">
            <ion-icon name="chevron-down" />
          </div>
        </button>

        <ul class="select-list">
          <li class="select-item">
            <button @click="changeFilter(0)">
              <p>{{ $t('all.all') }}</p>
            </button>
          </li>

          <li v-for="category in categories" :key="category.id" class="select-item">
            <button @click="changeFilter(category.id)">
              {{ locale === 'en' ? category.title?.en : category.title?.th }}
            </button>
          </li>
        </ul>
      </div>

      <ul class="activity-posts-list">
        <li
          v-for="activity in activityList"
          :key="activity.id"
          :class="{ active: activeCategory === 0 || activity.categories.some(c => c.id === activeCategory) }"
          class="activity-post-item"
        >
          <NuxtLink :to="`/activity/${activity.slug}`">
            <figure class="activity-banner-box">
              <img :src="activity.image" :alt="activity.title[locale]" loading="lazy" />
            </figure>
          
            <div class="activity-content">
              <div class="activity-meta">
                <p class="activity-category">
                  <span v-for="(cat, index) in activity.categories" :key="cat.id">
                    {{ locale === 'en' ? cat.title.en : cat.title.th }}
                  </span>
                </p>

                <span class="dot" />

                <time :datetime="activity.date">
                  {{ new Date(activity.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
                </time>
              </div>

              <h3 class="h3 activity-item-title">{{ activity.title[locale] }}</h3>

              <p class="activity-text">{{ activity.description[locale] }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </article>
</template>
