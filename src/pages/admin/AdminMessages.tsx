import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

export default function AdminMessages() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-heading font-bold">Xabarlar</h1>
        <Card>
          <CardContent className="p-12 text-center">
            <MessageSquare className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hozircha xabarlar yo'q</h3>
            <p className="text-muted-foreground">Foydalanuvchilardan kelgan xabarlar shu yerda ko'rinadi.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
