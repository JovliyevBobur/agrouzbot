import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/components/AuthProvider";
import { useProfile } from "@/hooks/useProfile";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Save, Loader2, User, Phone, MapPin, Wheat, Camera } from "lucide-react";
import { Navigate } from "react-router-dom";

const regions = [
  "Toshkent", "Samarqand", "Buxoro", "Farg'ona", "Andijon", "Namangan",
  "Qashqadaryo", "Surxondaryo", "Navoiy", "Xorazm", "Sirdaryo", "Jizzax",
  "Qoraqalpog'iston",
];

export default function Profile() {
  const { user, loading: authLoading } = useAuth();
  const { profile, loading: profileLoading, refetch } = useProfile();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || "");
      setPhone(profile.phone || "");
      setRegion(profile.region || "");
      setFarmSize(profile.farm_size || "");
      setAvatarUrl(profile.avatar_url);
    }
  }, [profile]);

  if (authLoading) return null;
  if (!user) return <Navigate to="/auth" replace />;

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Rasm hajmi 2MB dan oshmasin");
      return;
    }

    setUploading(true);
    const fileExt = file.name.split(".").pop();
    const filePath = `${user.id}/avatar.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      toast.error("Rasm yuklashda xatolik: " + uploadError.message);
      setUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage.from("avatars").getPublicUrl(filePath);
    const url = `${publicUrl}?t=${Date.now()}`;

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ avatar_url: url })
      .eq("user_id", user.id);

    if (updateError) {
      toast.error("Profil yangilashda xatolik");
    } else {
      setAvatarUrl(url);
      toast.success("Avatar yangilandi!");
      refetch();
    }
    setUploading(false);
  };

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName, phone, region, farm_size: farmSize })
      .eq("user_id", user.id);
    if (error) toast.error("Xatolik: " + error.message);
    else { toast.success("Profil saqlandi!"); refetch(); }
    setSaving(false);
  };

  const getInitials = () => {
    if (fullName) return fullName.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
    return user.email?.slice(0, 2).toUpperCase() || "U";
  };

  return (
    <Layout>
      <div className="container max-w-2xl py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-heading font-bold mb-8">Mening profilim</h1>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-4">
                <div className="relative group">
                  <Avatar className="w-28 h-28 border-4 border-primary/20 shadow-lg">
                    <AvatarImage src={avatarUrl || undefined} alt={fullName} />
                    <AvatarFallback className="text-2xl font-heading bg-primary/10 text-primary">
                      {getInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="absolute inset-0 rounded-full bg-foreground/0 group-hover:bg-foreground/40 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  >
                    {uploading ? (
                      <Loader2 className="w-6 h-6 animate-spin text-primary-foreground" />
                    ) : (
                      <Camera className="w-6 h-6 text-primary-foreground" />
                    )}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={handleAvatarUpload}
                    className="hidden"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-heading font-semibold">{fullName || "Ismingiz"}</h2>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><User className="w-5 h-5" /> Shaxsiy ma'lumotlar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {profileLoading ? (
                <div className="flex justify-center py-8"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
              ) : (
                <>
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
