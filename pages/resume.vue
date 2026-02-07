<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });

const { data: education } = await useFetch("/api/resume/education");
const { data: experience } = await useFetch("/api/resume/experience");
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t("pageTitles.resume") }}
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>
        <h3 class="h3">Experience</h3>
      </div>

      <ol class="timeline-list">
        <li v-for="item in experience" :key="item.id" class="timeline-item">
          <h4 class="h4 timeline-item-title">{{ item.title[locale] }}</h4>
          <span>{{ item.period }}</span>
          <p v-if="item.description" class="timeline-text">{{ item.description[locale] }}</p>
          <p v-if="item.remark" class="timeline-text">{{ item.remark[locale] }}</p> 
          <ul v-if="item.content" class="timeline-sublist">
            <li v-for="(con, index) in item.content" :key="index" class="timeline-subitem">
              <span class="bullet">•</span> 
              
              <div class="subitem-content">
                <strong class="subitem-title">{{ con.title[locale] }} :</strong>
                <dev class="subitem-description">{{ con.description[locale] }}</dev>
              </div>
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>
        <h3 class="h3">Education</h3>
      </div>

      <ol class="timeline-list">
        <li v-for="item in education" :key="item.id" class="timeline-item">
          <h4 class="h4 timeline-item-title">{{ item.title[locale] }}</h4>
          <span>{{ item.period }}</span>
          <p v-if="item.description" class="timeline-text">{{ item.description[locale] }}</p>
          <p v-if="item.remark" class="timeline-text">{{ item.remark[locale] }}</p> 
          <ul v-if="item.content" class="timeline-sublist">
            <li v-for="(con, index) in item.content" :key="index" class="timeline-subitem">
              <span class="bullet">•</span> 
              
              <div class="subitem-content">
                <strong class="subitem-title">{{ con.title[locale] }} :</strong>
                <dev class="subitem-description">{{ con.description[locale] }}</dev>
              </div>
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <!-- Languages -->
    <section class="resume-section">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="chatbubbles-outline" />
        </div>
        <h3 class="h3">Languages</h3>
      </div>

      <ul class="language-list">
        <li class="language-item">
          <div class="language-header">
            <h4 class="h4 language-name">Thai (ภาษาไทย)</h4>
            <span class="language-level text-green-600 font-semibold">Native</span>
          </div>
          <p class="language-description">
            ภาษาหลักที่ใช้ในการสื่อสารในชีวิตประจำวัน
            ทั้งการพูดและเขียนอย่างเป็นทางการและไม่เป็นทางการ
          </p>
        </li>

        <li class="language-item">
          <div class="language-header">
            <h4 class="h4 language-name">English (ภาษาอังกฤษ)</h4>
            <span class="language-level text-blue-600 font-semibold">Fluent</span>
          </div>
          <p class="language-description">
            สามารถใช้ในการทำงานและสื่อสารได้อย่างคล่องแคล่ว ทั้งด้านเทคนิค การเขียนอีเมล
            และการประชุมระหว่างประเทศ
          </p>
        </li>

        <li class="language-item">
          <div class="language-header">
            <h4 class="h4 language-name">Chinese (ภาษาจีน)</h4>
            <span class="language-level text-yellow-600 font-semibold">Intermediate</span>
          </div>
          <p class="language-description">
            เข้าใจและสามารถสื่อสารในหัวข้อทั่วไป อ่านและเขียนตัวอักษรพื้นฐานได้ดี
            เหมาะสำหรับการสื่อสารเบื้องต้นกับเจ้าของภาษา
          </p>
        </li>
      </ul>
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

    <!-- <section class="skill">
      <h3 class="h3 skills-title">My skills</h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Web design</h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Graphic design</h5>
            <data value="70">70%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Branding</h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">WordPress</h5>
            <data value="50">50%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 50%" />
          </div>
        </li>
      </ul>
    </section> -->
  </article>
</template>

<style>
.timeline-sublist {
  list-style: none;
  padding: 0;
  margin-top: 10px; /* ระยะห่างจาก period หรือ description ด้านบน */
}

.timeline-subitem {
  display: flex;         /* ใช้ flex เพื่อแยก bullet ออกจากข้อความ */
  gap: 8px;              /* ระยะห่างระหว่างจุดกับตัวหนังสือ */
  margin-bottom: 12px;   /* ระยะห่างระหว่างแต่ละหัวข้อย่อย */
  align-items: flex-start;
}

.timeline-subitem:last-child {
  margin-bottom: 0;      /* หัวข้อสุดท้ายไม่ต้องมี margin ล่าง */
}

.bullet {
  /* color: var(--orange-yellow-crayola); หรือสีที่คุณใช้ในโปรเจกต์ */
  flex-shrink: 0;        /* ป้องกันจุดโดนบีบ */
  line-height: 1.4;      /* ปรับให้ตรงกับบรรทัดแรก */
}

.subitem-content {
  line-height: 1.5;
  color: var(--light-gray);
}

.subitem-title {
  color: var(--white-2);  /* เน้นสีหัวข้อนิดหน่อย */
  margin-right: 4px;
}
</style>