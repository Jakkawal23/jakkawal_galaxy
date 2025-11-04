import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
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
      image: '/images/blog-1.jpg',
      description: {
        en: 'In this article, we will get to know IoT, the Internet of Things.',
        th: 'บทความนี้เรามาทำความรู้จักกับ IoT อินเทอร์เน็ตในทุกสรรพสิ่ง',
      },
    },
    {
      id: 20241217_02,
      title: {
        en: 'What is NB IoT (Narrow Brand Internet Of Things) ?',
        th: 'NB-IoT (Narrow Brand Internet Of Things) คืออะไร ?',
      },
      categories: [
        { id: 1, title: { en: 'Technology', th: 'เทคโนโลยี' } },
      ],
      date: '2024-12-17',
      slug: '20241217_02_nb_iot',
      image: '/images/blog-1.jpg',
      description: {
        en: 'In this article, we will learn about NB IoT and how it differs from IoT. Let\'s find the answer.',
        th: 'บทความนี้เรามาทำความรู้จักกับ NB IoT แล้วต่างจาก IoT ยังไง มาหาคำตอบกัน',
      },
    },
    {
      id: 20241230,
      title: {
        en: 'What is NAS ? What is RAID ?',
        th: 'NAS คืออะไร ? RAID คืออะไร ?',
      },
      categories: [
        { id: 1, title: { en: 'Technology', th: 'เทคโนโลยี' } },
      ],
      date: '2024-12-30',
      slug: '20241230_nas_and_raid',
      image: '/images/blog-1.jpg',
      description: {
        en: 'In this article, let\'s get to know NAS.',
        th: 'บทความนี้เรามาทำความรู้จัก NAS กันเถอะ….',
      },
    },
    {
      id: 20250106_01,
      title: {
        en: 'Summary of the book Four Perfectionists',
        th: 'สรุปหนังสือ Four Perfectionists',
      },
      categories: [
        { id: 2, title: { en: 'Business & Finance', th: 'ธุรกิจและการเงิน' } },
        { id: 3, title: { en: 'Book Summaries & Reviews', th: 'สรุปและรีวิวหนังสือ' } },
      ],
      date: '2022-01-06',
      slug: '20250106_01_four_perfectionists',
      image: '/images/blog-1.jpg',
      description: {
        en: 'To you…… who wants everything to be perfect',
        th: 'แด่คุณ…… ที่อยากให้ทุกอย่างเพอร์เฟกต์',
      },
    },
    {
      id: 20250106_02,
      title: {
        en: 'Summary of the book ATOMIC HABITS',
        th: 'สรุปหนังสือ ATOMIC HABITS',
      },
      categories: [
        { id: 2, title: { en: 'Business & Finance', th: 'ธุรกิจและการเงิน' } },
        { id: 3, title: { en: 'Book Summaries & Reviews', th: 'สรุปและรีวิวหนังสือ' } },
      ],
      date: '2022-01-06',
      slug: '20250106_02_atomic_habits',
      image: '/images/blog-1.jpg',
      description: {
        en: 'Atomic Habits because life can be better than it is',
        th: 'Atomic Habits เพราะชีวิตดีได้กว่าที่เป็น',
      },
    },
    {
      id: 20250106_03,
      title: {
        en: 'What is a double-entry account?',
        th: 'คู่บัญชี คืออะไร ?',
      },
      categories: [
        { id: 2, title: { en: 'Business & Finance', th: 'ธุรกิจและการเงิน' } },
        { id: 3, title: { en: 'Book Summaries & Reviews', th: 'สรุปและรีวิวหนังสือ' } },
      ],
      date: '2022-01-06',
      slug: '20250106_03_double_entry_system',
      image: '/images/blog-1.jpg',
      description: {
        en: 'In this article, let\'s get to know the Double Entry System.',
        th: 'บทความนี้เรามาทำความรู้จัก ระบบคู่บัญชี Double Entry System กับเถอะ',
      },
    },

    {
      id: 20250107_01,
      title: {
        en: 'National ID card number verification',
        th: 'การตรวจสอบเลขบัตรประชาชน',
      },
      categories: [
        { id: 4, title: { en: 'Tips & How-To', th: 'ทริค/ฮาวทู' } },
      ],
      date: '2022-01-07',
      slug: '20250107_01_check_tin_id',
      image: '/images/blog-1.jpg',
      description: {
        en: 'Did you know that we can check our 13-digit national identification number ourselves?',
        th: 'รู้หรือไม่ เราสามารถตรวจสอบเลขประจำตัวประชาชน 13 หลัก ด้วยตนเอง',
      },
    },
    {
      id: 20250107_02,
      title: {
        en: 'What is TSIC?',
        th: 'TSIC คืออะไร ?',
      },
      categories: [
        { id: 4, title: { en: 'Tips & How-To', th: 'ทริค/ฮาวทู' } },
      ],
      date: '2022-01-07',
      slug: '20250107_02_tsic',
      image: '/images/blog-1.jpg',
      description: {
        en: 'Thailand Industrial Standards Classification',
        th: 'การจัดประเภทมาตรฐานอุตสาหกรรมของประเทศไทย',
      },
    },


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
  ]
})
