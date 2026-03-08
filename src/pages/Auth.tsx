import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/components/AuthProvider";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const signupSchema = z.object({
  fullName: z.string().trim().min(2, "Ism kamida 2 harf bo'lishi kerak").max(100),
  email: z.string().trim().email("Email noto'g'ri formatda"),
  password: z.string().min(6, "Parol kamida 6 ta belgi bo'lishi kerak").max(100),
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin,
      });
      if (result.error) {
        toast.error("Google bilan kirishda xatolik yuz berdi");
      }
    } catch {
      toast.error("Google bilan kirishda xatolik yuz berdi");
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          toast.error(error.message === "Invalid login credentials" ? "Email yoki parol noto'g'ri" : error.message);
        } else {
          toast.success("Muvaffaqiyatli kirdingiz!");
          navigate("/");
        }
      } else {
        const result = signupSchema.safeParse({ fullName, email, password });
        if (!result.success) { toast.error(result.error.errors[0].message); setLoading(false); return; }
        const { error } = await signUp(email, password, fullName);
        if (error) { toast.error(error.message); }
        else { setEmailSent(true); toast.success("Tasdiqlash kodi emailingizga yuborildi!"); }
      }
    } finally { setLoading(false); }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md">
          <Card className="shadow-2xl border-primary/10">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Mail className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-bold">Emailni tekshiring!</h2>
              <p className="text-muted-foreground">
                <strong>{email}</strong> manziliga tasdiqlash havolasi yuborildi. Emailingizni ochib, havolani bosing.
              </p>
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full" onClick={() => setEmailSent(false)}>Boshqa email bilan sinash</Button>
                <Button variant="ghost" className="w-full" asChild><Link to="/">Bosh sahifaga qaytish</Link></Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 font-heading font-bold text-2xl">
            <img src="/logo.png" alt="Agro Bot" className="w-12 h-12 rounded-xl" />
            <span>Agro Bot</span>
          </Link>
        </div>

        <Card className="shadow-2xl border-primary/10">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-heading font-bold">{isLogin ? "Kirish" : "Ro'yxatdan o'tish"}</h1>
              <p className="text-sm text-muted-foreground mt-2">
                {isLogin ? "Agro Bot platformasiga kiring" : "Yangi hisob yarating va platformadan foydalaning"}
              </p>
            </div>

            {/* Google Sign-in */}
            <Button
              variant="outline"
              className="w-full h-12 rounded-xl mb-4"
              onClick={handleGoogleSignIn}
              disabled={googleLoading}
            >
              {googleLoading ? (
                <span className="animate-spin mr-2">⏳</span>
              ) : (
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              )}
              Google bilan kirish
            </Button>

            <div className="relative mb-4">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-xs text-muted-foreground">yoki</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">To'liq ismingiz</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Ismingiz" className="pl-10 h-12 rounded-xl" maxLength={100} />
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" className="pl-10 h-12 rounded-xl" maxLength={255} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Parol</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Kamida 6 ta belgi" className="pl-10 pr-10 h-12 rounded-xl" maxLength={100} required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              {isLogin && (
                <div className="text-right">
                  <Link to="/reset-password" className="text-sm text-primary hover:underline">Parolni unutdingizmi?</Link>
                </div>
              )}
              <Button type="submit" size="lg" className="w-full rounded-xl h-12" disabled={loading}>
                {loading ? "Kutib turing..." : isLogin ? "Kirish" : "Ro'yxatdan o'tish"}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">{isLogin ? "Hisobingiz yo'qmi? " : "Hisobingiz bormi? "}</span>
              <button onClick={() => setIsLogin(!isLogin)} className="text-primary font-medium hover:underline">
                {isLogin ? "Ro'yxatdan o'ting" : "Kirish"}
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Auth;
