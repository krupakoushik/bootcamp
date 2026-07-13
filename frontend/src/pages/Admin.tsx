import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import type { Registration } from "@/types/admin";

const API = "https://bootcamp-m8yr.onrender.com";

export default function Admin() {

    const token = localStorage.getItem("token");

    const [registrations, setRegistrations] = useState<Registration[]>([]);

    useEffect(() => {

        if (!token) return;

        fetch(`${API}/admin/registrations`, {

            headers: {
                Authorization: `Bearer ${token}`,
            },

        })
            .then((res) => res.json())
            .then((data) => setRegistrations(data));

    }, [token]);

    if (!token) {
        return <Navigate to="/admin/login" replace />;
    }

    return (

        <div className="rounded-3xl border border-gold-soft/50 bg-white/5 p-8 mt-5 text-cream">

            <h1 className="font-bebas text-8xl tracking-normal text-cream uppercase">Registrations</h1>

            <table className="w-full text-left mt-8 border-separate border-spacing-y-2">

                <thead className="text-gold-soft uppercase tracking-wider text-sm">

                    <tr>

                        <th className="px-4 py-3 text-gold-soft">CKC ID</th>
                        <th className="px-4 py-3 text-gold-soft">Name</th>
                        <th className="px-4 py-3 text-gold-soft">Email</th>
                        <th className="px-4 py-3 text-gold-soft">Phone</th>
                        <th className="px-4 py-3 text-gold-soft">Gender</th>
                        <th className="px-4 py-3 text-gold-soft">Emergency</th>
                        <th className="px-4 py-3 text-gold-soft">Note</th>
                        <th className="px-4 py-3 text-gold-soft">Pass</th>
                        <th className="px-4 py-3 text-gold-soft">Verified</th>
                        <th className="px-4 py-3 text-gold-soft">Screenshot</th>
                        <th className="px-4 py-3 text-gold-soft">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {registrations.map((r) => (

                        <tr key={r.id}  className="bg-white/5 hover:bg-white/10 transition">

                            <td className="px-4 py-4">{r.ckc_id}</td>

                            <td className="px-4 py-4">{r.name}</td>

                            <td className="px-4 py-4">{r.email}</td>

                            <td className="px-4 py-4">{r.phone}</td>

                            <td className="px-4 py-4">{r.gender}</td>

                            <td className="px-4 py-4">{r.emergency_phone}</td>

                            <td className="px-4 py-4">{r.medical}</td>

                            <td className="px-4 py-4">{r.pass_type}</td>

                            <td className="px-4 py-4">
                                {r.verified ? (
                                    <span className="text-green-400 font-semibold">
                                        ✓ Verified
                                    </span>
                                ) : (
                                    <span className="text-red-400 font-semibold">
                                        Pending
                                    </span>
                                )}
                            </td>

                            <td className="px-4 py-4">

                                <a
                                    href={r.payment_screenshot}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-gold-soft transition"
                                >
                                    View
                                </a>

                            </td>

                            <td className="px-4 py-4">

                                    <button
                                        disabled={r.verified}
                                        className={`
                                            rounded-lg
                                            px-4
                                            py-2
                                            font-medium
                                            transition
                                            ${
                                                r.verified
                                                    ? "bg-green-600/20 text-green-400 cursor-default"
                                                    : "bg-primary text-white hover:bg-gold-soft hover:text-black"
                                            }
                                        `}

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

                                        const updated = await fetch(

                                            `${API}/admin/registrations`,

                                            {

                                                headers: {

                                                    Authorization: `Bearer ${token}`,

                                                },

                                            }

                                        );

                                        setRegistrations(await updated.json());

                                    }}

                                >

                                    {r.verified ? "Verified" : "Verify"}

                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}