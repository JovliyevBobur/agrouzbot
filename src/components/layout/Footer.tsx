import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter */}
      <div className="border-b border-background/10">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-heading font-bold text-xl">Yangiliklardan xabardor bo'ling</h3>
              <p className="text-sm opacity-70 mt-1">Agritech yangiliklari va foydali maslahatlar</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input
                placeholder="Email manzilingiz"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 h-11"
              />
              <Button variant="secondary" size="icon" className="h-11 w-11 shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-heading font-bold text-xl">
              <img src="/logo.png" alt="Agro Bot" className="w-10 h-10 rounded-lg object-cover" />
              <span>Agro Bot</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              AI yordamida O'zbekiston qishloq xo'jaligini zamonaviylashtirish — har bir fermer uchun aqlli yechim.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Sahifalar</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <Link to="/" className="hover:opacity-100 transition-opacity">Bosh sahifa</Link>
              <Link to="/product" className="hover:opacity-100 transition-opacity">Mahsulot</Link>
              <Link to="/pricing" className="hover:opacity-100 transition-opacity">Narxlar</Link>
              <Link to="/about" className="hover:opacity-100 transition-opacity">Biz haqimizda</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Resurslar</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link>
              <Link to="/how-it-works" className="hover:opacity-100 transition-opacity">Qanday ishlaydi</Link>
              <Link to="/investors" className="hover:opacity-100 transition-opacity">Investorlar</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Aloqa</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Bog'lanish</h4>
            <div className="flex flex-col gap-3 text-sm opacity-70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>jbobur005@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+998 (93) 005-42-87</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Xorazm viloyati, Tuproqqal'a tumani</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-50">
          <p>© 2026 Agro Bot. Barcha huquqlar himoyalangan.</p>
          <p>O'zbekiston fermerlari uchun ishlab chiqilgan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
