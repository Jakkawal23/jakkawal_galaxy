import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Class President (Computer Engineering)',
        th: 'ประธานชั้นปี (วิศวกรรมคอมพิวเตอร์)',
      },
      content: {
        en: 'Served as Class President during the freshman year, leading student activities and acting as a bridge between students and the faculty.',
        th: 'ได้รับเลือกเป็นประธานชั้นปีในช่วงปี 1 ทำหน้าที่เป็นผู้นำในการจัดกิจกรรมต่างๆ และเป็นตัวกลางประสานงานระหว่างนิสิตและคณะ',
      },
      image: '/images/activities/president.png',
      slug: '2025/20250101_taladhub',
    },
    {
      id: 2,
      title: {
        en: 'Technology Information Committee',
        th: 'คณะกรรมการองค์การนิสิตฝ่ายเทคโนโลยีสารสนเทศ',
      },
      content: {
        en: 'Worked as a committee member responsible for technology and information systems for student organizations, supporting various university-wide events.',
        th: 'ปฏิบัติหน้าที่คณะกรรมการฝ่ายเทคโนโลยีและสารสนเทศ ดูแลระบบและสนับสนุนกิจกรรมต่างๆ ขององค์การนิสิตในระดับมหาวิทยาลัย',
      },
      image: '/images/activities/committee.png',
      slug: '2025/20250101_taladhub',
    },
    {
      id: 3,
      title: {
        en: 'Teaching Assistant (TA)',
        th: 'ผู้ช่วยสอน (TA)',
      },
      content: {
        en: 'Assisted professors in conducting classes and providing academic support to fellow students in Computer Engineering courses.',
        th: 'ทำหน้าที่เป็นผู้ช่วยสอน (TA) คอยสนับสนุนการเรียนการสอน และให้คำแนะนำด้านวิชาการแก่เพื่อนนิสิตในรายวิชาของวิศวกรรมคอมพิวเตอร์',
      },
      image: '/images/activities/ta.png',
      slug: '2025/20250101_taladhub',
    },
    {
      id: 4,
      title: {
        en: 'Academic Speaker & Mentor',
        th: 'วิทยากรและพี่เลี้ยงโครงการวิชาการ',
      },
      content: {
        en: 'Shared knowledge and experiences through pitching sessions and academic workshops organized by the university.',
        th: 'ร่วมเป็นวิทยากรแบ่งปันความรู้และประสบการณ์ในรายการ Pitching และกิจกรรมติววิชาการต่างๆ ของทางมหาวิทยาลัย',
      },
      image: '/images/activities/speaker.png',
      slug: '2025/20250101_taladhubr',
    },
  ]
})
