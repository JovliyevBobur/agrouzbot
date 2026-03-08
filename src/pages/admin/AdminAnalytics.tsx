import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const COLORS = ["hsl(145, 63%, 32%)", "hsl(205, 78%, 45%)", "hsl(30, 55%, 48%)", "hsl(0, 84%, 60%)"];

export default function AdminAnalytics() {
  const [roleData, setRoleData] = useState<{ name: string; value: number }[]>([]);
  const [monthlyData, setMonthlyData] = useState<{ month: string; users: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: roles } = await supabase.from("user_roles").select("role");
      if (roles) {
        const counts: Record<string, number> = {};
        roles.forEach((r) => { counts[r.role] = (counts[r.role] || 0) + 1; });
        setRoleData(Object.entries(counts).map(([name, value]) => ({ name, value })));
      }

      const { data: profiles } = await supabase.from("profiles").select("created_at");
      if (profiles) {
        const monthly: Record<string, number> = {};
        profiles.forEach((p) => {
          const m = new Date(p.created_at).toLocaleDateString("uz", { year: "numeric", month: "short" });
          monthly[m] = (monthly[m] || 0) + 1;
        });
        setMonthlyData(Object.entries(monthly).map(([month, users]) => ({ month, users })));
      }
    };
    fetchData();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-heading font-bold">Statistika</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle>Oylik ro'yxatdan o'tishlar</CardTitle></CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" fill="hsl(145, 63%, 32%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Rollar taqsimoti</CardTitle></CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={roleData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                    {roleData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
