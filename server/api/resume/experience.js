import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Creative Director',
        th: 'ผู้อำนวยการฝ่ายสร้างสรรค์',
      },
      period: '2015 — Present',
      description: {
        en: 'Managed creative projects, leading a team of designers and developers.',
        th: 'บริหารโปรเจกต์ด้านความคิดสร้างสรรค์ พร้อมทีมดีไซเนอร์และนักพัฒนา',
      },
    },
    {
      id: 2,
      title: {
        en: 'Art Director',
        th: 'ผู้อำนวยการฝ่ายศิลป์',
      },
      period: '2013 — 2015',
      description: {
        en: 'Oversaw visual design and branding for multiple campaigns.',
        th: 'ดูแลการออกแบบภาพลักษณ์และแบรนด์สำหรับแคมเปญหลายโปรเจกต์',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Designer',
        th: 'นักออกแบบเว็บไซต์',
      },
      period: '2010 — 2013',
      description: {
        en: 'Designed websites with focus on UI/UX and responsive design.',
        th: 'ออกแบบเว็บไซต์โดยเน้นประสบการณ์ผู้ใช้และการแสดงผลแบบตอบสนอง',
      },
    },
  ]
})
