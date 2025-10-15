import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Example Activity',
        th: 'ตัวอย่ากิจกรรม',
      },
      categories: [
        { id: 1, title: { en: 'High School', th: 'มัธยมศึกษา' } },
        { id: 2, title: { en: 'University', th: 'มหาวิทยาลัย' } },
        { id: 3, title: { en: 'Work', th: 'ทำงาน' } },
      ],
      date: '2022-02-23',
      slug: 'example-activity-post',
      image: '/images/blog-5.jpg',
      description: {
        en: 'Example description for the blog post in English.',
        th: 'Example description for the blog post in Thai.',
      },
    },
    {
      id: 2,
      title: {
        en: 'Startup Thailand 2022',
        th: 'สตาร์ตอัป 2022',
      },
      categories: [
        { id: 1, title: { en: 'High School', th: 'มัธยมศึกษา' } },
        { id: 3, title: { en: 'Work', th: 'ทำงาน' } },
      ],
      date: '2022-02-23',
      slug: 'design-conferences-in-2022',
      image: '/images/blog-6.jpg',
      description: {
        en: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
        th: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
      },
    },
    {
      id: 3,
      title: {
        en: 'Startup Thailand 2023',
        th: 'สตาร์ตอัป 2023',
      },
      categories: [{ id: 1, title: { en: 'High School', th: 'มัธยมศึกษา' } }],
      date: '2022-02-23',
      slug: 'best-fonts-every-designer',
      image: '/images/blog-4.jpg',
      description: {
        en: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
        th: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
      },
    },
  ]
})
