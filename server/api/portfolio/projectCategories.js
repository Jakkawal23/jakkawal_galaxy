import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Web Development',
        th: 'พัฒนาเว็บไซต์',
      },
    },
    {
      id: 2,
      title: {
        en: 'Application',
        th: 'พัฒนาแอปพลิเคชัน',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Design',
        th: 'ออกแบบเว็บไซต์',
      },
    },
  ]
})
