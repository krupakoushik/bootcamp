import { useCallback, useEffect, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
import AdminNavbar from "@/components/admin/AdminNavbar";
import type { Registration } from "@/types/admin";

import API from "@/lib/api";

export default function AdminAttendance() {
    const token = localStorage.getItem("token");

    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const refresh = useCallback(async () => {
        if (!token) return;

        try {
            setLoading(true);

            const res = await fetch(`${API}/admin/registrations`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setRegistrations(await res.json());
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => {
        refresh();
    }, [refresh]);

    const filtered = useMemo(() => {
        const q = search.toLowerCase();

        return registrations.filter((r) =>
            r.name.toLowerCase().includes(q) ||
            r.phone.includes(q) ||
            (r.ckc_id ?? "").toLowerCase().includes(q)
        );
    }, [registrations, search]);

    if (!token) {
        return <Navigate to="/admin/login" replace />;
    }

    const total = registrations.length;
    const day1 = registrations.filter((r) => r.day1_attended).length;
    const day2 = registrations.filter((r) => r.day2_attended).length;
    const absent1 = total - day1;
    const absent2 = total - day2;
    const rate =
        total === 0 ? 0 : Math.round((day1 / total) * 100);

    return (
        <>
            <AdminNavbar />

            <div className="max-w-7xl mx-auto p-6 text-cream">
                <div className="rounded-3xl border border-gold-soft/40 bg-white/5 backdrop-blur-xl p-8">

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">

                        <div>
                            <p className="font-anton tracking-[0.45em] uppercase text-gold-soft text-xs">
                                Chennai Kendo Club
                            </p>

                            <h1 className="font-bebas text-6xl lg:text-8xl mt-3 leading-none">
                                Attendance
                            </h1>
                        </div>

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search..."
                            className="w-full lg:w-96 rounded-2xl border border-gold-soft/30 bg-white/5 px-5 py-4 outline-none"
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-5 mt-10">

                        <div className="rounded-2xl border p-6 border-green-500/20 bg-green-500/5">
                            <p className="uppercase text-xs text-green-300">
                                Day 1 Present
                            </p>

                            <h2 className="font-bebas text-6xl text-green-400 mt-2">
                                {day1}
                            </h2>
                        </div>

                        <div className="rounded-2xl border p-6 border-red-500/20 bg-red-500/5">
                            <p className="uppercase text-xs text-red-300">
                                Day 1 Absent
                            </p>

                            <h2 className="font-bebas text-6xl text-red-400 mt-2">
                                {absent1}
                            </h2>
                        </div>

                        <div className="rounded-2xl border p-6 border-green-500/20 bg-green-500/5">
                            <p className="uppercase text-xs text-green-300">
                                Day 2 Present
                            </p>

                            <h2 className="font-bebas text-6xl text-green-400 mt-2">
                                {day2}
                            </h2>
                        </div>

                        <div className="rounded-2xl border p-6 border-red-500/20 bg-red-500/5">
                            <p className="uppercase text-xs text-red-300">
                                Day 2 Absent
                            </p>

                            <h2 className="font-bebas text-6xl text-red-400 mt-2">
                                {absent2}
                            </h2>
                        </div>
                    </div>

                        <div className="rounded-2xl border p-6 border-gold-soft/20 bg-white/5 mt-5">
                            <p className="uppercase text-xs text-cream/50">
                                Attendance
                            </p>

                            <h2 className="font-bebas text-6xl mt-2">
                                {rate}%
                            </h2>
                        </div>

                    {loading ? (
                        <div className="py-20 text-center text-cream/60">
                            Loading...
                        </div>
                    ) : (
                        <div className="grid gap-5 mt-10">

                            {filtered.map((r, index) => (
                                <div
                                    key={r.id}
                                    className="rounded-3xl border border-gold-soft/20 bg-white/5 p-6"
                                >
                                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">

                                        <div>

                                            <p className="text-gold-soft text-xs uppercase tracking-[0.35em]">
                                                #{index + 1} • {r.ckc_id}
                                            </p>

                                            <h2 className="font-bebas text-5xl mt-2">
                                                {r.name}
                                            </h2>

                                            <p className="text-cream/60 mt-1">
                                                {r.pass_type}
                                            </p>

                                            <p className="text-cream/40 mt-3">
                                                {r.phone}
                                            </p>

                                        </div>

                                        <div className="flex flex-wrap gap-3 mt-5">

                                            <div
                                                className={`inline-flex items-center gap-3 rounded-full px-4 py-2 border ${
                                                    r.day1_attended
                                                        ? "border-green-500/30 bg-green-500/10 text-green-400"
                                                        : "border-white/10 bg-white/5 text-cream/50"
                                                }`}
                                            >
                                                <span className="text-lg">
                                                    {r.day1_attended ? "✓" : "—"}
                                                </span>

                                                <div>
                                                    <p className="text-[10px] uppercase tracking-[0.25em] opacity-60">
                                                        Day 1
                                                    </p>

                                                    <p className="font-medium">
                                                        {r.day1_attended ? "Present" : "Absent"}
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className={`inline-flex items-center gap-3 rounded-full px-4 py-2 border ${
                                                    r.day2_attended
                                                        ? "border-green-500/30 bg-green-500/10 text-green-400"
                                                        : "border-white/10 bg-white/5 text-cream/50"
                                                }`}
                                            >
                                                <span className="text-lg">
                                                    {r.day2_attended ? "✓" : "—"}
                                                </span>

                                                <div>
                                                    <p className="text-[10px] uppercase tracking-[0.25em] opacity-60">
                                                        Day 2
                                                    </p>

                                                    <p className="font-medium">
                                                        {r.day2_attended ? "Present" : "Absent"}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>
                    )}

                </div>
            </div>
        </>
    );
}