import { useState, useEffect } from "react";
import { useAuth } from "@/components/AuthProvider";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Save, Loader2, User, Phone, MapPin, Wheat } from "lucide-react";
import { Navigate } from "react-router-dom";

const regions = [
  "Toshkent", "Samarqand", "Buxoro", "Farg'ona", "Andijon", "Namangan",
  "Qashqadaryo", "Surxondaryo", "Navoiy", "Xorazm", "Sirdaryo", "Jizzax",
  "Qoraqalpog'iston",
];

export default function Profile() {
  const { user, loading: authLoading } = useAuth();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const load = async () => {
      const { data } = await supabase.from("profiles").select("*").eq("user_id", user.id).single();
      if (data) {
        setFullName(data.full_name || "");
        setPhone(data.phone || "");
        setRegion(data.region || "");
        setFarmSize(data.farm_size || "");
      }
      setLoading(false);
    };
    load();
  }, [user]);

  if (authLoading) return null;
  if (!user) return <Navigate to="/auth" replace />;

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName, phone, region, farm_size: farmSize })
      .eq("user_id", user.id);
    if (error) toast.error("Xatolik: " + error.message);
    else toast.success("Profil saqlandi!");
    setSaving(false);
  };

  return (
    <Layout>
      <div className="container max-w-2xl py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-heading font-bold mb-8">Mening profilim</h1>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><User className="w-5 h-5" /> Shaxsiy ma'lumotlar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {loading ? (
                <div className="flex justify-center py-8"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input value={user.email || ""} disabled className="bg-muted" />
                  </div>
                  <div className="space-y-2">
                    <Label>To'liq ism</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Ismingiz" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Telefon raqam</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+998 90 123 45 67" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Hudud</Label>
                    <Select value={region} onValueChange={setRegion}>
                      <SelectTrigger>
                        <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                        <SelectValue placeholder="Hududni tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Yer maydoni (gektar)</Label>
                    <div className="relative">
                      <Wheat className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input value={farmSize} onChange={(e) => setFarmSize(e.target.value)} placeholder="Masalan: 10 ga" className="pl-10" />
                    </div>
                  </div>
                  <Button onClick={handleSave} disabled={saving} className="w-full">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                    Saqlash
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}
