import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'University of Phayao',
        th: 'มหาวิทยาลัยพะเยา',
      },
      period: '2021 — 2025',
      description: {
        en: 'Computer Engineering, Graduated with a GPA of 3.81 (First-Class Honors)',
        th: 'วิศวกรรมคอมพิวเตอร์ เกรดเฉลี่ย 3.81 (เหรียญทอง เกรียรตินิยมอันดับ 1)',
      },
      remark: {
        en: 'Held the position of Student Organization Committee Member at University of Phayao, Served as Class President of Computer Engineering',
        th: 'ดำรงตำแหน่งกรรมการองค์การนิสิต มหาวิทยาลัยพะเยา, ดำรงตำแหน่งประธานชั้นปี สาขาวิศวกรรอมคอมพิวเตอร์',
      },
      content: [
        {
          title: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
          description: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
        },
        {
          title: { en: 'Web Development', th: 'พัฒนาเว็บไซต์ 1' },
          description: { en: 'Web Development', th: 'พัฒนาเว็บไซต์ 1 description' },
        },
      ],
    },
    {
      id: 2,
      title: {
        en: 'Measai Vocational College',
        th: 'วิทยาลัยอาชีวศึกษาแม่สาย',
      },
      period: '2018 — 2021',
      description: {
        en: 'Chinese Language School (High School)',
        th: 'โรงเรียนสอนภาษาจีน มัธยมศึกษาตอนปลาย',
      },
      remark: {
        en: 'Held the position of Vice President of Student Council',
        th: 'ดำรงตำแหน่งรองประธานนักเรียน',
      },
      content: [
        {
          title: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
          description: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
        },
        {
          title: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
          description: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
        },
      ],
    },
    {
      id: 3,
      title: {
        en: 'Watthumpla Witthayakhom School',
        th: 'โรงเรียนวัดถ้ำปลาวิทยาคม',
      },
      period: '2018 — 2021',
      description: {
        en: 'Science-Math Program, Graduated with a GPA of 3.70',
        th: 'แผนกวิทย์-คณิต เกรดเฉลี่ย 3.70',
      },
      remark: {
        en: 'Held the position of Student Council President',
        th: 'ดำรงตำแหน่งประธานนักเรียน',
      },
      content: [
        {
          title: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
          description: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
        },
        {
          title: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
          description: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
        },
      ],
    },
    {
      id: 4,
      title: {
        en: 'Santiwana School',
        th: 'โรงเรียนสันติวนา',
      },
      period: '2015 — 2018',
      description: {
        en: 'Graduated with a GPA of 3.50',
        th: 'เกรดเฉลี่ย 3.50',
      },
      remark: {
        en: 'Studied at the lower secondary level',
        th: 'ศึกษาในระดับมัธยมศึกษาตอนต้น',
      },
      content: [
        {
          title: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
          description: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
        },
        {
          title: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
          description: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
        },
      ],
    },
    {
      id: 5,
      title: {
        en: 'Banphadang School',
        th: 'โรงเรียนบ้านผาแดง',
      },
      period: '2007 — 2015',
      description: {
        en: 'Graduated with a GPA of 3.25',
        th: 'เกรดเฉลี่ย 3.25',
      },
      remark: {
        en: 'Studied at the kindergarten and elementary levels',
        th: 'ศึกษาในระดับอนุบาลและประถมศึกษา',
      },
      content: [
        {
          title: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
          description: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
        },
        {
          title: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
          description: { en: 'Web Development', th: 'พัฒนาเว็บไซต์' },
        },
      ],
    }
  ]
})
