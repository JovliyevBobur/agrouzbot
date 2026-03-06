import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "Tuproq sog'lig'ini qanday tekshirish kerak?",
    excerpt: "Tuproq pH, namligi va mineral tarkibini bilish — hosildorlikning asosi. Bu maqolada oddiy usullardan IoT sensorgacha bo'lgan yechimlarni ko'rib chiqamiz.",
    date: "2025-03-01",
    tag: "Tuproq",
    slug: "#",
  },
  {
    title: "Suvni tejashning 5 ta samarali usuli",
    excerpt: "O'zbekistonda suv tanqisligi kuchayib bormoqda. Tomchilatib sug'orish, mulchalash va AI sug'orish jadvali — eng samarali usullar.",
    date: "2025-02-20",
    tag: "Suv tejash",
    slug: "#",
  },
  {
    title: "Sun'iy intellekt qishloq xo'jaligida: dunyo tajribasi",
    excerpt: "Hindiston, Braziliya va AQShda AI qanday qo'llanilmoqda? O'zbekiston uchun qanday saboqlar bor?",
    date: "2025-02-10",
    tag: "AI",
    slug: "#",
  },
  {
    title: "IoT sensorlar: fermer uchun qo'llanma",
    excerpt: "Tuproq sensorlarini qanday tanlash, o'rnatish va ulardan samarali foydalanish bo'yicha to'liq qo'llanma.",
    date: "2025-01-28",
    tag: "IoT",
    slug: "#",
  },
  {
    title: "NDVI indeksi nima va u nima uchun kerak?",
    excerpt: "Yo'ldosh tasvirlari orqali ekin salomatligini kuzatish — NDVI indeksining ahamiyati va uni qanday ishlatish.",
    date: "2025-01-15",
    tag: "Yo'ldosh",
    slug: "#",
  },
  {
    title: "O'zbekistonda agritech startaplar: imkoniyatlar va qiyinchiliklar",
    excerpt: "Agritech sohasida startap boshlash uchun nimalar kerak? Grantlar, bozor va texnologiyalar haqida.",
    date: "2025-01-05",
    tag: "Biznes",
    slug: "#",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">Bilim markazi</h1>
            <p className="text-lg text-muted-foreground">
              Qishloq xo'jaligi, texnologiya va agritech haqida foydali maqolalar
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        <Tag className="w-3 h-3" />
                        {post.tag}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                      O'qish <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
