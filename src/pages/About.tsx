import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Eye, Target, Users, Code, Leaf, Brain, BarChart3 } from "lucide-react";

const values = [
  { icon: Heart, title: "Dehqon birinchi", desc: "Har bir qaror dehqon manfaati uchun qabul qilinadi" },
  { icon: Brain, title: "Innovatsiya", desc: "Eng zamonaviy AI va IoT texnologiyalarini qo'llaymiz" },
  { icon: Leaf, title: "Barqarorlik", desc: "Atrof-muhit va tabiat resurslarini asraymiz" },
  { icon: Users, title: "Hamkorlik", desc: "Fermerlar, olimlar va texnologlar birgalikda ishlaydi" },
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
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Biz haqimizda</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              O'zbekiston fermerlarining texnologik hamkori
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl space-y-8">
          <h2 className="text-3xl font-heading font-bold">Bizning hikoyamiz</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Agro Bot 2024-yilda Toshkentda tashkil etilgan. Biz O'zbekiston qishloq xo'jaligidagi eng katta muammolarni — suv tanqisligi, tuproq degradatsiyasi va past hosildorlikni — zamonaviy texnologiyalar yordamida hal qilishga qaror qildik.
            </p>
            <p>
              Jamoamiz AI muhandislari, agronomlar va IoT mutaxassislaridan iborat. Biz birinchi pilotni Toshkent viloyatida 50 ta fermer bilan o'tkazdik va natijalar kutilganidan ham yaxshi bo'ldi — fermerlar suvni 35% ga tejab, hosildorlikni 25% ga oshirdilar.
            </p>
            <p>
              Bugun biz O'zbekiston bo'ylab kengayib, Markaziy Osiyo bozorlariga chiqishga tayyorlanmoqdamiz. Bizning maqsadimiz — 2030 yilga kelib har bir O'zbekiston fermeri AI maslahatchiga ega bo'lishi.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-gradient-section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-4">
                <Target className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-heading font-bold">Missiya</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI va IoT texnologiyalari orqali O'zbekiston fermerlariga arzon, aniq va tushunarli qishloq xo'jaligi tavsiyalari berish — suvni tejash va hosildorlikni oshirish.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 space-y-4">
                <Eye className="w-10 h-10 text-secondary" />
                <h3 className="text-2xl font-heading font-bold">Vizyon</h3>
                <p className="text-muted-foreground leading-relaxed">
                  2030 yilga kelib Markaziy Osiyodagi har bir fermer sun'iy intellekt maslahatchisiga ega bo'lsin — oziq-ovqat xavfsizligi va barqaror qishloq xo'jaligi uchun.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Qadriyatlarimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-3">
                    <v.icon className="w-8 h-8 text-primary mx-auto" />
                    <h3 className="font-heading font-semibold">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-gradient-section">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Jamoamiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <span className="text-xl font-heading font-bold text-primary">
                        {t.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold">{t.name}</h3>
                    <p className="text-sm text-primary font-medium">{t.role}</p>
                    <p className="text-xs text-muted-foreground">{t.desc}</p>
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

export default About;
