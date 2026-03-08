import Layout from "@/components/layout/Layout";
import heroWheat from "@/assets/hero-wheat.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cpu, Cloud, Brain, Smartphone, ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Cpu,
    title: "Sensorlar o'rnatiladi",
    desc: "Tuproqqa IoT sensorlar o'rnatiladi. Ular tuproq namligi, harorat, pH va NPK darajasini o'lchaydi.",
    details: ["5 daqiqada o'rnatiladi", "Batareya 2 yil ishlaydi", "Suv o'tkazmaydi (IP67)", "Har 15 daqiqada ma'lumot yig'adi"],
    color: "from-soil/10 to-soil/5",
  },
  {
    num: "02",
    icon: Cloud,
    title: "Ma'lumot serverga yuboriladi",
    desc: "Sensorlar LoRaWAN yoki NB-IoT orqali ma'lumotlarni bulut serverga yuboradi.",
    details: ["Uzoq masofaga uzatish (10+ km)", "Kam energiya sarflanadi", "Xavfsiz shifrlangan aloqa", "Offline rejim qo'llab-quvvatlanadi"],
    color: "from-secondary/10 to-secondary/5",
  },
  {
    num: "03",
    icon: Brain,
    title: "AI tahlil qiladi",
    desc: "Sun'iy intellekt barcha ma'lumotlarni tahlil qiladi va fermerga eng yaxshi tavsiyani beradi.",
    details: ["Machine Learning modellari", "85%+ bashorat aniqligi", "O'zbekiston tuproqiga moslashgan", "Doimiy o'rganib boradi"],
    color: "from-primary/10 to-primary/5",
  },
  {
    num: "04",
    icon: Smartphone,
    title: "Fermer tavsiya oladi",
    desc: "Fermer mobil ilova yoki SMS orqali o'zbek tilida aniq tavsiyalar oladi.",
    details: ["O'zbek tilida", "SMS ham ishlaydi", "Ovozli bildirishnomalar", "Oddiy va tushunarli"],
    color: "from-accent/10 to-accent/5",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-hero relative">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Jarayon</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">Qanday <span className="text-gradient-primary">ishlaydi?</span></h1>
            <p className="text-lg text-muted-foreground">
              Agro Bot 4 ta oddiy bosqichda ishlaydi. Siz faqat telefon ishlatishni bilsangiz bas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="overflow-hidden hover-lift border-0 shadow-lg shadow-primary/[0.03]">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className={`md:w-20 bg-gradient-to-b ${step.color} flex items-center justify-center p-4 md:p-0`}>
                        <span className="text-2xl font-heading font-bold text-primary">{step.num}</span>
                      </div>
                      <div className="flex-1 p-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <step.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="font-heading font-semibold text-xl">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.details.map((d, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-6 h-6 text-primary/20 animate-bounce" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button size="lg" className="rounded-2xl h-14" asChild>
              <Link to="/auth">Hozir boshlash <ArrowRight className="w-5 h-5 ml-1" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
