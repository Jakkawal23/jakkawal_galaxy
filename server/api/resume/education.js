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
        en: 'Computer Engineering, GPA 3.81 (First-Class Honors)',
        th: 'วิศวกรรมคอมพิวเตอร์ เกรดเฉลี่ย 3.81 (เหรียญทอง เกียรตินิยมอันดับ 1)',
      },
      remark: {
        en: 'Activities during studies',
        th: 'กิจกรรมระหว่างเรียน',
      },
      content: [
        {
          title: { en: 'Student Organization Committee', th: 'คณะกรรมการองค์การนิสิต' },
          description: { en: 'Member of the Student Organization in Information Technology and Communication. Responsible for making campaign media and pushing for online activities.', th: 'ดำรงตำแหน่งคณะกรรมการองค์การนิสิตฝ่ายเทคโนโลยีสารสนเทศและการสื่อสาร ทำหน้าที่ตั้งแต่การเป็นแกนนำในการทำสื่อการหาเสียง จนถึงการผลักดันการจัดกิจกรรมทางออนไลน์' },
        },
        {
          title: { en: 'Class President (Computer Engineering)', th: 'ประธานชั้นปี สาขาวิศวิศวกรรมคอมพิวเตอร์' },
          description: { en: 'Selected by classmates to be Class President. Responsible for coordinating between years, organizing activities, and being the class representative.', th: 'ได้รับการคัดเลือกจากเพื่อนๆในสาขา ให้ดำรงตำแหน่งประธานชั้นปี สาขาวิศวกรรมคอมพิวเตอร์ รับผิดชอบในการประสานงานระหว่างชั้นปี จัดกิจกรรม เป็นตัวแทนชั้นปีในการเข้าร่วมกิจกรรมต่างๆ' },
        },
        {
          title: { en: 'Teaching Assistant (TA)', th: 'ผู้ช่วยสอน TA' },
          description: { en: 'Served as a Teaching Assistant for many subjects. Attended university training for TAs to help teachers with teaching and help students with learning.', th: 'ได้เป็นผู้ช่วยสอน TA ในหลายๆวิชา และยังได้เข้าร่วมอบรม สำหรับการเป็นผู้ช่วยสอน ในวิชาของมหาวิทยาลัย เพื่อสามารถแบ่งเบาภาระอาจารย์ในการสอน และช่วยเหลือน้องๆในการเรียน' },
        },
        {
          title: { en: 'Co-founder of 20DALE Party, University of Phayao', th: 'ผู้ร่วมจัดตั้งพรรค 20DALE มหาวิทยาลัยพะเยา' },
          description: { en: 'Co-founded the 20DALE party to be a voice for students. Volunteered for many activities inside and outside the university.', th: 'ผู้ร่วมจัดตั้งพรรค 20DALE มหาวิทยาลัยพะเยา เพื่อเป็นกระบอกเสียงสำหรับนิสิต และเป็นอาสาสมัครในการจัดกิจกรรมต่างๆในมหาวิทยาลัย ร่วมถึงนอกมหาวิทยาลัยอีกด้วย' },
        },
        {
          title: { en: 'Startup Thailand League Competition', th: 'เข้าร่วมการแข่งขัน Startup Thailand League' },
          description: { en: 'Reached the final 200 teams in the national Startup Thailand League. I was the team leader and the person who presented the idea (Pitching) to the judges.', th: 'เข้ารอบ 200 ทีมสุดท้าย สู่การแข่งขัน Startup Thailand League ระดับประเทศ โดยผมเป็นหัวหน้าทีมในการแข่งขัน และเป็นคนนำเสนอไอเดีย (Pitching) ต่อคณะกรรมการ' },
        },
        {
          title: { en: 'TESA Top Gun Competition', th: 'เข้าร่วมการแข่งขัน TESA Top Gun' },
          description: { en: 'Joined TESA Top Gun, the biggest embedded system competition in Thailand. I was the team leader and won a Silver Medal.', th: 'เข้าร่วมการแข่งขัน TESA Top Gun เป็นรายการการแข่งขันด้านสมองกลฝังตัว ที่ใหญ่ที่สุดในประเทศไทย ผมเป็นหัวหน้าทีมในการนำทีมจากมหาวิทยาลัยเข้าร่วมการแข่งขันและได้รับ เหรียญเงิน' },
        },
        {
          title: { en: 'Winner of Project Competition', th: 'ชนะเลิศการประกวดโครงงาน (Project)' },
          description: { en: 'Won first prize in the Computer Engineering project competition. Developed a project with a company to solve their problems, judged by company representatives.', th: 'ชนะเลิศการประกวดโครงงาน ในสาขาวิศวกรรมคอมพิวเตอร์ ด้วยโครงงานที่ได้พัฒนาร่วมกับบริษัท เพื่อแก้ไขปัญหาในบริษัท การประกวดโครงงานมีคณะกรรมการเป็นตัวแทนจากบริษัทต่างๆ' },
        },
      ],
    },
    {
      id: 2,
      title: {
        en: 'Mae Sai Vocational College',
        th: 'วิทยาลัยอาชีวศึกษาแม่สาย',
      },
      period: '2018 — 2021',
      description: {
        en: 'Chinese Language High School',
        th: 'โรงเรียนสอนภาษาจีน มัธยมศึกษาตอนปลาย',
      },
      remark: {
        en: 'Activities during studies',
        th: 'กิจกรรมระหว่างเรียน',
      },
      content: [
        {
          title: { en: 'Vice Student President', th: 'รองประธานนักเรียน' },
          description: { en: 'Served as Vice Student President at Mae Sai Vocational College (Chinese Section). Led the campaign and pushed for many activities in the college.', th: 'ดำรงตำแหน่งรองประธานนักเรียน วิทยาลัยอาชีวศึกษาแม่สาย (ภาคภาษาจีน) เป็นแกนนำในการหาเสียงก่อนที่จะได้ดำรงตำแหน่งรองประธานนักเรียน หลังจากได้ดำรงตำแหน่ง ได้ผลักดันการจัดกิจกรรมต่างๆภายในวิทยาลัย' },
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
        en: 'Science-Math Program',
        th: 'แผนกวิทย์-คณิต',
      },
      remark: {
        en: 'Activities during studies',
        th: 'กิจกรรมระหว่างเรียน',
      },
      content: [
        {
          title: { en: 'Student President', th: 'ประธานนักเรียน' },
          description: { en: 'Served as Student President. Represented the school in many activities, organized school events, and was a voice for students to report problems to school managers.', th: 'ดำรงตำแหน่งประธานนักเรียน เป็นตัวแทนโรงเรียนในการเข้าร่วมกิจกรรมต่างๆจากทาง สพม. จัดกิจกรรมต่างๆภายในโรงเรียน และเป็นกระบอกเสียงให้กับนักเรียนในโรงเรียนเพื่อสะท้อนถึงปัญหาต่างๆ ต่อผู้บริหารสถานศึกษา' },
        },
        {
          title: { en: 'Invention and Innovation Competition', th: 'ประกวดสิ่งประดิษฐ์และนวัตกรรม' },
          description: { en: 'Winner and provincial representative in the invention and innovation competition.', th: 'ชนะเลิศและได้เป็นตัวแทนจังหวัดในการแข่งขันประกวดสิ่งประดิษฐ์และนวัตกรรม' },
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
        en: 'GPA 3.50',
        th: 'เกรดเฉลี่ย 3.50',
      },
      remark: {
        en: 'Junior High School level',
        th: 'ศึกษาในระดับมัธยมศึกษาตอนต้น',
      },
      content: [
        {
          title: { en: 'Rubber Band Powered Airplane Competition', th: 'การแข่งขันเครื่องบินพลังยาง' },
          description: { en: 'Participated in the rubber band powered airplane competition (Free Flight category).', th: 'เข้าร่วมการแข่งขันเครื่องบินพลังยาง ประเภทการแข่งขันปล่อยอิสระ' },
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
        en: 'GPA 3.25',
        th: 'เกรดเฉลี่ย 3.25',
      },
      remark: {
        en: 'Kindergarten and Elementary level',
        th: 'ศึกษาในระดับอนุบาลและประถมศึกษา',
      },
      content: [
        {
          title: { en: 'Math Excellence Competition', th: 'การแข่งขันอัจฉริยภาพทางคณิตศาสตร์' },
          description: { en: 'Winner of the Math Excellence competition at the educational area level.', th: 'ชนะเลิศการแข่งขันอัจฉริยภาพทางคณิตศาสตร์ ระดับเขตพื้นที่การศึกษา' },
        },
        {
          title: { en: 'Science Project Competition (Invention)', th: 'การแข่งขันโครงงานวิทยาสาสตร์ ประเภทสิ่งประดิษฐ์' },
          description: { en: 'Provincial representative for the Science Project competition (Invention category).', th: 'เป็นตัวแทนการแข่งขันการแข่งขันโครงงานวิทยาสาสตร์ ประเภทสิ่งประดิษฐ์ ระดับจังหวัด' },
        },
      ],
    }
  ]
})