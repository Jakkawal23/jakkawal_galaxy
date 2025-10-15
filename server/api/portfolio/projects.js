import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Finance',
      categories: [
        {
          id: 1,
          title: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
        },
        {
          id: 2,
          title: { en: 'Application', th: 'แอปพลิเคชัน' },
        },
      ],
      content: {
        en: 'Finance project focusing on modern, secure, and scalable financial web systems using the latest web technologies.',
        th: 'โครงการพัฒนาเว็บไซต์ด้านการเงิน โดยใช้เทคโนโลยีเว็บสมัยใหม่ เพื่อความปลอดภัยและประสิทธิภาพสูง เหมาะสำหรับองค์กรที่ต้องการระบบการเงินที่เชื่อถือได้',
      },
      image: '/images/project-1.jpg',
    },
    {
      id: 2,
      title: 'Orizon',
      categories: [
        {
          id: 1,
          title: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
        },
        {
          id: 3,
          title: { en: 'Web Design', th: 'ออกแบบเว็บไซต์' },
        },
      ],
      content: {
        en: 'Orizon is a fast, modern website designed for optimal performance across all devices.',
        th: 'เว็บไซต์ Orizon ถูกออกแบบมาเพื่อมอบประสบการณ์ที่รวดเร็ว ทันสมัย และตอบโจทย์ทุกอุปกรณ์ด้วยเทคโนโลยีล่าสุด',
      },
      image: '/images/project-2.png',
    },
    {
      id: 3,
      title: 'Brawlhalla',
      categories: [
        {
          id: 2,
          title: { en: 'Application', th: 'แอปพลิเคชัน' },
        },
      ],
      content: {
        en: 'Brawlhalla app delivers a seamless and engaging experience across multiple platforms.',
        th: 'แอปพลิเคชัน Brawlhalla ถูกออกแบบให้ทำงานได้ดีบนทุกแพลตฟอร์ม พร้อมอินเทอร์เฟซที่ใช้งานง่ายและสวยงาม',
      },
      image: '/images/project-3.jpg',
    },
    {
      id: 4,
      title: 'DSM.',
      categories: [
        {
          id: 3,
          title: { en: 'Web Design', th: 'ออกแบบเว็บไซต์' },
        },
      ],
      content: {
        en: 'DSM focuses on clean, modern web design with strong brand identity.',
        th: 'งานออกแบบ DSM มุ่งเน้นความทันสมัย เรียบง่าย และสะท้อนอัตลักษณ์ของแบรนด์ได้อย่างลงตัว',
      },
      image: '/images/project-4.png',
    },
    {
      id: 5,
      title: 'MetaSpark',
      categories: [
        {
          id: 3,
          title: { en: 'Web Design', th: 'ออกแบบเว็บไซต์' },
        },
        {
          id: 1,
          title: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
        },
      ],
      content: {
        en: 'MetaSpark blends creative design with cutting-edge web technologies.',
        th: 'MetaSpark ผสมผสานดีไซน์สร้างสรรค์กับเทคโนโลยีเว็บล้ำสมัย เพื่อสร้างประสบการณ์ผู้ใช้ที่โดดเด่นไม่เหมือนใคร',
      },
      image: '/images/project-5.png',
    },
    {
      id: 6,
      title: 'Fundo',
      categories: [
        {
          id: 2,
          title: { en: 'Application', th: 'แอปพลิเคชัน' },
        },
      ],
      content: {
        en: 'Fundo helps users manage personal finances easily and efficiently.',
        th: 'Fundo เป็นแอปพลิเคชันจัดการการเงินส่วนบุคคล ที่ใช้งานง่ายและเหมาะกับทุกคน',
      },
      image: '/images/project-6.png',
    },
  ]
})
