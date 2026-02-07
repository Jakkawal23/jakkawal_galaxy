import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Training',
        th: 'การอบรม',
      },
    },
    {
      id: 2,
      title: {
        en: 'Startup',
        th: 'สตาร์ทอัพ',
      },
    },
    {
      id: 3,
      title: {
        en: 'Company',
        th: 'บริษัท',
      },
    },
    {
      id: 4,
      title: {
        en: 'University',
        th: 'มหาวิทยาลัย',
      },
    },
    {
      id: 5,
      title: {
        en: 'High School',
        th: 'มัธยมศึกษา',
      },
    },
  ]
})
