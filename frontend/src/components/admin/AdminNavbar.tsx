import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import Logo from "@/assets/kendo/kendo-w-l-gpt.png";

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
        <>
            {/* Desktop + Mobile Top Bar */}
            <nav
                className={`sticky top-0 z-40 border-b border-gold-soft/20 bg-[#0b0b0b]/90 backdrop-blur-xl ${
                    open ? "md:block hidden" : ""
                }`}
            >
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

                        <p className="hidden sm:block font-anton text-xs uppercase tracking-[0.35em] text-gold-soft">
                            Chennai Kendo Club
                        </p>
                    </button>

                    {/* Desktop Navigation */}
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
                                            : "text-cream hover:text-white"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <button
                            onClick={handleLogout}
                            className="pb-1 text-sm font-semibold transition text-red-400 hover:text-red-300"
                        >
                            Logout
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-white"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* Backdrop */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
                    open
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            />

            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 z-50 h-screen w-[85%] max-w-sm border-r border-gold-soft/20 bg-[#111] transition-transform duration-300 ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 p-6">

                    <div className="flex items-center gap-3">
                        <img
                            src={Logo}
                            alt="CKC"
                            className="h-10 w-10 rounded-full"
                        />

                        <div>
                            <p className="font-anton text-[10px] uppercase tracking-[0.3em] text-gold-soft">
                                Chennai Kendo Club
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setOpen(false)}
                        className="text-white/70 hover:text-white"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Links */}
                <div className="flex flex-col px-6 py-8">

                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === "/admin"}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `rounded-xl px-4 py-4 text-lg font-medium transition ${
                                    isActive
                                        ? "bg-gold-soft/10 text-gold-soft"
                                        : "text-white/70 hover:bg-white/5 hover:text-white"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <button
                        onClick={handleLogout}
                        className="mt-4 rounded-xl px-4 py-4 text-left text-lg font-medium text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
                    >
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}