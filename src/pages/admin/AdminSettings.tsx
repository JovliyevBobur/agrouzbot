import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings } from "lucide-react";

export default function AdminSettings() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-heading font-bold">Sozlamalar</h1>
        <Card>
          <CardHeader><CardTitle>Umumiy sozlamalar</CardTitle></CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label>Saytni texnik ish rejimiga o'tkazish</Label>
                <p className="text-sm text-muted-foreground">Sayt vaqtincha yopiladi</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Yangi ro'yxatdan o'tishga ruxsat</Label>
                <p className="text-sm text-muted-foreground">Yangi foydalanuvchilar ro'yxatdan o'tishi</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
