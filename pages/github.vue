<script setup>
import { ref, watch, computed } from 'vue'

useHead({
  title: 'GitHub Explorer',
})

// 1. รายชื่อ GitHub Usernames ที่คุณต้องการจัดการ
const userList = ref([
  { id: 1, name: 'Jakkawal23', username: 'Jakkawal23' },
  { id: 2, name: 'Jakkawal-p', username: 'Jakkawal-p' }
])

const selectedUser = ref(userList.value[0]) // เริ่มที่ User แรก
const allRepos = ref([])
const isLoading = ref(false)

// 2. Pagination Logic
const currentPage = ref(1)
const itemsPerPage = 5 // แสดงกี่รายการต่อหน้า

// ดึงข้อมูล Repositories ของ User ที่เลือก
const fetchUserRepos = async (username) => {
  isLoading.value = true
  allRepos.value = [] // ล้างข้อมูลเก่า
  currentPage.value = 1 // รีเซ็ตหน้ากลับไปที่ 1

  try {
    // ดึงข้อมูลทั้งหมด (จำกัด 100 รายการแรกเพื่อความเร็ว)
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
    const data = await response.json()
    
    if (Array.isArray(data)) {
      allRepos.value = data
    }
  } catch (error) {
    console.error("Error fetching repos:", error)
  } finally {
    isLoading.value = false
  }
}

// เฝ้าดูการเปลี่ยน User แล้วดึงข้อมูลใหม่ทันที
watch(selectedUser, (newVal) => {
  if (newVal) fetchUserRepos(newVal.username)
}, { immediate: true })

// คำนวณข้อมูลที่จะแสดงในแต่ละหน้า
const paginatedRepos = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return allRepos.value.slice(start, end)
})

const totalPages = computed(() => Math.ceil(allRepos.value.length / itemsPerPage))

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    // เลื่อนหน้าจอกลับขึ้นไปด้านบนของลิสต์เพื่อ UX ที่ดี
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <article class="contact active" data-page="contact">
    <header>
      <h2 class="h2 article-title">GitHub</h2>
    </header>

    <section class="user-selector">
      <button 
        v-for="user in userList" 
        :key="user.id"
        :class="['user-tab', { active: selectedUser.id === user.id }]"
        @click="selectedUser = user"
      >
        <ion-icon name="person-circle-outline"></ion-icon>
        {{ user.name }}
      </button>
    </section>

    <section class="repo-section">
      <div v-if="isLoading" class="loading-box">
        <div class="spinner"></div>
        <p>กำลังดึงข้อมูลจาก GitHub...</p>
      </div>

      <div v-else>
        <div v-if="allRepos.length === 0" class="empty-state">
          <ion-icon name="alert-circle-outline"></ion-icon>
          <p>ไม่มี public repo สำหรับผู้ใช้นี้</p>
        </div>

        <ul v-else class="repo-list">
          <li v-for="repo in paginatedRepos" :key="repo.id" class="repo-item shadow-1">
            <div class="repo-content">
              <div class="repo-info">
                <h4 class="h4">{{ repo.name }}</h4>
                <p class="description">{{ repo.description || 'No description provided.' }}</p>
                <div class="repo-tags">
                  <span v-if="repo.language" class="tag">{{ repo.language }}</span>
                  <span class="tag updated">Updated: {{ new Date(repo.updated_at).toLocaleDateString() }}</span>
                </div>
              </div>
              <a :href="repo.html_url" target="_blank" class="view-btn">
                <ion-icon name="logo-github"></ion-icon>
                <span>View</span>
              </a>
            </div>
          </li>
        </ul>

        <div v-if="totalPages > 1" class="pagination">
          <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="page-btn">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          
          <span class="page-info">หน้า {{ currentPage }} จาก {{ totalPages }}</span>
          
          <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="page-btn">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
/* Tabs เลือก User */
.user-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.user-tab {
  background: var(--onyx);
  color: var(--light-gray);
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid var(--jet);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  transition: 0.3s;
}

.user-tab.active {
  background: var(--vegas-gold);
  color: var(--eerie-black);
  border-color: var(--vegas-gold);
}

/* รายการ Repository */
.repo-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.repo-item {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 16px;
  padding: 20px;
  transition: transform 0.3s;
}

.repo-item:hover {
  transform: translateY(-3px);
}

.repo-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.repo-info .description {
  color: var(--light-gray-70);
  font-size: 14px;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.repo-tags {
  display: flex;
  gap: 10px;
}

.tag {
  background: var(--onyx);
  color: var(--vegas-gold);
  font-size: 11px;
  padding: 2px 10px;
  border-radius: 20px;
  border: 1px solid var(--jet);
}

.view-btn {
  background: var(--jet);
  color: var(--vegas-gold);
  padding: 10px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  min-width: 60px;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  padding-bottom: 20px;
}

.page-btn {
  background: var(--onyx);
  color: var(--vegas-gold);
  border: 1px solid var(--jet);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.page-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-info {
  color: var(--light-gray);
  font-size: 14px;
}

/* Loading & Empty */
.empty-state, .loading-box {
  text-align: center;
  padding: 50px;
  color: var(--light-gray-70);
}

.spinner {
  width: 30px;
  height: 30px;
  border: 3px solid var(--jet);
  border-top-color: var(--vegas-gold);
  border-radius: 50%;
  animation: spin 1s infinite linear;
  margin: 0 auto 15px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>