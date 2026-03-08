import Layout from "@/components/layout/Layout";
import heroWheat from "@/assets/hero-wheat.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Bepul",
    price: "$0",
    period: "abadiy",
    desc: "Boshlang'ich fermerlar uchun",
    features: ["Asosiy tuproq tavsiyalari", "Ob-havo prognozi", "Haftalik SMS xabar", "O'zbek tilida interfeys"],
    cta: "Boshlash",
    popular: false,
    gradient: "",
  },
  {
    name: "Fermer",
    price: "$10",
    period: "oyiga",
    desc: "Professional fermerlar uchun",
    features: [
      "AI sug'orish tavsiyalari",
      "O'g'itlash rejasi",
      "Real-time sensor ma'lumotlari",
      "Kunlik bildirishnomalar",
      "Tarixiy ma'lumotlar",
      "Telefon qo'llab-quvvatlash",
    ],
    cta: "Tanlash",
    popular: true,
    gradient: "bg-gradient-to-br from-primary to-leaf",
  },
  {
    name: "Pro",
    price: "$25",
    period: "oyiga",
    desc: "Yirik fermer xo'jaliklari uchun",
    features: [
      "Barcha Fermer xususiyatlari",
      "Yo'ldosh tasvir tahlili",
      "Ekin kasalligi aniqlash",
      "Ko'p dalani boshqarish",
      "API integratsiya",
      "Shaxsiy maslahatchi",
    ],
    cta: "Tanlash",
    popular: false,
    gradient: "",
  },
  {
    name: "Enterprise",
    price: "$100",
    period: "oyiga",
    desc: "Klasterlar va agro firmalar uchun",
    features: [
      "Barcha Pro xususiyatlari",
      "Sensor to'plami kiritilgan",
      "Maxsus AI modellari",
      "Ma'lumot API",
      "On-premise o'rnatish",
      "24/7 qo'llab-quvvatlash",
      "SLA kafolati",
    ],
    cta: "Bog'lanish",
    popular: false,
    gradient: "",
  },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-hero relative">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Narxlar</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">Har bir fermer uchun <span className="text-gradient-primary">mos narx</span></h1>
            <p className="text-lg text-muted-foreground">
              Bepul boshlang, kerak bo'lganda kengaytiring. Birinchi oyda bekor qilish bepul.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card
                  className={`h-full flex flex-col hover-lift ${
                    plan.popular ? "border-primary shadow-xl shadow-primary/10 relative scale-105" : "border-0 shadow-lg shadow-primary/[0.03]"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-leaf text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Ommabop
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="font-heading">{plan.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{plan.desc}</p>
                    <div className="pt-2">
                      <span className="text-4xl font-heading font-bold">{plan.price}</span>
                      <span className="text-muted-foreground text-sm ml-1">/{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 flex-1">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="mt-6 w-full rounded-xl h-12"
                      variant={plan.popular ? "default" : "outline"}
                      asChild
                    >
                      <Link to="/auth">{plan.cta} <ArrowRight className="w-4 h-4 ml-1" /></Link>
                    </Button>
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

export default Pricing;
