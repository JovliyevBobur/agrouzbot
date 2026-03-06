import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp, Globe, DollarSign, Users, Target, ArrowRight,
  BarChart3, Zap, Shield
} from "lucide-react";

const marketStats = [
  { label: "Global Precision Ag Market (2030)", value: "$25B+", icon: Globe },
  { label: "O'zbekiston Ag GDP ulushi", value: "25%+", icon: BarChart3 },
  { label: "Maqsadli fermer xo'jaliklari", value: "80,000+", icon: Users },
  { label: "Irrigatsiya maydoni", value: "4.3M ga", icon: Target },
];

const revenueStreams = [
  { title: "SaaS Subscription", desc: "Fermerlar va agro firmalar uchun oylik obuna", pct: "40%" },
  { title: "Sensor Hardware", desc: "IoT sensor to'plamlari sotish va o'rnatish", pct: "25%" },
  { title: "Data Analytics", desc: "Hukumat va tadqiqot tashkilotlari uchun ma'lumot tahlili", pct: "20%" },
  { title: "Enterprise API", desc: "Sug'urta va agro firmalar uchun API xizmatlari", pct: "15%" },
];

const growth = [
  { phase: "1-yil", users: "1,000", revenue: "$20K", focus: "MVP + Pilot" },
  { phase: "2-yil", users: "10,000", revenue: "$200K", focus: "O'zbekiston bo'ylab kengayish" },
  { phase: "3-yil", users: "50,000", revenue: "$1.2M", focus: "Markaziy Osiyo ekspansiyasi" },
];

const Investors = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Investorlar uchun</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              $25B bozorga kirish imkoniyati
            </h1>
            <p className="text-lg text-muted-foreground">
              Markaziy Osiyodagi birinchi AI-powered agritech platforma. Impact + Revenue.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <Link to="/contact">Pitch Deck olish <ArrowRight className="w-5 h-5 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Bozor imkoniyati</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-3">
                    <s.icon className="w-8 h-8 text-primary mx-auto" />
                    <p className="text-3xl font-heading font-bold">{s.value}</p>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 md:py-28 bg-gradient-section">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Biznes modeli</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {revenueStreams.map((r, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-heading font-bold text-primary">{r.pct}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">{r.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">O'sish strategiyasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {growth.map((g, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <span className="text-sm font-medium text-primary">{g.phase}</span>
                  <p className="text-3xl font-heading font-bold">{g.revenue}</p>
                  <p className="text-lg font-semibold">{g.users} foydalanuvchi</p>
                  <p className="text-sm text-muted-foreground">{g.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unit Economics */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
            {[
              { label: "LTV:CAC", value: "6x" },
              { label: "Gross Margin", value: "70%" },
              { label: "Churn Rate", value: "<5%" },
              { label: "Payback", value: "4 oy" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-heading font-bold">{item.value}</p>
                <p className="text-sm opacity-80 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Hamkorlik qilaylik</h2>
          <p className="text-muted-foreground">
            Pitch deck, moliyaviy prognoz va batafsil ma'lumot olish uchun bog'laning.
          </p>
          <Button size="lg" className="rounded-xl" asChild>
            <Link to="/contact">Bog'lanish <ArrowRight className="w-5 h-5 ml-1" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
