<script setup>

</script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">
          {{ $t('pageTitles.about') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/resume" class="navbar-link">
          {{ $t('pageTitles.resume') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/portfolio" class="navbar-link">
          {{ $t('pageTitles.portfolio') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/project" class="navbar-link">
          {{ $t('pageTitles.project') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/activity" class="navbar-link">
          {{ $t('pageTitles.activity') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/blog" class="navbar-link">
          {{ $t('pageTitles.blog') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/contact" class="navbar-link">
          {{ $t('pageTitles.contact') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <!-- <NuxtLink to="/contact" class="navbar-link">
          {{ $t('pageTitles.contact') }}
        </NuxtLink> -->
        <LangSwitcher2 />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: var(--vegas-gold);
}
</style>
