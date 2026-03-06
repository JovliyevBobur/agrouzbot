import { Link } from "react-router-dom";
import { Sprout, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-heading font-bold text-xl">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Sprout className="w-5 h-5 text-primary-foreground" />
              </div>
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
                <span>info@agrobot.uz</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+998 90 123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Toshkent, O'zbekiston</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-50">
          <p>© 2025 Agro Bot. Barcha huquqlar himoyalangan.</p>
          <p>O'zbekiston fermerlari uchun ishlab chiqilgan 🇺🇿</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
