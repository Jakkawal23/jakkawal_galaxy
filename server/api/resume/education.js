import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'University School of the Arts',
        th: 'มหาวิทยาลัยโรงเรียนศิลปะ',
      },
      period: '2007 — 2008',
      description: {
        en: 'Studied fine arts and design, focusing on modern art techniques.',
        th: 'ศึกษาศิลปะและการออกแบบโดยเน้นเทคนิคศิลปะสมัยใหม่',
      },
    },
    {
      id: 2,
      title: {
        en: 'New York Academy of Art',
        th: 'สถาบันศิลปะนิวยอร์ก',
      },
      period: '2006 — 2007',
      description: {
        en: 'Specialized in visual arts and contemporary design practices.',
        th: 'เชี่ยวชาญด้านศิลปะภาพและแนวปฏิบัติการออกแบบร่วมสมัย',
      },
    },
    {
      id: 3,
      title: {
        en: 'High School of Art and Design',
        th: 'โรงเรียนมัธยมศิลปะและการออกแบบ',
      },
      period: '2002 — 2004',
      description: {
        en: 'Learned foundational skills in art, design, and creativity.',
        th: 'เรียนรู้ทักษะพื้นฐานด้านศิลปะ การออกแบบ และความคิดสร้างสรรค์',
      },
    },
  ]
})
