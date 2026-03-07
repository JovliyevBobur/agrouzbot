import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Droplets, Thermometer, Leaf, Satellite, Brain,
  TrendingUp, ArrowRight, Smartphone, Cloud, Cpu,
  CheckCircle2, Star, ChevronRight, Sprout, Zap
} from "lucide-react";
import heroFarmland from "@/assets/hero-farmland.jpg";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const stats = [
  { value: "40%", label: "Suv tejash", icon: Droplets, color: "text-water" },
  { value: "30%", label: "Hosildorlik oshishi", icon: TrendingUp, color: "text-primary" },
  { value: "20%", label: "Xarajat kamayishi", icon: Zap, color: "text-accent" },
];

const features = [
  { icon: Thermometer, title: "Tuproq monitoring", desc: "Real vaqtda tuproq namligi, harorati va tarkibini kuzatish" },
  { icon: Droplets, title: "Aqlli sug'orish", desc: "AI asosida sug'orish jadvali va suv tejash tavsiyalari" },
  { icon: Leaf, title: "O'g'it tavsiyasi", desc: "NPK tahlili asosida aniq o'g'itlash rejasi" },
  { icon: Satellite, title: "Yo'ldosh tahlili", desc: "Sun'iy yo'ldosh tasvirlari orqali ekin salomatligini kuzatish" },
  { icon: Brain, title: "Kasallik aniqlash", desc: "Ekin kasalliklarini suratdan aniqlash va davolash tavsiyasi" },
  { icon: Sprout, title: "Ekin tanlash", desc: "Tuproq va iqlim asosida eng samarali ekinni tanlash" },
];

const steps = [
  { num: "01", title: "Sensorlar o'rnatiladi", desc: "Tuproqqa IoT sensorlar o'rnatib, real vaqtda ma'lumot yig'iladi", icon: Cpu },
  { num: "02", title: "AI tahlil qiladi", desc: "Sun'iy intellekt ma'lumotlarni tahlil qilib, bashorat qiladi", icon: Brain },
  { num: "03", title: "Tavsiya olasiz", desc: "Telefon orqali aniq, tushunarli tavsiyalar olasiz", icon: Smartphone },
];

const testimonials = [
  { name: "Abdullo Karimov", role: "Fermer, Farg'ona", text: "Agro Bot tufayli suvni 35% tejadigan bo'ldim. Juda oddiy va tushunarli.", rating: 5 },
  { name: "Dilnoza Toshmatova", role: "Agrofirma rahbari", text: "Platformaning yo'ldosh tahlili bizga katta yordam berdi. Hosildorlik 25% oshdi.", rating: 5 },
  { name: "Sardor Yusupov", role: "Fermer, Toshkent viloyati", text: "O'zbek tilida ishlashi menga juda qulay. Hamma narsani tushunyapman.", rating: 5 },
];

const problems = [
  { title: "Suv tanqisligi", desc: "Qishloq xo'jaligi suvning 90% dan ortig'ini iste'mol qiladi", icon: Droplets },
  { title: "Tuproq sho'rlanishi", desc: "Yerlarning 50% dan ortig'i degradatsiyaga uchragan", icon: Thermometer },
  { title: "Past hosildorlik", desc: "Zamonaviy texnologiyalarsiz hosildorlik past qolmoqda", icon: TrendingUp },
  { title: "Eski usullar", desc: "Dehqonlar hali ham an'anaviy usullardan foydalanmoqda", icon: Leaf },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background farmland image */}
        <div className="absolute inset-0">
          <img src={heroFarmland} alt="O'zbekiston dalasi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        <div className="container py-24 md:py-36 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium border border-primary/20"
            >
              <Sprout className="w-4 h-4" />
              O'zbekiston fermerlari uchun AI platforma
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight tracking-tight"
            >
              AI yordamida{" "}
              <span className="text-gradient-primary">aqlli qishloq</span>{" "}
              xo'jaligi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Sun'iy yo'ldosh tasvirlari va tuproq sensorlari orqali fermerlarga aniq, ilmiy asoslangan tavsiyalar beruvchi platforma.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="text-base px-8 h-13 rounded-xl shadow-lg shadow-primary/25" asChild>
                <Link to="/contact">
                  Boshlash <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-13 rounded-xl backdrop-blur-sm" asChild>
                <Link to="/how-it-works">Demo ko'rish</Link>
              </Button>
            </motion.div>
          </div>

          {/* Dashboard image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="rounded-2xl border bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-sun/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="ml-3 text-xs text-muted-foreground">Agro Bot Dashboard</span>
              </div>
              <img
                src={heroDashboard}
                alt="Agro Bot AI Dashboard — tuproq tahlili, NDVI xarita, sug'orish jadvali"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 md:py-28 bg-gradient-section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Muammo</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
              O'zbekiston qishloq xo'jaligidagi muammolar
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-destructive/10 bg-destructive/[0.02]">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Features */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Yechim</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
              Agro Bot platforma imkoniyatlari
            </h2>
            <p className="text-muted-foreground mt-4">
              AI va IoT texnologiyalari orqali fermerlarga zamonaviy yechimlar taqdim etamiz
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all group">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <f.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center text-primary-foreground"
              >
                <s.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <p className="text-5xl md:text-6xl font-heading font-bold">{s.value}</p>
                <p className="text-lg mt-2 opacity-80">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 bg-gradient-section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-secondary uppercase tracking-wider">Jarayon</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Qanday ishlaydi?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="text-center space-y-4"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <step.icon className="w-9 h-9 text-primary" />
                </div>
                <span className="text-sm font-bold text-primary font-heading">{step.num}</span>
                <h3 className="font-heading font-semibold text-xl">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-muted-foreground/30 mx-auto hidden md:block rotate-0" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Flow diagram */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {["Sensor", "Cloud", "AI", "Fermer"].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="px-6 py-3 rounded-xl bg-card border font-heading font-semibold text-sm">
                    {item}
                  </div>
                  {i < 3 && <ArrowRight className="w-5 h-5 text-primary hidden md:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Fikrlar</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Fermerlar nima deydi?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Card className="h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-sun text-sun" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Agro Bot ni sinab ko'ring
            </h2>
            <p className="text-lg opacity-80">
              Bepul ro'yxatdan o'ting va platformaning barcha imkoniyatlaridan foydalaning.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-base px-8 h-13 rounded-xl"
              asChild
            >
              <Link to="/contact">
                Fermer sifatida ro'yxatdan o'ting <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
