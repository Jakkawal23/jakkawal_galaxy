import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Design',
        th: 'ออกแบบ',
      },
    },
    {
      id: 2,
      title: {
        en: 'Design 2',
        th: 'ออกแบบ 2',
      },
    },
    {
      id: 3,
      title: {
        en: 'UI/UX',
        th: 'UI/UX',
      },
    },
  ]
})
