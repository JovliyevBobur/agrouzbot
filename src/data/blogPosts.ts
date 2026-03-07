export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  readTime: string;
  content: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tuproq-sogligini-tekshirish",
    title: "Tuproq sog'lig'ini qanday tekshirish kerak?",
    excerpt: "Tuproq pH, namligi va mineral tarkibini bilish — hosildorlikning asosi. Bu maqolada oddiy usullardan IoT sensorgacha bo'lgan yechimlarni ko'rib chiqamiz.",
    date: "2025-03-01",
    tag: "Tuproq",
    readTime: "8 daqiqa",
    author: "Dr. Gulnora Tosheva",
    content: `
## Nima uchun tuproq sog'lig'i muhim?

Tuproq — qishloq xo'jaligining asosi. Sog'lom tuproq yuqori hosildorlik, sifatli mahsulot va barqaror dehqonchilik demakdir. O'zbekistonda yerlarning 50% dan ortig'i turli darajadagi degradatsiyaga uchragan, bu esa hosildorlikni sezilarli darajada pasaytirmoqda.

## Tuproq sog'lig'ining asosiy ko'rsatkichlari

### 1. pH darajasi
Tuproqning pH darajasi 6.0–7.5 orasida bo'lishi ko'pchilik ekinlar uchun optimal hisoblanadi. pH darajasi juda past yoki yuqori bo'lsa, o'simliklar mineral moddalarni o'zlashtira olmaydi.

**Qanday tekshirish mumkin:**
- Oddiy pH test to'plami (agro do'konlarda topiladi) — 5,000-10,000 so'm
- Raqamli pH metr — aniqroq natija beradi
- IoT pH sensori — real vaqtda doimiy monitoring

### 2. Tuproq namligi
Tuproq namligi ekinlarning normal o'sishi uchun muhim omil. Haddan tashqari nam yoki quruq tuproq hosildorlikni pasaytiradi.

**Optimal namlik darajasi:**
- Bug'doy: 60-70%
- Paxta: 65-75%
- Sabzavotlar: 70-80%
- Mevali daraxtlar: 60-70%

### 3. NPK — Azot, Fosfor, Kaliy
Bu uchta element o'simlik oziqlanishining asosini tashkil etadi:
- **Azot (N):** Bargli o'sish uchun
- **Fosfor (P):** Ildiz rivojlanishi va gullash uchun
- **Kaliy (K):** Umumiy sog'lom o'sish va kasallikka chidamlilik uchun

## Zamonaviy tekshirish usullari

### Laboratoriya tahlili
An'anaviy usul — tuproq namunasini laboratoriyaga olib borish. Narxi 50,000-100,000 so'm, natija 5-10 kunda tayyor bo'ladi.

### IoT sensorlar bilan monitoring
Agro Bot platformasi IoT sensorlar orqali tuproq parametrlarini real vaqtda kuzatish imkonini beradi:
- Har 15 daqiqada ma'lumot yangilanadi
- Mobil ilovada natijalarni ko'rish
- AI tavsiyalar olish
- SMS orqali ogohlantirish

### Yo'ldosh tasvirlari tahlili
Sentinel-2 yo'ldosh tasvirlari orqali katta maydonlardagi tuproq holatini masofadan kuzatish mumkin. NDVI indeksi ekin salomatligini, NDWI esa tuproq namligini ko'rsatadi.

## Xulosa

Tuproq sog'lig'ini muntazam tekshirish — hosildorlikni oshirish va xarajatlarni kamaytirishning eng samarali usuli. Zamonaviy texnologiyalar bu jarayonni oson va arzon qiladi. Agro Bot platformasi sizga shu imkoniyatni beradi.
    `,
  },
  {
    slug: "suvni-tejash-usullari",
    title: "Suvni tejashning 5 ta samarali usuli",
    excerpt: "O'zbekistonda suv tanqisligi kuchayib bormoqda. Tomchilatib sug'orish, mulchalash va AI sug'orish jadvali — eng samarali usullar.",
    date: "2025-02-20",
    tag: "Suv tejash",
    readTime: "6 daqiqa",
    author: "Sardor Raxmatov",
    content: `
## O'zbekistonda suv muammosi

O'zbekiston qishloq xo'jaligi mamlakatdagi suvning 90% dan ortig'ini iste'mol qiladi. Ammo irrigatsiya samaradorligi atigi 40-50% ni tashkil etadi — ya'ni deyarli yarmi behuda yo'qotiladi. Bu holat Orol dengizi inqirozini yanada chuqurlashtirib, tuproq sho'rlanishini kuchaytirmoqda.

## 5 ta samarali suv tejash usuli

### 1. Tomchilatib sug'orish tizimi
Tomchilatib sug'orish suvni to'g'ridan-to'g'ri o'simlik ildiziga yetkazadi. Bu usul suvni 40-60% ga tejaydi.

**Afzalliklari:**
- Suv sarfi 2-3 baravar kamayadi
- O'g'it samaradorligi oshadi
- Begona o't kamayadi
- Hosildorlik 20-30% ga oshadi

### 2. Mulchalash (Mulching)
Tuproq ustiga somon, qop yoki maxsus material yoyish orqali suvning bug'lanishi kamaytiriladi.

**Natija:** Suvning bug'lanishi 25-30% ga kamayadi.

### 3. AI asosida sug'orish jadvali
Agro Bot platformasi tuproq namligi, ob-havo va ekin turiga qarab optimal sug'orish jadvalini tuzadi. Fermer aniq biladi — qachon va qancha suv berish kerak.

### 4. Suv qayta ishlash
Irrigatsiya suvini qayta ishlash va filtrlash orqali suv sarfini kamaytirish mumkin. Ayniqsa toza suv tanqis bo'lgan hududlarda bu usul muhim.

### 5. Yog'in suvini yig'ish
Yog'in suvini maxsus havzalarda yig'ib, keyin irrigatsiya uchun ishlatish — ayniqsa tog'li hududlarda samarali usul.

## Agro Bot qanday yordam beradi?

Platformamiz IoT sensorlar orqali tuproq namligini real vaqtda o'lchaydi va AI algoritm optimal sug'orish jadvalini tuzadi. Natijada fermerlar suvni 35-40% ga tejashga erishmoqda.

## Xulosa

Suv — O'zbekiston uchun strategik resurs. Zamonaviy texnologiyalar yordamida har bir tomchini samarali ishlatish mumkin. Agro Bot bu yo'lda fermerlarga ishonchli hamkor.
    `,
  },
  {
    slug: "ai-qishloq-xojaligida",
    title: "Sun'iy intellekt qishloq xo'jaligida: dunyo tajribasi",
    excerpt: "Hindiston, Braziliya va AQShda AI qanday qo'llanilmoqda? O'zbekiston uchun qanday saboqlar bor?",
    date: "2025-02-10",
    tag: "AI",
    readTime: "10 daqiqa",
    author: "Nodira Karimova",
    content: `
## AI — qishloq xo'jaligining kelajagi

Sun'iy intellekt (AI) qishloq xo'jaligida inqilob qilmoqda. Dunyo bo'ylab AI asosida ishlaydigan agritech platformalar fermerlarga suvni tejash, hosildorlikni oshirish va xarajatlarni kamaytirish imkonini bermoqda.

## Dunyo tajribasi

### AQSh: Climate Corporation
Monsanto kompaniyasiga tegishli Climate Corporation platformasi 150 million gektar yer uchun ob-havo va tuproq tahlili qiladi. Fermerlar yiliga $20 milliard qo'shimcha daromad olmoqda.

### Hindiston: CropIn
Hindistondagi CropIn platformasi 7 million gektar yerni monitoring qiladi. Kichik fermerlar uchun mobil ilovasi bor va 13 tilda ishlaydi. Hosildorlik 15-20% ga oshgan.

### Braziliya: Solinftec
Braziliyada Solinftec platformasi qishloq xo'jaligi texnikasiga AI o'rnatib, real vaqtda optimizatsiya qiladi. Yoqilg'i sarfi 15% ga kamaygan.

### Isroil: Taranis
Isroildagi Taranis yuqori aniqlikdagi dron tasvirlari va AI orqali ekin kasalliklarini erta bosqichda aniqlaydi. Zarar 80% ga kamaygan.

## O'zbekiston uchun saboqlar

1. **Mahalliy tilni qo'llab-quvvatlash muhim** — Hindiston tajribasi ko'rsatdi
2. **Arzon va oddiy yechimlar kerak** — murakkab texnologiya fermerlar uchun to'siq
3. **SMS va offline rejim muhim** — internet cheklangan hududlar ko'p
4. **Hukumat bilan hamkorlik** — muvaffaqiyatli platformalar hukumat qo'llab-quvvatlaydi

## Agro Bot yondashuvi

Agro Bot dunyo tajribasidan o'rganib, O'zbekiston sharoitiga moslashgan yechim yaratmoqda:
- To'liq o'zbek tilida
- Arzon IoT sensorlar
- SMS bildirishnomalar
- Oddiy interfeys

## Xulosa

AI qishloq xo'jaligining kelajagi. O'zbekiston bu yo'nalishda katta imkoniyatlarga ega. Agro Bot ana shu imkoniyatni amalga oshirish uchun ishlayapti.
    `,
  },
  {
    slug: "iot-sensorlar-qollanma",
    title: "IoT sensorlar: fermer uchun qo'llanma",
    excerpt: "Tuproq sensorlarini qanday tanlash, o'rnatish va ulardan samarali foydalanish bo'yicha to'liq qo'llanma.",
    date: "2025-01-28",
    tag: "IoT",
    readTime: "7 daqiqa",
    author: "Sardor Raxmatov",
    content: `
## IoT sensorlar nima?

IoT (Internet of Things) sensorlar — tuproq parametrlarini avtomatik o'lchaydigan va internetga ma'lumot yuboradigan qurilmalar. Ular fermerga tuproq holati haqida real vaqtda ma'lumot beradi.

## Qanday sensorlar kerak?

### 1. Tuproq namligi sensori
- **Vazifasi:** Tuproqdagi suv miqdorini o'lchash
- **Turi:** Capacitive v2.0
- **Aniqlik:** ±2%
- **Narx:** $5-15
- **Batareya:** 2 yil

### 2. pH sensori
- **Vazifasi:** Tuproq kislotaligini o'lchash
- **Diapazoni:** 0-14 pH
- **Aniqlik:** ±0.1
- **Narx:** $15-30

### 3. NPK sensori
- **Vazifasi:** Azot, fosfor, kaliy darajasini o'lchash
- **Diapazoni:** 0-1999 mg/kg
- **Interfeys:** RS485
- **Narx:** $30-80

### 4. Harorat sensori
- **Vazifasi:** Tuproq haroratini o'lchash
- **Diapazoni:** -55°C dan +125°C gacha
- **Turi:** DS18B20
- **Narx:** $2-5

## Sensorlarni qanday o'rnatish kerak?

1. **Joy tanlang** — dalaning markaziga yaqin, soyada bo'lmagan joy
2. **Chuqurlik** — ekin ildizi chuqurligi (odatda 15-30 cm)
3. **Sensor soni** — har 1 gektar uchun 2-3 ta sensor tavsiya etiladi
4. **Himoya** — sensorni maxsus qutiga joylashtiring

## Agro Bot sensor to'plami

Agro Bot to'liq sensor to'plami taklif etadi:
- 4 ta sensor (namlik, pH, NPK, harorat)
- LoRaWAN gateway
- Professional o'rnatish
- 1 yillik kafolat
- Mobil ilova bilan integratsiya

**Narx:** $150-300 (1 dala uchun)

## Xulosa

IoT sensorlar zamonaviy dehqonchilikning ajralmas qismi. Ular tuproq holati haqida aniq ma'lumot berib, fermerga to'g'ri qaror qabul qilishga yordam beradi.
    `,
  },
  {
    slug: "ndvi-indeksi",
    title: "NDVI indeksi nima va u nima uchun kerak?",
    excerpt: "Yo'ldosh tasvirlari orqali ekin salomatligini kuzatish — NDVI indeksining ahamiyati va uni qanday ishlatish.",
    date: "2025-01-15",
    tag: "Yo'ldosh",
    readTime: "5 daqiqa",
    author: "Nodira Karimova",
    content: `
## NDVI nima?

NDVI (Normalized Difference Vegetation Index) — bu yo'ldosh tasvirlari yordamida o'simliklarning sog'lig'ini baholaydigan ko'rsatkich. U -1 dan +1 gacha bo'lgan qiymatlarni oladi.

## NDVI qiymatlari nimani bildiradi?

| NDVI qiymati | Ma'nosi |
|---|---|
| 0.8 — 1.0 | Juda sog'lom, qalin o'simlik |
| 0.6 — 0.8 | Sog'lom o'simlik |
| 0.4 — 0.6 | O'rtacha holat |
| 0.2 — 0.4 | Zaif o'simlik yoki siyrak qoplam |
| 0.0 — 0.2 | Ochiq tuproq, qumliq |
| < 0.0 | Suv, qor, bulutlar |

## Qanday ishlaydi?

Yo'ldosh (masalan, Sentinel-2) ikki turdagi nur yordamida tuproqni suratga oladi:
1. **Qizil nur (Red)** — o'simliklar yutadi
2. **Yaqin infraqizil (NIR)** — o'simliklar qaytaradi

Sog'lom o'simlik ko'p NIR qaytaradi va ko'p qizil nurni yutadi, shuning uchun NDVI qiymati yuqori bo'ladi.

## Dehqonchilikda qo'llanilishi

### 1. Ekin salomatligini monitoring qilish
Dalaning qaysi qismida ekinlar yaxshi, qaysi qismida muammo bor — xaritada ko'rish mumkin.

### 2. Sug'orish rejalashtirish
Kam NDVI — suvga muhtoj hududlarni ko'rsatadi.

### 3. O'g'itlash optimizatsiyasi
NDVI xaritasi qaysi hududga ko'proq o'g'it kerakligini aniqlashga yordam beradi.

### 4. Hosil bashorati
Mavsumiy NDVI o'zgarishlarini kuzatib, hosil hajmini bashorat qilish mumkin.

## Agro Bot va NDVI

Agro Bot platformasi Sentinel-2 yo'ldosh tasvirlaridan avtomatik NDVI xaritalarini generatsiya qiladi:
- Har 5 kunda yangilash
- Muammoli zonalarni avtomatik aniqlash
- Fermerga SMS orqali ogohlantirish
- Tarixiy taqqoslash imkoniyati

## Xulosa

NDVI — oddiy, lekin juda kuchli vosita. U fermerga dalasidagi muammolarni erta bosqichda ko'rishga yordam beradi. Agro Bot bu texnologiyani har bir O'zbekiston fermeriga taqdim etadi.
    `,
  },
  {
    slug: "agritech-startaplar-uzbekistan",
    title: "O'zbekistonda agritech startaplar: imkoniyatlar va qiyinchiliklar",
    excerpt: "Agritech sohasida startap boshlash uchun nimalar kerak? Grantlar, bozor va texnologiyalar haqida.",
    date: "2025-01-05",
    tag: "Biznes",
    readTime: "9 daqiqa",
    author: "Jamshid Alimov",
    content: `
## Nima uchun agritech?

O'zbekiston — qishloq xo'jaligi mamlakati. Aholi yarmidan ortig'i qishloqda yashaydi, YaIMning 25% dan ortig'i qishloq xo'jaligiga tegishli. Ammo texnologik rivojlanish darajasi past. Bu katta imkoniyat demakdir.

## Bozor hajmi

- **Global precision agriculture bozori:** $12 mlrd (2025), $25 mlrd+ (2030 prognoz)
- **O'zbekiston qishloq xo'jaligi:** ~$15 mlrd YaIM
- **Maqsadli bozor:** 80,000+ fermer xo'jaligi, 2,500+ klaster

## Imkoniyatlar

### 1. Hukumat qo'llab-quvvatlashi
- IT Park rezidentligi: 5 yil soliqdan ozod
- Qishloq xo'jaligi innovatsiyalari uchun subsidiyalar
- "O'zbekiston-2030" strategiyasida agritech ustuvor

### 2. Xalqaro grantlar
- UNDP Innovation grants
- FAO qishloq xo'jaligi dasturlari
- World Bank Climate Smart Agriculture
- USAID agritech grantlari
- GIZ dasturlari

### 3. Texnologik infratuzilma
- 4G/LTE qamrovi kengaymoqda
- Bepul yo'ldosh ma'lumotlari (Sentinel-2)
- IoT sensorlar arzonlashgan (60-70% so'nggi 5 yilda)

## Qiyinchiliklar

### 1. Raqamli savodxonlik
Dehqonlarning ko'pchiligi 40-60 yoshda va texnologiya bilan kam tanish. Platforma juda oddiy va tushunarli bo'lishi kerak.

### 2. Internet
Qishloq hududlarida internet aloqasi cheklangan yoki sust. Offline rejim va SMS muhim.

### 3. Moliyalashtirish
Mahalliy VC ekotizimi rivojlanmagan. Ko'p startaplar grantlar va angel investorlarga tayanadi.

### 4. Monetizatsiya
Dehqonlarning to'lov qobiliyati cheklangan. Arzon narxlar va freemium model kerak.

## Muvaffaqiyat uchun maslahatlar

1. **Dehqon bilan yashang** — muammoni chuqur tushuning
2. **Oddiy boshlang** — MVP bilan tez sinab ko'ring
3. **Offline ishlang** — internet bo'lmasa ham qiymat bering
4. **O'zbek tilida** — barcha interfeys va tavsiyalar o'zbekcha
5. **Hamkorlik qiling** — hukumat, ilmiy institutlar, xalqaro tashkilotlar

## Agro Bot tajribasi

Biz Agro Botni 2024-yilda Toshkentda boshladik. Birinchi pilotimiz Toshkent viloyatida 50 ta fermer bilan o'tdi. Natijalar:
- Suvni 35% tejash
- Hosildorlik 25% oshishi
- Fermerlar 90% qoniqishi

## Xulosa

O'zbekistonda agritech uchun katta imkoniyat bor. Lekin muvaffaqiyat uchun mahalliy sharoitni chuqur tushunish, oddiy yechimlar yaratish va sabr-toqat kerak.
    `,
  },
];
