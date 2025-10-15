import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Example Blog Post',
        th: 'ตัวอย่างบทความบล็อก',
      },
      categories: [
        { id: 1, title: { en: 'Design', th: 'ออกแบบ' } },
        { id: 2, title: { en: 'Design 2', th: 'ออกแบบ 2' } },
        { id: 3, title: { en: 'UI/UX', th: 'UI/UX' } },
      ],
      date: '2022-02-23',
      slug: 'example-blog-post',
      image: '/images/blog-1.jpg',
      description: {
        en: 'Example description for the blog post in English.',
        th: 'Example description for the blog post in Thai.',
      },
    },
    {
      id: 2,
      title: {
        en: 'Design conferences in 2022',
        th: 'งานประชุมออกแบบในปี 2022',
      },
      categories: [
        { id: 1, title: { en: 'Design', th: 'ออกแบบ' } },
        { id: 3, title: { en: 'UI/UX', th: 'UI/UX' } },
      ],
      date: '2022-02-23',
      slug: 'design-conferences-in-2022',
      image: '/images/blog-2.jpg',
      description: {
        en: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
        th: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
      },
    },
    {
      id: 3,
      title: {
        en: 'Best fonts every designer',
        th: 'ฟอนต์ที่ดีที่สุดสำหรับนักออกแบบทุกคน',
      },
      categories: [{ id: 1, title: { en: 'Design', th: 'ออกแบบ' } }],
      date: '2022-02-23',
      slug: 'best-fonts-every-designer',
      image: '/images/blog-3.jpg',
      description: {
        en: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
        th: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
      },
    },
  ]
})
