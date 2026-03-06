import Layout from "@/components/layout/Layout";
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
    desc: "Tuproqqa IoT sensorlar o'rnatiladi. Ular tuproq namligi, harorat, pH va NPK darajasini o'lchaydi. Sensorlar batareya bilan ishlaydi va 2 yilgacha xizmat qiladi.",
    details: ["5 daqiqada o'rnatiladi", "Batareya 2 yil ishlaydi", "Suv o'tkazmaydi (IP67)", "Har 15 daqiqada ma'lumot yig'adi"],
  },
  {
    num: "02",
    icon: Cloud,
    title: "Ma'lumot serverga yuboriladi",
    desc: "Sensorlar LoRaWAN yoki NB-IoT orqali ma'lumotlarni bulut serverga yuboradi. Yo'ldosh tasvirlari ham avtomatik yuklanadi.",
    details: ["Uzoq masofaga uzatish (10+ km)", "Kam energiya sarflanadi", "Xavfsiz shifrlangan aloqa", "Offline rejim qo'llab-quvvatlanadi"],
  },
  {
    num: "03",
    icon: Brain,
    title: "AI tahlil qiladi",
    desc: "Sun'iy intellekt barcha ma'lumotlarni — sensor, yo'ldosh, ob-havo — birgalikda tahlil qiladi va fermerga eng yaxshi tavsiyani beradi.",
    details: ["Machine Learning modellari", "85%+ bashorat aniqligi", "O'zbekiston tuproqiga moslashgan", "Doimiy o'rganib boradi"],
  },
  {
    num: "04",
    icon: Smartphone,
    title: "Fermer tavsiya oladi",
    desc: "Fermer mobil ilova yoki SMS orqali o'zbek tilida aniq, tushunarli tavsiyalar oladi. Masalan: 'Ertaga soat 6 da 30 litr suv bering.'",
    details: ["O'zbek tilida", "SMS ham ishlaydi", "Ovozli bildirishnomalar", "Oddiy va tushunarli"],
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Jarayon</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">Qanday ishlaydi?</h1>
            <p className="text-lg text-muted-foreground">
              Agro Bot 4 ta oddiy bosqichda ishlaydi. Siz faqat telefon ishlatishni bilsangiz bas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-16 bg-primary/10 flex items-center justify-center p-4 md:p-0">
                        <span className="text-2xl font-heading font-bold text-primary">{step.num}</span>
                      </div>
                      <div className="flex-1 p-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <step.icon className="w-6 h-6 text-primary" />
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
                    <ArrowDown className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="rounded-xl" asChild>
              <Link to="/contact">Hozir boshlash <ArrowRight className="w-5 h-5 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
