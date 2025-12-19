import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Production',
        th: 'โปรดักชั่น',
      },
    },
    {
      id: 2,
      title: {
        en: 'Mobile Applications',
        th: 'แอปพลิเคชันบนมือถือ',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Applications',
        th: 'เว็บแอปพลิเคชัน',
      },
    },
    {
      id: 4,
      title: {
        en: 'Hobby',
        th: 'งานอดิเรก',
      },
    },
  ]
})
