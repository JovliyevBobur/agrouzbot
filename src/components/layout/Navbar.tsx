import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, LogOut, Shield, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/components/AuthProvider";
import { useAdmin } from "@/hooks/useAdmin";
import { useProfile } from "@/hooks/useProfile";

const navItems = [
  { label: "Bosh sahifa", path: "/" },
  { label: "Mahsulot", path: "/product" },
  { label: "Qanday ishlaydi", path: "/how-it-works" },
  { label: "Narxlar", path: "/pricing" },
  { label: "Investorlar", path: "/investors" },
  { label: "Biz haqimizda", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Aloqa", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();
  const { isAdmin } = useAdmin();
  const { profile } = useProfile();

  const getInitials = () => {
    if (profile?.full_name) return profile.full_name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
    return user?.email?.slice(0, 2).toUpperCase() || "U";
  };

  const displayName = profile?.full_name || user?.email?.split("@")[0] || "User";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-14 sm:h-16 md:h-18 px-4">
        <Link to="/" className="flex items-center gap-2 font-heading font-bold text-lg sm:text-xl">
          <img src="/logo.png" alt="Agro Bot" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover" />
          <span>Agro Bot</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-2">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-2 py-1.5 rounded-full hover:bg-muted transition-colors">
                  <Avatar className="w-8 h-8 border-2 border-primary/20">
                    <AvatarImage src={profile?.avatar_url || undefined} alt={displayName} />
                    <AvatarFallback className="text-xs font-semibold bg-primary/10 text-primary">{getInitials()}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium max-w-[100px] truncate">{displayName}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center gap-2">
                    <User className="w-4 h-4" /> Profilim
                  </Link>
                </DropdownMenuItem>
                {isAdmin && (
                  <DropdownMenuItem asChild>
                    <Link to="/admin" className="flex items-center gap-2">
                      <Shield className="w-4 h-4" /> Admin Panel
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut} className="text-destructive">
                  <LogOut className="w-4 h-4 mr-2" /> Chiqish
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild><Link to="/auth">Kirish</Link></Button>
              <Button size="sm" asChild><Link to="/auth">Boshlash</Link></Button>
            </>
          )}
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2">
          {user && (
            <Link to="/profile">
              <Avatar className="w-8 h-8 border-2 border-primary/20">
                <AvatarImage src={profile?.avatar_url || undefined} alt={displayName} />
                <AvatarFallback className="text-xs font-semibold bg-primary/10 text-primary">{getInitials()}</AvatarFallback>
              </Avatar>
            </Link>
          )}
          <button className="p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-b"
          >
            <div className="container py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {user ? (
                <>
                  <Link to="/profile" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg text-base font-medium text-muted-foreground hover:bg-muted">
                    Profilim
                  </Link>
                  {isAdmin && (
                    <Button variant="outline" className="mt-2" asChild>
                      <Link to="/admin" onClick={() => setOpen(false)}><Shield className="w-4 h-4 mr-2" /> Admin Panel</Link>
                    </Button>
                  )}
                  <Button variant="outline" className="mt-2" onClick={() => { signOut(); setOpen(false); }}>
                    <LogOut className="w-4 h-4 mr-2" /> Chiqish
                  </Button>
                </>
              ) : (
                <Button className="mt-2" asChild>
                  <Link to="/auth" onClick={() => setOpen(false)}>Kirish / Ro'yxat</Link>
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
