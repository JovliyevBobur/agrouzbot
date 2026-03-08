import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthProvider";

interface UserProfile {
  full_name: string | null;
  avatar_url: string | null;
  phone: string | null;
  region: string | null;
  farm_size: string | null;
}

export const useProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    if (!user) { setProfile(null); setLoading(false); return; }
    const { data } = await supabase
      .from("profiles")
      .select("full_name, avatar_url, phone, region, farm_size")
      .eq("user_id", user.id)
      .single();
    setProfile(data);
    setLoading(false);
  };

  useEffect(() => { fetchProfile(); }, [user]);

  return { profile, loading, refetch: fetchProfile };
};
