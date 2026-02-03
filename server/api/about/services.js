import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: { en: 'Software Developer', th: 'นักพัฒนาซอฟต์แวร์' },
      description: {
        en: 'Crafting robust Full-stack solutions with Angular and .NET Core, driven by a Product Owner mindset.',
        th: 'พัฒนา Full-stack โซลูชันด้วย Angular และ .NET Core โดยยึดหลัก Product Owner Mindset',
      },
      image: '/images/partner-logo-1.png',
    },
    {
      id: 2,
      title: { en: 'Content Creator', th: 'นักสร้างสรรค์คอนเทนต์' },
      description: {
        en: 'Simplifying technology and sharing developer life experiences through engaging digital content.',
        th: 'ย่อยเรื่องเทคโนโลยีและแชร์ประสบการณ์ชีวิตนักพัฒนาผ่านคอนเทนต์ดิจิทัลที่น่าสนใจ',
      },
      image: '/images/partner-logo-1.png',
    },
    {
      id: 3,
      title: { en: 'Tech Pitcher', th: 'นักนำเสนอแผนธุรกิจเทคโนโลยี' },
      description: {
        en: 'Award-winning presenter skilled in translating technical concepts into persuasive business narratives.',
        th: 'นักนำเสนอรางวัลระดับประเทศ ที่เชี่ยวชาญการเปลี่ยนแนวคิดเทคนิคให้เป็นเรื่องราวทางธุรกิจที่จูงใจ',
      },
      image: '/images/partner-logo-1.png',
    },
    {
      id: 4,
      title: { en: 'Startup Enthusiast', th: 'ผู้หลงใหลในโลกสตาร์ทอัพ' },
      description: {
        en: 'Passionate about building MVPs and innovative products from zero to one.',
        th: 'คลั่งไคล้การสร้าง MVP และนวัตกรรมใหม่ๆ ตั้งแต่เริ่มต้นจนใช้งานได้จริง',
      },
      image: '/images/partner-logo-1.png',
    },
  ]
})
