import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Technology',
        th: 'เทคโนโลยี',
      },
    },
    {
      id: 2,
      title: {
        en: 'Business & Finance',
        th: 'ธุรกิจและการเงิน',
      },
    },
    {
      id: 3,
      title: {
        en: 'Book Summaries & Reviews',
        th: 'สรุปและรีวิวหนังสือ',
      },
    },
    {
      id: 4,
      title: {
        en: 'Tips & How-To',
        th: 'ทริค/ฮาวทู',
      },
    },
  ]
})
