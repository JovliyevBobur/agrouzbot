import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Eye, Target, Users, Leaf, Brain } from "lucide-react";

const values = [
  { icon: Heart, title: "Dehqon birinchi", desc: "Har bir qaror dehqon manfaati uchun qabul qilinadi", color: "bg-destructive/10 text-destructive" },
  { icon: Brain, title: "Innovatsiya", desc: "Eng zamonaviy AI va IoT texnologiyalarini qo'llaymiz", color: "bg-secondary/10 text-secondary" },
  { icon: Leaf, title: "Barqarorlik", desc: "Atrof-muhit va tabiat resurslarini asraymiz", color: "bg-leaf/10 text-leaf" },
  { icon: Users, title: "Hamkorlik", desc: "Fermerlar, olimlar va texnologlar birgalikda ishlaydi", color: "bg-accent/10 text-accent" },
];

const team = [
  { name: "Jamshid Alimov", role: "CEO & Co-Founder", desc: "10 yillik agritech tajribasi" },
  { name: "Nodira Karimova", role: "CTO", desc: "AI/ML mutaxassisi, Google alumni" },
  { name: "Sardor Raxmatov", role: "IoT Lead", desc: "IoT va embedded systems muhandisi" },
  { name: "Dr. Gulnora Tosheva", role: "Chief Agronomist", desc: "Tuproqshunoslik fanlari doktori" },
];

const About = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-hero relative">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Biz haqimizda</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              O'zbekiston fermerlarining <span className="text-gradient-primary">texnologik hamkori</span>
            </h1>
          </div>
        </div>
      </section>




      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-gradient-section relative">
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="hover-lift border-0 shadow-lg shadow-primary/[0.03] h-full">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">Missiya</h3>
                  <p className="text-muted-foreground leading-relaxed">AI va IoT texnologiyalari orqali O'zbekiston fermerlariga arzon, aniq va tushunarli qishloq xo'jaligi tavsiyalari berish — suvni tejash va hosildorlikni oshirish.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="hover-lift border-0 shadow-lg shadow-primary/[0.03] h-full">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <Eye className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">Vizyon</h3>
                  <p className="text-muted-foreground leading-relaxed">2030 yilga kelib Markaziy Osiyodagi har bir fermer sun'iy intellekt maslahatchisiga ega bo'lsin — oziq-ovqat xavfsizligi va barqaror qishloq xo'jaligi uchun.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Qadriyatlarimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="text-center h-full hover-lift border-0 shadow-lg shadow-primary/[0.03]">
                  <CardContent className="p-6 space-y-3">
                    <div className={`w-14 h-14 rounded-2xl ${v.color} flex items-center justify-center mx-auto`}>
                      <v.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading font-semibold">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator */}
      <section className="py-20 md:py-28 bg-gradient-section">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Loyiha yaratuvchisi</h2>
          <div className="max-w-sm mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <Card className="text-center h-full hover-lift border-0 shadow-lg shadow-primary/[0.03]">
                <CardContent className="p-8 space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-leaf/10 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-heading font-bold text-primary">JB</span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl">Jovliyev Bobur</h3>
                  <p className="text-sm text-primary font-medium">Full Stack Developer & Data Analyst</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
