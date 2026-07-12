import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import type { Registration } from "@/types/admin";

const API = "https://ckc-bootcamp.onrender.com";

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

        <div style={{ padding: 30 }}>

            <h1>Registrations</h1>

            <table border={1} cellPadding={10}>

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>CKC ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Pass</th>
                        <th>Verified</th>
                        <th>Screenshot</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {registrations.map((r) => (

                        <tr key={r.id}>

                            <td>{r.id}</td>

                            <td>{r.ckc_id}</td>

                            <td>{r.name}</td>

                            <td>{r.email}</td>

                            <td>{r.phone}</td>

                            <td>{r.gender}</td>

                            <td>{r.pass_type}</td>

                            <td>{r.verified ? "✅" : "❌"}</td>

                            <td>

                                <a
                                    href={r.payment_screenshot}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View
                                </a>

                            </td>

                            <td>

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