import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Shield, User, UserX } from "lucide-react";

interface UserProfile {
  id: string;
  user_id: string;
  full_name: string | null;
  phone: string | null;
  region: string | null;
  farm_size: string | null;
  created_at: string;
  roles: string[];
}

export default function AdminUsers() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    const { data: profiles } = await supabase.from("profiles").select("*").order("created_at", { ascending: false });
    const { data: roles } = await supabase.from("user_roles").select("*");

    if (profiles) {
      const usersWithRoles = profiles.map((p) => ({
        ...p,
        roles: roles?.filter((r) => r.user_id === p.user_id).map((r) => r.role) || [],
      }));
      setUsers(usersWithRoles);
    }
    setLoading(false);
  };

  useEffect(() => { fetchUsers(); }, []);

  const updateRole = async (userId: string, newRole: string) => {
    // Remove existing non-user roles, add new one
    if (newRole === "admin") {
      const { error } = await supabase.from("user_roles").upsert(
        { user_id: userId, role: "admin" as any },
        { onConflict: "user_id,role" }
      );
      if (error) { toast.error("Xatolik: " + error.message); return; }
      toast.success("Admin roli berildi");
    } else if (newRole === "moderator") {
      await supabase.from("user_roles").delete().eq("user_id", userId).eq("role", "admin");
      const { error } = await supabase.from("user_roles").upsert(
        { user_id: userId, role: "moderator" as any },
        { onConflict: "user_id,role" }
      );
      if (error) { toast.error("Xatolik: " + error.message); return; }
      toast.success("Moderator roli berildi");
    } else {
      await supabase.from("user_roles").delete().eq("user_id", userId).neq("role", "user");
      toast.success("Oddiy foydalanuvchi qilindi");
    }
    fetchUsers();
  };

  const roleBadgeColor = (role: string) => {
    if (role === "admin") return "destructive";
    if (role === "moderator") return "secondary";
    return "outline";
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-heading font-bold">Foydalanuvchilar</h1>
          <Badge variant="outline">{users.length} ta foydalanuvchi</Badge>
        </div>

        <Card>
          <CardContent className="p-0">
            {loading ? (
              <div className="flex items-center justify-center p-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ism</TableHead>
                    <TableHead>Telefon</TableHead>
                    <TableHead>Hudud</TableHead>
                    <TableHead>Yer maydoni</TableHead>
                    <TableHead>Rollar</TableHead>
                    <TableHead>Ro'yxatdan o'tgan</TableHead>
                    <TableHead>Amallar</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.full_name || "—"}</TableCell>
                      <TableCell>{user.phone || "—"}</TableCell>
                      <TableCell>{user.region || "—"}</TableCell>
                      <TableCell>{user.farm_size || "—"}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          {user.roles.map((r) => (
                            <Badge key={r} variant={roleBadgeColor(r) as any}>{r}</Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{new Date(user.created_at).toLocaleDateString("uz")}</TableCell>
                      <TableCell>
                        <Select onValueChange={(v) => updateRole(user.user_id, v)}>
                          <SelectTrigger className="w-[130px]">
                            <SelectValue placeholder="Rol o'zgartir" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="user">Foydalanuvchi</SelectItem>
                            <SelectItem value="moderator">Moderator</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
