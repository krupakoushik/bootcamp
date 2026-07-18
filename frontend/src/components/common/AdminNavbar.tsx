import { NavLink, useNavigate } from "react-router-dom";
import Logo from "@/assets/kendo/kendo-w-l-gpt.png"

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function AdminNavbar() {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    
    const links = [
        { name: "Dashboard", to: "/admin" },
        { name: "Registrations", to: "/admin/registrations" },
        { name: "Scan QR", to: "/admin/scan" },
        { name: "Attendance", to: "/admin/attendance" },
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/admin/login");
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-gold-soft/20 bg-[#0b0b0b]/90 backdrop-blur-xl">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <button
                    onClick={() => navigate("/admin")}
                    className="flex items-center gap-3"
                >
                    <img
                        src={Logo}
                        alt="CKC Logo"
                        className="h-10 w-10 rounded-full"
                    />

                    <div className="text-left">
                        <p className="font-anton text-xs uppercase tracking-[0.35em] text-gold-soft">
                            Chennai Kendo Club
                        </p>

                        <h1 className="font-bebas text-3xl leading-none">
                            Bootcamp Admin
                        </h1>
                    </div>
                </button>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === "/admin"}
                            className={({ isActive }) =>
                                `pb-1 text-sm font-semibold transition ${
                                    isActive
                                        ? "border-b-2 border-gold-soft text-gold-soft"
                                        : "text-white/60 hover:text-white"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="rounded-xl border border-red-500/30 px-4 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
                >
                    Logout
                </button>

                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden"
                >
                    <Menu size={28} />
                </button>

            </div>

{open && (
    <>
        <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setOpen(false)}
        />

        <aside className="fixed left-0 top-0 z-50 h-full w-72 bg-[#111] border-r border-gold-soft/20 p-8">

            <div className="flex items-center justify-between">

                <h2 className="font-bebas text-4xl">
                    ADMIN
                </h2>

                <button onClick={() => setOpen(false)}>
                    <X />
                </button>

            </div>

            <div className="mt-10 flex flex-col gap-6">

                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "text-gold-soft font-semibold"
                                : "text-white/60"
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}

                <button
                    onClick={handleLogout}
                    className="mt-8 rounded-xl border border-red-500/30 py-3 text-red-400"
                >
                    Logout
                </button>

            </div>

        </aside>
    </>
)}

        </nav>

        
    );
}