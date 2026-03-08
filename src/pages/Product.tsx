import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Monitor, Smartphone, Cpu, Satellite, Droplets, Leaf,
  Thermometer, ArrowRight, CheckCircle2, Cloud, Database, Wifi
} from "lucide-react";

const features = [
  { icon: Droplets, title: "Soil Monitoring", desc: "Real-time tuproq namligi, harorati, pH va NPK darajasini kuzatish. IoT sensorlar 24/7 ishlaydi.", color: "bg-water/10 text-water" },
  { icon: Thermometer, title: "Irrigation AI", desc: "AI algoritm ob-havo, tuproq holati va ekin turiga qarab optimal sug'orish jadvalini tuzadi.", color: "bg-soil/10 text-soil" },
  { icon: Leaf, title: "Fertilizer AI", desc: "Tuproqdagi azot, fosfor va kaliy darajasini tahlil qilib, aniq o'g'itlash rejasini tavsiya qiladi.", color: "bg-leaf/10 text-leaf" },
  { icon: Satellite, title: "Satellite Analysis", desc: "Sentinel-2 yo'ldosh tasvirlari orqali ekin salomatligi, NDVI indeksi va muammoli zonalarni aniqlash.", color: "bg-secondary/10 text-secondary" },
];

const sensors = [
  { name: "Tuproq namligi sensori", spec: "0-100%, ±2% aniqlik", type: "Capacitive v2.0" },
  { name: "pH sensori", spec: "0-14 pH, ±0.1 aniqlik", type: "Analog pH" },
  { name: "NPK sensori", spec: "0-1999 mg/kg", type: "RS485" },
  { name: "Harorat sensori", spec: "-55°C to +125°C", type: "DS18B20" },
];

const Product = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-hero relative">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Mahsulot</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Agro Bot <span className="text-gradient-primary">platformasi</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              IoT sensorlar, sun'iy yo'ldosh tasvirlari va AI algoritmlari — barchasi bitta platformada.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Dashboard</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Hamma ma'lumot <span className="text-gradient-primary">bir joyda</span></h2>
              <p className="text-muted-foreground leading-relaxed">Agro Bot dashboard orqali barcha dalalarni bir joydan boshqaring.</p>
              <ul className="space-y-3">
                {["Real-time monitoring", "Interaktiv xaritalar", "Tavsiyalar paneli", "Tarixiy ma'lumotlar"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl border bg-card shadow-xl hover-lift p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Dalalar", value: "12", icon: Monitor },
                    { label: "Sensorlar", value: "48", icon: Wifi },
                    { label: "Tavsiyalar", value: "156", icon: Cloud },
                    { label: "Tejamkorlik", value: "35%", icon: Database },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl bg-muted/50 p-4 space-y-2">
                      <item.icon className="w-5 h-5 text-primary" />
                      <p className="text-2xl font-heading font-bold">{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-gradient-section relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="container relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Xususiyatlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full hover-lift border-0 shadow-lg shadow-primary/[0.03] group">
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

      {/* Mobile App */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <div className="max-w-xs mx-auto rounded-3xl border-4 border-foreground/10 bg-card shadow-2xl p-6 space-y-4 hover-lift">
                <div className="flex items-center gap-2 pb-3 border-b">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <span className="font-heading font-semibold text-sm">Agro Bot</span>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <p className="text-xs font-medium text-primary">⚠️ Bugun sug'oring</p>
                    <p className="text-xs text-muted-foreground mt-1">Tuproq namligi 40% ga tushdi</p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-xs font-medium">📊 NPK holati</p>
                    <p className="text-xs text-muted-foreground mt-1">Azot: 45 | Fosfor: 30 | Kaliy: 55</p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-xs font-medium">🌡️ Ob-havo</p>
                    <p className="text-xs text-muted-foreground mt-1">28°C, quyoshli, yog'in kutilmaydi</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 space-y-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Mobil ilova</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Dalangizni telefondan boshqaring</h2>
              <p className="text-muted-foreground leading-relaxed">Android ilovasi orqali tavsiyalarni real vaqtda oling.</p>
              <Button className="rounded-xl" asChild>
                <Link to="/auth">Ilovani yuklab olish <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sensor Kit */}
      <section className="py-20 md:py-28 bg-gradient-section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-soil uppercase tracking-wider">Jihozlar</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Sensor to'plami</h2>
            <p className="text-muted-foreground mt-4">Professional sifatli sensorlar — arzon va ishonchli</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sensors.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="hover-lift border-0 shadow-lg shadow-primary/[0.03]">
                  <CardContent className="p-6 space-y-3 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-soil/10 flex items-center justify-center mx-auto">
                      <Cpu className="w-8 h-8 text-soil" />
                    </div>
                    <h3 className="font-heading font-semibold">{s.name}</h3>
                    <p className="text-xs text-muted-foreground">{s.type}</p>
                    <p className="text-xs text-primary font-medium">{s.spec}</p>
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

export default Product;
