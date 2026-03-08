export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tuproq-sogligini-tekshirish",
    title: "Tuproq sog'lig'ini qanday tekshirish kerak?",
    excerpt: "Tuproq pH, namligi va mineral tarkibini bilish — hosildorlikning asosi. Bu maqolada oddiy usullardan IoT sensorgacha bo'lgan yechimlarni ko'rib chiqamiz.",
    date: "2026-03-01",
    tag: "Tuproq",
    content: `
## Nima uchun tuproq sog'lig'i muhim?
...
Tuproq sog'lig'ini muntazam tekshirish — hosildorlikni oshirish va xarajatlarni kamaytirishning eng samarali usuli. Zamonaviy texnologiyalar bu jarayonni oson va arzon qiladi. Agro Bot platformasi sizga shu imkoniyatni beradi.
    `,
  },
  {
    slug: "suvni-tejash-usullari",
    title: "Suvni tejashning 5 ta samarali usuli",
    excerpt: "O'zbekistonda suv tanqisligi kuchayib bormoqda. Tomchilatib sug'orish, mulchalash va AI sug'orish jadvali — eng samarali usullar.",
    date: "2026-02-20",
    tag: "Suv tejash",
    content: `
## O'zbekistonda suv muammosi
...
Suv — O'zbekiston uchun strategik resurs. Zamonaviy texnologiyalar yordamida har bir tomchini samarali ishlatish mumkin. Agro Bot bu yo'lda fermerlarga ishonchli hamkor.
    `,
  },
  {
    slug: "ai-qishloq-xojaligida",
    title: "Sun'iy intellekt qishloq xo'jaligida: dunyo tajribasi",
    excerpt: "Hindiston, Braziliya va AQShda AI qanday qo'llanilmoqda? O'zbekiston uchun qanday saboqlar bor?",
    date: "2026-02-10",
    tag: "AI",
    content: `
## AI — qishloq xo'jaligining kelajagi
...
AI qishloq xo'jaligining kelajagi. O'zbekiston bu yo'nalishda katta imkoniyatlarga ega. Agro Bot ana shu imkoniyatni amalga oshirish uchun ishlayapti.
    `,
  },
  {
    slug: "iot-sensorlar-qollanma",
    title: "IoT sensorlar: fermer uchun qo'llanma",
    excerpt: "Tuproq sensorlarini qanday tanlash, o'rnatish va ulardan samarali foydalanish bo'yicha to'liq qo'llanma.",
    date: "2026-01-28",
    tag: "IoT",
    content: `
## IoT sensorlar nima?
...
IoT sensorlar zamonaviy dehqonchilikning ajralmas qismi. Ular tuproq holati haqida aniq ma'lumot berib, fermerga to'g'ri qaror qabul qilishga yordam beradi.
    `,
  },
  {
    slug: "ndvi-indeksi",
    title: "NDVI indeksi nima va u nima uchun kerak?",
    excerpt: "Yo'ldosh tasvirlari orqali ekin salomatligini kuzatish — NDVI indeksining ahamiyati va uni qanday ishlatish.",
    date: "2026-01-15",
    tag: "Yo'ldosh",
    content: `
## NDVI nima?
...
NDVI — oddiy, lekin juda kuchli vosita. U fermerga dalasidagi muammolarni erta bosqichda ko'rishga yordam beradi. Agro Bot bu texnologiyani har bir O'zbekiston fermeriga taqdim etadi.
    `,
  },
  {
    slug: "agritech-startaplar-uzbekistan",
    title: "O'zbekistonda agritech startaplar: imkoniyatlar va qiyinchiliklar",
    excerpt: "Agritech sohasida startap boshlash uchun nimalar kerak? Grantlar, bozor va texnologiyalar haqida.",
    date: "2026-01-05",
    tag: "Biznes",
    content: `
## Nima uchun agritech?
...
O'zbekistonda agritech uchun katta imkoniyat bor. Lekin muvaffaqiyat uchun mahalliy sharoitni chuqur tushunish, oddiy yechimlar yaratish va sabr-toqat kerak.
    `,
  },
];
