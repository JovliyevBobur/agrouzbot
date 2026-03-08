import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sprout, Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";
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
  const [emailSent, setEmailSent] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          toast.error(error.message === "Invalid login credentials"
            ? "Email yoki parol noto'g'ri"
            : error.message);
        } else {
          toast.success("Muvaffaqiyatli kirdingiz!");
          navigate("/");
        }
      } else {
        const result = signupSchema.safeParse({ fullName, email, password });
        if (!result.success) {
          toast.error(result.error.errors[0].message);
          setLoading(false);
          return;
        }
        const { error } = await signUp(email, password, fullName);
        if (error) {
          toast.error(error.message);
        } else {
          setEmailSent(true);
          toast.success("Tasdiqlash kodi emailingizga yuborildi!");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-2xl border-primary/10">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Mail className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-bold">Emailni tekshiring!</h2>
              <p className="text-muted-foreground">
                <strong>{email}</strong> manziliga tasdiqlash havolasi yuborildi.
                Emailingizni ochib, havolani bosing.
              </p>
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full" onClick={() => setEmailSent(false)}>
                  Boshqa email bilan sinash
                </Button>
                <Button variant="ghost" className="w-full" asChild>
                  <Link to="/">Bosh sahifaga qaytish</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 font-heading font-bold text-2xl">
            <img src="/logo.png" alt="Agro Bot" className="w-12 h-12 rounded-xl" />
            <span>Agro Bot</span>
          </Link>
        </div>

        <Card className="shadow-2xl border-primary/10">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-heading font-bold">
                {isLogin ? "Kirish" : "Ro'yxatdan o'tish"}
              </h1>
              <p className="text-sm text-muted-foreground mt-2">
                {isLogin
                  ? "Agro Bot platformasiga kiring"
                  : "Yangi hisob yarating va platformadan foydalaning"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">To'liq ismingiz</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ismingiz"
                      className="pl-10 h-12 rounded-xl"
                      maxLength={100}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="pl-10 h-12 rounded-xl"
                    maxLength={255}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Parol</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Kamida 6 ta belgi"
                    className="pl-10 pr-10 h-12 rounded-xl"
                    maxLength={100}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="text-right">
                  <Link to="/reset-password" className="text-sm text-primary hover:underline">
                    Parolni unutdingizmi?
                  </Link>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl h-12"
                disabled={loading}
              >
                {loading ? "Kutib turing..." : isLogin ? "Kirish" : "Ro'yxatdan o'tish"}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">
                {isLogin ? "Hisobingiz yo'qmi? " : "Hisobingiz bormi? "}
              </span>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary font-medium hover:underline"
              >
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
