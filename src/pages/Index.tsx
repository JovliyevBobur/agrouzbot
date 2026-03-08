import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Droplets, Thermometer, Leaf, Satellite, Brain,
  TrendingUp, ArrowRight, Smartphone, Cpu,
  CheckCircle2, Star, ChevronRight, Sprout, Zap, Shield, Globe
} from "lucide-react";
import heroFarmland from "@/assets/hero-farmland.jpg";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stats = [
  { value: "40%", label: "Suv tejash", icon: Droplets },
  { value: "30%", label: "Hosildorlik oshishi", icon: TrendingUp },
  { value: "20%", label: "Xarajat kamayishi", icon: Zap },
  { value: "85%+", label: "AI aniqligi", icon: Brain },
];

const features = [
  { icon: Thermometer, title: "Tuproq monitoring", desc: "Real vaqtda tuproq namligi, harorati va tarkibini kuzatish", color: "bg-soil/10 text-soil" },
  { icon: Droplets, title: "Aqlli sug'orish", desc: "AI asosida sug'orish jadvali va suv tejash tavsiyalari", color: "bg-water/10 text-water" },
  { icon: Leaf, title: "O'g'it tavsiyasi", desc: "NPK tahlili asosida aniq o'g'itlash rejasi", color: "bg-leaf/10 text-leaf" },
  { icon: Satellite, title: "Yo'ldosh tahlili", desc: "Sun'iy yo'ldosh tasvirlari orqali ekin salomatligini kuzatish", color: "bg-secondary/10 text-secondary" },
  { icon: Brain, title: "Kasallik aniqlash", desc: "Ekin kasalliklarini suratdan aniqlash va davolash tavsiyasi", color: "bg-accent/10 text-accent" },
  { icon: Sprout, title: "Ekin tanlash", desc: "Tuproq va iqlim asosida eng samarali ekinni tanlash", color: "bg-primary/10 text-primary" },
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
  { title: "Suv tanqisligi", desc: "Qishloq xo'jaligi suvning 90% dan ortig'ini iste'mol qiladi", icon: Droplets, stat: "90%" },
  { title: "Tuproq sho'rlanishi", desc: "Yerlarning 50% dan ortig'i degradatsiyaga uchragan", icon: Thermometer, stat: "50%" },
  { title: "Past hosildorlik", desc: "Zamonaviy texnologiyalarsiz hosildorlik past qolmoqda", icon: TrendingUp, stat: "3x" },
  { title: "Eski usullar", desc: "Dehqonlar hali ham an'anaviy usullardan foydalanmoqda", icon: Leaf, stat: "70%" },
];

const partners = [
  { name: "IT Park", icon: Shield },
  { name: "FAO", icon: Globe },
  { name: "UNDP", icon: Globe },
  { name: "World Bank", icon: Shield },
];

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-dark-green">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={heroFarmland} alt="O'zbekiston dalasi" className="w-full h-full object-cover scale-110 opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(150_25%_8%)]" />
        </motion.div>

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-secondary/8 blur-3xl animate-float-delayed" />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="container py-24 md:py-36 relative text-white">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium"
            >
              <Sprout className="w-4 h-4" />
              O'zbekiston fermerlari uchun AI platforma
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-subtle" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight"
            >
              AI yordamida{" "}
              <span className="text-gradient-primary">aqlli qishloq</span>{" "}
              xo'jaligi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Sun'iy yo'ldosh tasvirlari va tuproq sensorlari orqali fermerlarga aniq, ilmiy asoslangan tavsiyalar beruvchi platforma.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="text-base px-8 h-14 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all" asChild>
                <Link to="/auth">
                  Boshlash <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-14 rounded-2xl glass" asChild>
                <Link to="/how-it-works">Demo ko'rish</Link>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-6 pt-4"
            >
              {partners.map((p, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
                  <p.icon className="w-3.5 h-3.5" />
                  <span>{p.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dashboard image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 max-w-5xl mx-auto"
          >
            <div className="rounded-2xl border bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/10 overflow-hidden hover-lift">
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
        </motion.div>
      </section>

      {/* Problems */}
      <section className="py-24 md:py-32 relative bg-gradient-dark-green text-white">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none opacity-30" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Muammo</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3">
              O'zbekiston qishloq xo'jaligidagi <span className="text-gradient-accent">muammolar</span>
            </h2>
          </motion.div>
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
                <Card className="h-full hover-lift border-destructive/10 bg-destructive/[0.02] group">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-destructive" />
                      </div>
                      <span className="text-2xl font-heading font-bold text-destructive/30">{item.stat}</span>
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

      {/* Features */}
      <section className="py-24 md:py-32 bg-gradient-section relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Yechim</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3">
              Agro Bot platforma <span className="text-gradient-primary">imkoniyatlari</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              AI va IoT texnologiyalari orqali fermerlarga zamonaviy yechimlar
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Card className="h-full hover-lift group border-0 shadow-lg shadow-primary/[0.03]">
                  <CardContent className="p-7 space-y-4">
                    <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <f.icon className="w-7 h-7" />
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-leaf" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-5" />
        <div className="container relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-primary-foreground"
              >
                <s.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <p className="text-4xl md:text-6xl font-heading font-bold">{s.value}</p>
                <p className="text-sm md:text-base mt-2 opacity-80">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-medium text-secondary uppercase tracking-wider">Jarayon</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3">Qanday ishlaydi?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="text-center space-y-4 relative"
              >
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg shadow-primary/5">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <span className="inline-block text-xs font-bold text-primary font-heading bg-primary/10 px-3 py-1 rounded-full">{step.num}</span>
                <h3 className="font-heading font-semibold text-xl">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-primary/20 mx-auto hidden md:block absolute -right-4 top-10" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Flow diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              {[
                { label: "Sensor", color: "border-soil/30 bg-soil/5" },
                { label: "Cloud", color: "border-secondary/30 bg-secondary/5" },
                { label: "AI", color: "border-primary/30 bg-primary/5" },
                { label: "Fermer", color: "border-accent/30 bg-accent/5" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`px-6 py-3 rounded-2xl border-2 ${item.color} font-heading font-semibold text-sm shadow-sm`}>
                    {item.label}
                  </div>
                  {i < 3 && <ArrowRight className="w-5 h-5 text-primary/40 hidden md:block" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-leaf" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary-foreground/5 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary-foreground/5 blur-2xl" />
        </div>
        <div className="container text-center text-primary-foreground relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Agro Bot ni sinab ko'ring
            </h2>
            <p className="text-lg opacity-80 max-w-lg mx-auto">
              Bepul ro'yxatdan o'ting va platformaning barcha imkoniyatlaridan foydalaning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-base px-8 h-14 rounded-2xl shadow-xl"
                asChild
              >
                <Link to="/auth">
                  Ro'yxatdan o'ting <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-14 rounded-2xl border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/contact">Bog'lanish</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
