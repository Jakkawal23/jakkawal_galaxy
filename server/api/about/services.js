import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Laravel',
        th: 'ลาเวล',
      },
      description: {
        en: 'I build modern and advanced websites and applications with Laravel, the PHP framework.',
        th: 'ผมพัฒนาเว็บไซต์และแอปพลิเคชันสมัยใหม่ด้วย Laravel ซึ่งเป็นเฟรมเวิร์ก PHP ที่ทรงพลังและทันสมัย',
      },
      icon: 'logo-laravel',
      image: null,
    },
    {
      id: 2,
      title: {
        en: 'Vue JS',
        th: 'วิวเจเอส',
      },
      description: {
        en: 'I use VueJS, a modern JavaScript framework, while making dynamic and static websites and applications.',
        th: 'ผมใช้ VueJS ซึ่งเป็นเฟรมเวิร์ก JavaScript สมัยใหม่ สำหรับสร้างเว็บไซต์และแอปพลิเคชันที่ทั้งมีการโต้ตอบและแบบคงที่',
      },
      icon: 'logo-vue',
      image: null,
    },
  ]
})
