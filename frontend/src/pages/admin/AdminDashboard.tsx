import AdminNavbar from "@/components/admin/AdminNavbar";
import { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const API = "https://bootcamp-m8yr.onrender.com";

type DashboardStats = {
    participants: number;
    verified: number;
    pending: number;
    revenue: number;
    day1_attendance: number;
    day2_attendance: number;
};

export default function Dashboard() {

    const token = localStorage.getItem("token");

    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);

    const refreshDashboard = useCallback(async () => {
        if (!token) return;

        try {
            setLoading(true);

            const response = await fetch(`${API}/admin/dashboard`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();
            setStats(data);
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => {
        refreshDashboard();
    }, [refreshDashboard]);

    if (!token) {
        return <Navigate to="/admin/login" replace />;
    }

    if (loading || !stats) {
        return (
            <>
                <AdminNavbar />

                <div className="flex h-[80vh] items-center justify-center">
                    <p className="text-white/50">
                        Loading dashboard...
                    </p>
                </div>
            </>
        );
    }

    return (
        <>
            <AdminNavbar />
            
            <main className="mx-auto max-w-7xl px-6 py-10 text-cream">

                <div className="mb-12 text-center">

                    <p className="font-anton text-xs uppercase tracking-[0.5em] text-gold-soft">
                        Chennai Kendo Club
                    </p>

                    <h1 className="mt-3 font-bebas text-7xl leading-none">
                        BOOTCAMP ADMIN
                    </h1>

                    <p className="mt-4 text-white/50">
                        Operations Dashboard
                    </p>

                </div>

                <div className="grid gap-6 lg:grid-cols-2">

                    <div className="rounded-2xl border p-6 border-gold-soft/20 bg-white/5">
                        <p className="text-white/50 uppercase tracking-[0.25em] text-xs">
                            Total Revenue
                        </p>
                        <h2 className="font-bebas text-6xl mt-2">
                            ₹{stats.revenue.toLocaleString("en-IN")}
                        </h2>
                    </div>

                    <div className="rounded-2xl border p-6 border-gold-soft/20 bg-white/5">
                        <p className="text-white/50 uppercase tracking-[0.25em] text-xs">
                            Total Participants
                        </p>
                        <h2 className="font-bebas text-6xl mt-2">
                            {stats.participants}
                        </h2>
                    </div>

                    <div className="border-green-500/20 bg-green-500/5 rounded-2xl border p-6">
                        <div>
                            <p className="text-green-300 uppercase tracking-[0.25em] text-xs">
                                Verified
                            </p>
                        </div>
                        <h2 className="font-bebas text-6xl mt-2 text-green-400">
                            {stats.verified}
                        </h2>
                    </div>

                    <div className="border-red-500/20 bg-red-500/5 rounded-2xl border p-6">
                        <div>
                            <p className="text-red-300 uppercase tracking-[0.25em] text-xs">
                                Pending
                            </p>
                        </div>
                        <h2 className="font-bebas text-6xl mt-2 text-red-400">
                            {stats.pending}
                        </h2>
                    </div>


                    <div className="rounded-2xl border p-6 border-emerald-500/20 bg-emerald-500/5 text-emerald-400">
                        <p className="text-white/50 uppercase tracking-[0.25em] text-xs">
                            Day 1 Attendance
                        </p>
                        <h2 className="font-bebas text-6xl mt-2">
                            {stats.day1_attendance}
                        </h2>
                    </div>

                    <div className="rounded-2xl border p-6 border-purple-500/20 bg-purple-500/5 text-purple-400">
                        <p className="text-white/50 uppercase tracking-[0.25em] text-xs">
                            Day 2 Attendance
                        </p>
                        <h2 className="font-bebas text-6xl mt-2">
                            {stats.day2_attendance}
                        </h2>
                    </div>

                </div>

            </main>
        </>
    );
}