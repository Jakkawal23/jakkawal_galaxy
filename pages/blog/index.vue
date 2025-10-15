<script setup>
import { useI18n } from 'vue-i18n'

useHead({
  title: 'Blog',
})

const { locale } = useI18n({ useScope: 'global' })
const { data: blogs } = await useFetch('/api/blog/blogs')
const { data: categories } = await useFetch('/api/blog/blogCategories')

const blogList = [...blogs.value]
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
  <article class="blog active" data-page="blog">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.blog') }}
      </h2>
    </header>

    <section class="blog-posts">
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

      <ul class="blog-posts-list">
        <li
          v-for="blog in blogList"
          :key="blog.id"
          :class="{ active: activeCategory === 0 || blog.categories.some(c => c.id === activeCategory) }"
          class="blog-post-item"
        >
          <NuxtLink :to="`/blog/${blog.slug}`">
            <figure class="blog-banner-box">
              <img :src="blog.image" :alt="blog.title[locale]" loading="lazy" />
            </figure>
          
            <div class="blog-content">
              <div class="blog-meta">
                <p class="blog-category">
                  <span v-for="(cat, index) in blog.categories" :key="cat.id">
                    {{ locale === 'en' ? cat.title.en : cat.title.th }}
                  </span>
                </p>

                <span class="dot" />

                <time :datetime="blog.date">
                  {{ new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
                </time>
              </div>

              <h3 class="h3 blog-item-title">{{ blog.title[locale] }}</h3>

              <p class="blog-text">{{ blog.description[locale] }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </article>
</template>
