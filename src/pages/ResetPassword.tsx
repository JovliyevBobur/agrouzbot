import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // Check if this is a recovery callback
  const hash = window.location.hash;
  const isRecovery = hash.includes("type=recovery");

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) {
      toast.error(error.message);
    } else {
      setSent(true);
      toast.success("Parolni tiklash havolasi emailingizga yuborildi!");
    }
    setLoading(false);
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast.error("Parol kamida 6 ta belgi bo'lishi kerak");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Parol muvaffaqiyatli o'zgartirildi!");
      window.location.href = "/";
    }
    setLoading(false);
  };

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
            {isRecovery ? (
              <>
                <h1 className="text-2xl font-heading font-bold text-center mb-6">
                  Yangi parol kiriting
                </h1>
                <form onSubmit={handleUpdatePassword} className="space-y-5">
                  <div className="space-y-2">
                    <Label>Yangi parol</Label>
                    <Input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Kamida 6 ta belgi"
                      className="h-12 rounded-xl"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 rounded-xl" disabled={loading}>
                    {loading ? "Kutib turing..." : "Parolni yangilash"}
                  </Button>
                </form>
              </>
            ) : sent ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-heading font-bold">Email yuborildi!</h2>
                <p className="text-sm text-muted-foreground">
                  <strong>{email}</strong> ga parolni tiklash havolasi yuborildi.
                </p>
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-heading font-bold text-center mb-6">
                  Parolni tiklash
                </h1>
                <form onSubmit={handleRequestReset} className="space-y-5">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@example.com"
                      className="h-12 rounded-xl"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 rounded-xl" disabled={loading}>
                    {loading ? "Kutib turing..." : "Tiklash havolasini yuborish"}
                  </Button>
                </form>
              </>
            )}

            <div className="mt-6 text-center">
              <Link to="/auth" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                <ArrowLeft className="w-3 h-3" /> Kirish sahifasiga qaytish
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
