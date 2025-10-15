<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/my-avatar.png" alt="Jakkawal Phooluemsai" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Jakkawal Phooluemsai">
          Jakkawal Phooluemsai
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-[''] after:content-[',']">Software Developer</span>
          <span>Content Creator</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>
        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Email
            </p>

            <a href="mailto:jakkawal.phooluemsai@gmail.com" class="contact-link">jakkawal.phooluemsai@gmail.com</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/jakkawal23" class="contact-link" target="_blank">jakkawal23</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://tr.linkedin.com/in/jakkawal-p" class="contact-link" target="_blank">Jakkawal Phooluemsai</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Bankok, Thailand</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="https://www.instagram.com/jakkawal_galaxy" class="social-link" target="_blank">
            <ion-icon name="logo-instagram" />
          </NuxtLink>
        </li>

        <li class="social-item">
          <NuxtLink to="https://www.instagram.com/jakkawal_galaxy" class="social-link" target="_blank">
            <ion-icon name="logo-facebook" />
          </NuxtLink>
        </li>

        <li class="social-item">
          <NuxtLink to="https://www.instagram.com/jakkawal_galaxy" class="social-link" target="_blank">
            <ion-icon name="logo-tiktok" />
          </NuxtLink>
        </li>

        <li class="social-item">
          <NuxtLink to="https://www.instagram.com/jakkawal_galaxy" class="social-link" target="_blank">
            <ion-icon name="logo-youtube" />
          </NuxtLink>
        </li>

        <li class="social-item">
          <NuxtLink to="https://www.twitter.com/jakkawal_galaxy" class="social-link" target="_blank">
            <ion-icon name="logo-twitter" />
          </NuxtLink>
        </li>

        <li class="social-item">
          <NuxtLink to="https://www.instagram.com/jakkawal_galaxy" class="social-link" target="_blank">
            <ion-icon name="logo-medium" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
