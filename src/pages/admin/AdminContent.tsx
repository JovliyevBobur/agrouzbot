import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Save, Loader2 } from "lucide-react";

export default function AdminContent() {
  const [heroTitle, setHeroTitle] = useState("O'zbekiston dehqonchiligi uchun aqlli yechim");
  const [heroSubtitle, setHeroSubtitle] = useState("Sun'iy intellekt va IoT texnologiyalari yordamida fermer xo'jaliklarini zamonaviy boshqaring");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from("site_settings").select("*").eq("key", "hero");
      if (data?.[0]) {
        const val = data[0].value as any;
        if (val.title) setHeroTitle(val.title);
        if (val.subtitle) setHeroSubtitle(val.subtitle);
      }
    };
    load();
  }, []);

  const saveHero = async () => {
    setSaving(true);
    const { error } = await supabase.from("site_settings").upsert(
      { key: "hero", value: { title: heroTitle, subtitle: heroSubtitle } as any, updated_at: new Date().toISOString() },
      { onConflict: "key" }
    );
    if (error) toast.error("Xatolik: " + error.message);
    else toast.success("Saqlandi!");
    setSaving(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-heading font-bold">Kontent boshqarish</h1>

        <Tabs defaultValue="hero">
          <TabsList>
            <TabsTrigger value="hero">Hero bo'limi</TabsTrigger>
            <TabsTrigger value="about">Biz haqimizda</TabsTrigger>
          </TabsList>

          <TabsContent value="hero" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Bosh sahifa Hero</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Sarlavha</Label>
                  <Input value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Qo'shimcha matn</Label>
                  <Textarea value={heroSubtitle} onChange={(e) => setHeroSubtitle(e.target.value)} rows={3} />
                </div>
                <Button onClick={saveHero} disabled={saving}>
                  {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                  Saqlash
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about" className="mt-4">
            <Card>
              <CardHeader><CardTitle>Biz haqimizda sahifasi</CardTitle></CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Tez orada qo'shimcha kontent tahrirlash imkoniyatlari qo'shiladi.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
