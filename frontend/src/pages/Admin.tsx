import { useCallback, useEffect, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";

import type { Registration } from "@/types/admin";

const API = "https://bootcamp-m8yr.onrender.com";

export default function Admin() {

    const token = localStorage.getItem("token");

    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState<Registration | null>(null);

    const refreshRegistrations = useCallback(async () => {

        if (!token) return;

        try {

            setLoading(true);

            const response = await fetch(
                `${API}/admin/registrations`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            setRegistrations(data);

        }

        finally {

            setLoading(false);

        }

    }, [token]);

    useEffect(() => {

        refreshRegistrations();

    }, [refreshRegistrations]);

    const filteredRegistrations = useMemo(() => {

        return registrations.filter((r) => {

            const q = search.toLowerCase();

            return (

                r.name.toLowerCase().includes(q) ||
                r.phone.includes(q) ||
                r.email.toLowerCase().includes(q) ||
                r.ckc_id.toLowerCase().includes(q)

            );

        });

    }, [registrations, search]);

    if (!token) {

        return <Navigate to="/admin/login" replace />;

    }

    const total = registrations.length;
    const verified = registrations.filter(r => r.verified).length;
    const pending = total - verified;

    return (

        <div className="max-w-7xl mx-auto p-6 text-cream">

            <div className="rounded-3xl border border-gold-soft/40 bg-white/5 backdrop-blur-xl p-8">

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

                    <div>

                        <p className="font-anton tracking-[0.45em] uppercase text-gold-soft text-xs">

                            Chennai Kendo Club

                        </p>

                        <h1 className="font-bebas text-7xl lg:text-8xl leading-none mt-3">

                            Registrations

                        </h1>

                    </div>

                    <input

                        value={search}

                        onChange={(e) => setSearch(e.target.value)}

                        placeholder="Search by Name, Email, Phone or CKC ID"

                        className="
                            w-full
                            lg:w-96
                            rounded-2xl
                            border
                            border-gold-soft/30
                            bg-white/5
                            px-5
                            py-4
                            outline-none
                            placeholder:text-white/30
                            focus:border-primary
                        "

                    />

                </div>

                <div className="grid md:grid-cols-3 gap-5 mt-10">

                    <div className="rounded-2xl border border-gold-soft/20 bg-white/5 p-6">

                        <p className="text-white/50 uppercase tracking-[0.25em] text-xs">

                            Total

                        </p>

                        <h2 className="font-bebas text-6xl mt-2">

                            {total}

                        </h2>

                    </div>

                    <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

                        <p className="text-green-300 uppercase tracking-[0.25em] text-xs">

                            Verified

                        </p>

                        <h2 className="font-bebas text-6xl mt-2 text-green-400">

                            {verified}

                        </h2>

                    </div>

                    <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

                        <p className="text-red-300 uppercase tracking-[0.25em] text-xs">

                            Pending

                        </p>

                        <h2 className="font-bebas text-6xl mt-2 text-red-400">

                            {pending}

                        </h2>

                    </div>

                </div>

                {loading && (

                    <div className="text-center py-20">

                        <p className="text-white/60">

                            Loading registrations...

                        </p>

                    </div>

                )}

                {!loading && (

                    <div className="grid gap-5 mt-10">

                        {filteredRegistrations.map((r) => (

                            <div

                                key={r.id}

                                className="
                                    rounded-3xl
                                    border
                                    border-gold-soft/20
                                    bg-white/5
                                    p-6
                                    hover:border-primary
                                    transition
                                "

                            >

                                <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

                                    <div className="space-y-4">

                                        <div>

                                            <p className="text-gold-soft text-xs uppercase tracking-[0.35em]">

                                                CKC ID

                                            </p>

                                            <p className="font-bebas text-3xl">

                                                {r.ckc_id}

                                            </p>

                                        </div>

                                        <div>

                                            <h3 className="font-bebas text-5xl leading-none">

                                                {r.name}

                                            </h3>

                                        </div>

                                        <div className="grid md:grid-cols-2 gap-5">

                                            <div>

                                                <p className="text-white/40 text-xs uppercase">

                                                    Email

                                                </p>

                                                <p className="break-all">

                                                    {r.email}

                                                </p>

                                            </div>

                                            <div>

                                                <p className="text-white/40 text-xs uppercase">

                                                    Phone

                                                </p>

                                                <p>

                                                    {r.phone}

                                                </p>

                                            </div>

                                            <div>

                                                <p className="text-white/40 text-xs uppercase">

                                                    Gender

                                                </p>

                                                <p>

                                                    {r.gender || "-"}

                                                </p>

                                            </div>

                                            <div>

                                                <p className="text-white/40 text-xs uppercase">

                                                    Pass

                                                </p>

                                                <span className="inline-block rounded-full bg-primary/20 text-primary px-3 py-1">

                                                    {r.pass_type}

                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="flex flex-col justify-between gap-5 min-w-57.5">

                                        <div>

                                            {r.verified ? (

                                                <span className="inline-flex rounded-full bg-green-500/20 text-green-400 px-4 py-2">

                                                    ✓ Verified

                                                </span>

                                            ) : (

                                                <span className="inline-flex rounded-full bg-red-500/20 text-red-400 px-4 py-2">

                                                    Pending Verification

                                                </span>

                                            )}

                                        </div>

                                        <a

                                            href={r.payment_screenshot}

                                            target="_blank"

                                            rel="noopener noreferrer"

                                            className="
                                                rounded-xl
                                                border
                                                border-primary/30
                                                bg-primary/10
                                                px-5
                                                py-3
                                                text-center
                                                hover:bg-primary/20
                                                transition
                                            "

                                        >

                                            📷 View Screenshot

                                        </a>

                                        <button

                                            disabled={r.verified}

                                            onClick={async () => {

                                                await fetch(

                                                    `${API}/admin/verify/${r.id}`,

                                                    {

                                                        method: "POST",

                                                        headers: {

                                                            Authorization: `Bearer ${token}`,

                                                        },

                                                    }

                                                );

                                                await refreshRegistrations();

                                            }}

                                            className={`
                                                rounded-xl
                                                py-3
                                                font-semibold
                                                transition
                                                ${
                                                    r.verified
                                                        ? "bg-green-500/20 text-green-400 cursor-default"
                                                        : "bg-primary hover:bg-gold-soft hover:text-black"
                                                }
                                            `}

                                        >

                                            {r.verified ? "Verified" : "Verify"}

                                        </button>
                                        <button

                                            onClick={() => setSelected(r)}

                                            className="
                                                rounded-xl
                                                py-3
                                                border
                                                border-gold-soft/30
                                                hover:bg-white/10
                                                transition
                                            "

                                        >

                                            Details

                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                        {!filteredRegistrations.length && (

                            <div className="rounded-3xl border border-gold-soft/20 bg-white/5 p-20 text-center">

                                <p className="font-bebas text-5xl">

                                    No Registrations Found

                                </p>

                                <p className="text-white/50 mt-5">

                                    Try searching using a different name,
                                    email, phone number or CKC ID.

                                </p>

                            </div>

                        )}

                    </div>

                )}

            </div>

{
    selected && (

        <div
            className="
                fixed
                inset-0
                bg-black/80
                backdrop-blur-sm
                flex
                items-center
                justify-center
                z-50
                p-5
            "
            onClick={() => setSelected(null)}
        >

            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    w-full
                    max-w-3xl
                    rounded-3xl
                    border
                    border-gold-soft/30
                    bg-[#111]
                    p-10
                    text-cream
                    max-h-[90vh]
                    overflow-y-auto
                "
            >

                <div className="flex justify-between items-start">

                    <div>

                        <p className="text-gold-soft uppercase tracking-[0.35em] text-xs">

                            Registration

                        </p>

                        <h2 className="font-bebas text-6xl mt-2">

                            {selected.name}

                        </h2>

                        <p className="text-white/40 mt-2">

                            {selected.ckc_id}

                        </p>

                    </div>

                    <button

                        onClick={() => setSelected(null)}

                        className="text-3xl hover:text-gold-soft"

                    >

                        ×

                    </button>

                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-10">

                    <div>

                        <p className="text-white/40 uppercase text-xs">

                            Email

                        </p>

                        <p>{selected.email}</p>

                    </div>

                    <div>

                        <p className="text-white/40 uppercase text-xs">

                            Phone

                        </p>

                        <p>{selected.phone}</p>

                    </div>

                    <div>

                        <p className="text-white/40 uppercase text-xs">

                            Gender

                        </p>

                        <p>{selected.gender || "-"}</p>

                    </div>

                    <div>

                        <p className="text-white/40 uppercase text-xs">

                            Pass

                        </p>

                        <p>{selected.pass_type}</p>

                    </div>

                    <div>

                        <p className="text-white/40 uppercase text-xs">

                            Emergency Contact Name

                        </p>

                        <p>{selected.emergency_name || "-"}</p>

                    </div>

                    <div>

                        <p className="text-white/40 uppercase text-xs">

                            Emergency Contact Number

                        </p>

                        <p>{selected.emergency_phone || "-"}</p>

                    </div>

                    <div className="md:col-span-2">

                        <p className="text-white/40 uppercase text-xs">

                            Medical Notes

                        </p>

                        <p className="whitespace-pre-wrap">

                            {selected.medical || "-"}

                        </p>

                    </div>

                    <div>

                        <p className="text-white/40 uppercase text-xs">

                            Day 1

                        </p>

                        <p>

                            {selected.day1_attended ? "✅ Present" : "❌ Absent"}

                        </p>

                    </div>

                    <div>

                        <p className="text-white/40 uppercase text-xs">

                            Day 2

                        </p>

                        <p>

                            {selected.day2_attended ? "✅ Present" : "❌ Absent"}

                        </p>

                    </div>

                </div>

                <a

                    href={selected.payment_screenshot}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                        mt-10
                        inline-block
                        rounded-xl
                        bg-primary
                        px-8
                        py-4
                        hover:bg-gold-soft
                        transition
                    "

                >

                    View Payment Screenshot

                </a>

            </div>

        </div>

    )
}


        </div>

    );

}