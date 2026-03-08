import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, MessageSquare, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, roles: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const { count: userCount } = await supabase.from("profiles").select("*", { count: "exact", head: true });
      const { count: roleCount } = await supabase.from("user_roles").select("*", { count: "exact", head: true });
      setStats({ users: userCount || 0, roles: roleCount || 0 });
    };
    fetchStats();
  }, []);

  const cards = [
    { title: "Foydalanuvchilar", value: stats.users, icon: Users, color: "text-primary" },
    { title: "Rollar", value: stats.roles, icon: TrendingUp, color: "text-secondary" },
    { title: "Blog postlar", value: 6, icon: FileText, color: "text-accent" },
    { title: "Xabarlar", value: 0, icon: MessageSquare, color: "text-destructive" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-heading font-bold">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <Card key={card.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{card.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Xush kelibsiz, Admin!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Bu yerda siz foydalanuvchilarni boshqarishingiz, kontent tahrirlashingiz va sayt statistikasini ko'rishingiz mumkin.
              Chap tarafdagi menyudan kerakli bo'limni tanlang.
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
