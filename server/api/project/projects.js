import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    // {
    //   id: 1,
    //   title: {
    //     en: 'Example Blog Post',
    //     th: 'ตัวอย่างบทความบล็อก',
    //   },
    //   categories: [
    //     { id: 1, title: { en: 'Design', th: 'ออกแบบ' } },
    //     { id: 2, title: { en: 'Design 2', th: 'ออกแบบ 2' } },
    //     { id: 3, title: { en: 'UI/UX', th: 'UI/UX' } },
    //   ],
    //   date: '2022-02-23',
    //   slug: 'example-blog-post',
    //   image: '/images/blog-1.jpg',
    //   description: {
    //     en: 'Example description for the blog post in English.',
    //     th: 'Example description for the blog post in Thai.',
    //   },
    // },
    
    {
      id: 20241217_01,
      title: {
        en: 'What is IoT (Internet of Things) ?',
        th: 'IoT Internet of Things คืออะไร ?',
      },
      categories: [
        { id: 1, title: { en: 'Technology', th: 'เทคโนโลยี' } },
      ],
      date: '2024-12-17',
      slug: '20241217_01_iot',
      image: '/images/blog/20241217_01/20241217_01_01.png',
      description: {
        en: 'In this article, we will get to know IoT, the Internet of Things.',
        th: 'บทความนี้เรามาทำความรู้จักกับ IoT อินเทอร์เน็ตในทุกสรรพสิ่ง',
      },
    },
  ];

})
