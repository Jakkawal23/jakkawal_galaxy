import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Software Developer',
        th: 'Software Developer',
      },
      period: 'Apr 2024 — Present',
      description: {
        en: 'SOFT SQUARE 1999 CO.,LTD',
        th: 'SOFT SQUARE 1999 CO.,LTD',
      },
      remark: {
        en: 'Remark',
        th: 'Remark',
      },
      content: [
        {
          title: {
            en: "TaladHub (Product Owner)",
            th: "TaladHub – ระบบบริหารจัดการตลาดครบวงจร"
          },
          description: {
            en: "Acted as Product Owner and Lead Developer for an all-in-one market management platform, featuring stall mapping, automated billing, and a comprehensive payment/refund system.",
            th: "ออกแบบและพัฒนาในฐานะ Product Owner ตั้งแต่การวางโครงสร้าง ผังตลาดอัจฉริยะ ระบบจองแผงเช่า ไปจนถึงระบบชำระเงินและคืนเงินแบบครบวงจร"
          }
        },
        {
          title: {
            en: "Burgundy PRQ",
            th: "Burgundy PRQ – ระบบบริหารจัดการเบิกจ่ายคู่ค้า"
          },
          description: {
            en: "Developed a full-cycle vendor reimbursement system, managing workflows from initial request and multi-level approval to double-entry bookkeeping and disbursement.",
            th: "พัฒนาระบบเบิกจ่ายสำหรับคู่ค้า ครอบคลุมตั้งแต่กระบวนการขออนุมัติ การบันทึกบัญชีคู่ขนาน จนถึงขั้นตอนการจ่ายเงิน"
          }
        },
        {
          title: {
            en: "Farm Management System",
            th: "Farm Management – ระบบบริหารจัดการฟาร์มอัจฉริยะ"
          },
          description: {
            en: "Developed a mobile application for farmers to manage crop cycles, including plot planning, activity logging, and harvest tracking.",
            th: "พัฒนา Mobile Application สำหรับเกษตรกร เพื่อวางแผนการเพาะปลูก บันทึกกิจกรรมและปัญหาในฟาร์ม จนถึงขั้นตอนการเก็บเกี่ยว"
          }
        },
        {
          title: {
            en: "OCR Auto Create Document",
            th: "ระบบสร้างเอกสารอัตโนมัติด้วย OCR"
          },
          description: {
            en: "Implemented OCR technology to automate invoice data extraction and streamline document creation with automated expense categorization.",
            th: "นำเทคโนโลยี OCR มาใช้ในการอ่านข้อมูลจากใบแจ้งหนี้เพื่อสร้างเอกสารอัตโนมัติ พร้อมระบบแนะนำการบันทึกบัญชีค่าใช้จ่าย"
          }
        },
        {
          title: {
            en: "OCR Detect Meter Number",
            th: "ระบบอ่านเลขมิเตอร์อัตโนมัติด้วย OCR"
          },
          description: {
            en: "Developed a utility tracking module using OCR to read electricity and water meters via QR Code identification, integrated with the TaladHub ecosystem.",
            th: "ระบบเสริมสำหรับ TaladHub ใช้ OCR อ่านเลขมิเตอร์น้ำ-ไฟ และระบุตัวตนผ่าน QR Code เพื่อเพิ่มความแม่นยำในการบันทึกข้อมูล"
          }
        },
        {
          title: {
            en: "S-Power Online Leave System",
            th: "S-Power – ระบบลางานออนไลน์"
          },
          description: {
            en: "Developed an employee leave management system integrated with LINE LIFF for an accessible and user-friendly experience.",
            th: "พัฒนาระบบลางานบน LINE LIFF เพื่อให้พนักงานสามารถทำรายการลาและตรวจสอบสถานะได้ง่ายและรวดเร็ว"
          }
        },
        {
          title: {
            en: "E-Memo Approval System",
            th: "E-Memo – ระบบขออนุมัติเอกสารออนไลน์"
          },
          description: {
            en: "Created a digital document workflow system for drafting, reviewing, and approving corporate announcements and official memorandums.",
            th: "พัฒนาระบบจัดการบันทึกข้อความอิเล็กทรอนิกส์ ตั้งแต่การร่างเอกสาร การตรวจสอบ ไปจนถึงการอนุมัติประกาศต่างๆ"
          }
        },
        {
          title: {
            en: "Document Scan Receiving System",
            th: "ระบบสแกนรับเอกสารต้นฉบับ"
          },
          description: {
            en: "Developed a QR-based scanning system to track and manage physical document submissions at central receiving points.",
            th: "พัฒนาระบบสแกน QR Code เพื่อบันทึกการรับเอกสารต้นฉบับ ณ จุดรับเอกสาร เพื่อเพิ่มความรวดเร็วในการติดตามสถานะ"
          }
        },
        {
          title: {
            en: "E-Procurement Integration",
            th: "ระบบเชื่อมต่อข้อมูลจัดซื้อสู่การเบิกจ่าย"
          },
          description: {
            en: "Developed an integration module to automatically generate PRQ documents by verifying data from the E-Procurement (PR) system.",
            th: "พัฒนาส่วนเชื่อมต่อเพื่อสร้างเอกสารเบิกจ่าย (PRQ) โดยอัตโนมัติจากการตรวจสอบและดึงข้อมูลจากระบบจัดซื้อ (PR)"
          }
        }
      ],
    },
    {
      id: 2,
      title: {
        en: 'Software Developer (Internship)',
        th: 'Software Developer (Internship)',
      },
      period: 'Oct 2023 - Feb 2024 ( 5 mos. )',
      description: {
        en: 'SOFT SQUARE 1999 CO.,LTD',
        th: 'SOFT SQUARE 1999 CO.,LTD',
      },
      remark: {
        en: 'Remark',
        th: 'Remark',
      },
      content: [
        {
          title: { 
            en: 'Burgundy Accrued', 
            th: 'ระบบอนุมัติรายการค่าใช้จ่ายค้างจ่าย (Burgundy Accrued)' 
          },
          description: { 
            en: 'An approval system for accrued expenses designed to track, summarize, and provide full audit trails for expense provisions.', 
            th: 'Burgundy Accrued ระบบขออนุมัติตั้งค่าใช้จ่ายค้างจ่าย เพื่อติดตาม สรุปรายการ และตรวจสอบย้อนหลังได้อย่างมีประสิทธิภาพ' 
          },
        },
        {
          title: { 
            en: 'Company Standard Structure', 
            th: 'การปรับปรุงโครงสร้างมาตรฐานองค์กร' 
          },
          description: { 
            en: 'Refactored the core system architecture to support multi-company structures and scalable organizational hierarchies.', 
            th: 'ปรับปรุงโครงสร้างมาตรฐานของระบบให้สามารถรองรับการทำงานได้หลายบริษัท (Multi-company structure)' 
          },
        },
      ],
    },
    {
      id: 3,
      title: {
        en: 'Software Developer (Internship)',
        th: 'Software Developer (Internship)',
      },
      period: 'Mar 2023 - May 2023 ( 3 mos. )',
      description: {
        en: 'SOFT SQUARE 1999 CO.,LTD',
        th: 'SOFT SQUARE 1999 CO.,LTD',
      },
      remark: {
        en: 'Remark',
        th: 'Remark',
      },
      content: [
        {
          title: { 
            en: 'Training', 
            th: 'ฝึกอบรม' 
          },
          description: { 
            en: 'Training Soft Skill / Hard Skill / Technology / Company Code Standard', 
            th: 'การฝึกอบรมทักษะทางสังคม (Soft Skill), ทักษะทางวิชาชีพ (Hard Skill), เทคโนโลยี และมาตรฐานการเขียนโค้ดของบริษัท' 
          },
        },
        {
          title: { 
            en: 'Expense Management System (SoftXpense)', 
            th: 'พัฒนาระบบเบิกจ่ายค่าใช้จ่าย (SoftXpense)' 
          },
          description: { 
            en: 'Developed the "SoftXpense" enterprise expense management system, specifically responsible for the vendor payment reimbursement module.', 
            th: 'พัฒนาระบบ SoftXpense สำหรับจัดการการเบิกจ่ายภายในองค์กร โดยรับผิดชอบในส่วนของระบบการเบิกจ่ายค่าใช้จ่ายให้กับคู่ค้า (Vendor)' 
          },
        }
      ],
    },
    {
      id: 4,
      title: {
        en: 'Software Developer (Internship)',
        th: 'Software Developer (Internship)',
      },
      period: 'Apr 2022 - Jun 2022 ( 3 mos. )',
      description: {
        en: 'SOFT SQUARE 1999 CO.,LTD',
        th: 'SOFT SQUARE 1999 CO.,LTD',
      },
      remark: {
        en: 'Remark',
        th: 'Remark',
      },
      content: [
        {
          title: { 
            en: 'Training', 
            th: 'ฝึกอบรม' 
          },
          description: { 
            en: 'Training Soft Skill / Hard Skill / Technology / Company Code Standard', 
            th: 'การฝึกอบรมทักษะทางสังคม (Soft Skill), ทักษะทางวิชาชีพ (Hard Skill), เทคโนโลยี และมาตรฐานการเขียนโค้ดของบริษัท' 
          },
        },
        {
          title: { 
            en: 'Master Data Management Development', 
            th: 'พัฒนาโปรแกรมจัดการข้อมูลพื้นฐาน' },
          description: { 
            en: 'Development of various master data management systems such as currency, region, language, sub-district, district, province, and country.', 
            th: 'พัฒนาโปรแกรมระบบจัดการข้อมูลพื้นฐานต่างๆเช่น สกุลเงิน ภูมิภาค ภาษา ตำบล อำเภอ จังหวัด ประเทศ' 
          },
        },
      ],
    },
  ]
})
