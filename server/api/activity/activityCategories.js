import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'High School',
        th: 'มัธยมศึกษา',
      },
    },
    {
      id: 2,
      title: {
        en: 'University',
        th: 'มหาวิทยาลัย',
      },
    },
    {
      id: 3,
      title: {
        en: 'Work',
        th: 'ทำงาน',
      },
    },
  ]
})
