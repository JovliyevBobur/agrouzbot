import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Ismingizni kiriting").max(100),
  phone: z.string().trim().min(1, "Telefon raqamingizni kiriting").max(20),
  farmSize: z.string().trim().max(50),
  message: z.string().trim().max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", farmSize: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    toast.success("Xabaringiz qabul qilindi! Tez orada bog'lanamiz.");
    setForm({ name: "", phone: "", farmSize: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Aloqa</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">Biz bilan bog'laning</h1>
            <p className="text-lg text-muted-foreground">
              Savollaringiz bormi? Fermer sifatida ro'yxatdan o'tmoqchimisiz? Biz yordam beramiz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">Xabar yuboring</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ismingiz *</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ismingizni kiriting"
                      className="h-12 rounded-xl"
                      maxLength={100}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon raqam *</Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+998 90 123 45 67"
                      className="h-12 rounded-xl"
                      maxLength={20}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farmSize">Yer maydoni (gektar)</Label>
                    <Input
                      id="farmSize"
                      value={form.farmSize}
                      onChange={(e) => setForm({ ...form, farmSize: e.target.value })}
                      placeholder="Masalan: 10 ga"
                      className="h-12 rounded-xl"
                      maxLength={50}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Xabar</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Savolingiz yoki xabaringiz..."
                      className="rounded-xl min-h-[120px]"
                      maxLength={1000}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-xl h-12">
                    <Send className="w-5 h-5 mr-2" />
                    Yuborish
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">Bog'lanish ma'lumotlari</h2>
                <div className="space-y-5">
                  {[
                    { icon: Mail, label: "Email", value: "jbobur005@gmail.com" },
                    { icon: Phone, label: "Telefon", value: "+998 (93) 005-42-87" },
                    { icon: MapPin, label: "Manzil", value: "Xorazm viloyati, Tuproqqal'a tumani" },
                    { icon: MessageSquare, label: "Telegram", value: "@Jovliyev_Bobur" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="w-10 h-10 text-primary mx-auto" />
                    <p className="text-sm text-muted-foreground">Toshkent, O'zbekiston</p>
                    <p className="text-xs text-muted-foreground">IT Park, Mirzo Ulug'bek tumani</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
