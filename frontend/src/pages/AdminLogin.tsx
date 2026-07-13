import { useState } from "react";

const API = "https://bootcamp-m8yr.onrender.com";

export default function AdminLogin() {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    async function login() {

        const response = await fetch(

            `${API}/auth/login`,

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json",

                },

                body: JSON.stringify({

                    username,

                    password,

                }),

            }

        );

        if (!response.ok) {

            alert("Wrong credentials");

            return;

        }

        const data = await response.json();

        localStorage.setItem("token", data.token);

        window.location.href = "/admin";

    }

    return (

        <div className="min-h-screen flex items-center justify-center px-6">

            <div className="w-full max-w-md rounded-3xl border border-gold-soft/50 bg-white/5 backdrop-blur-xl p-10 text-cream">

                <h1 className="font-bebas text-7xl text-center">
                    ADMIN
                </h1>

                <p className="text-white/50 text-center mt-2">
                    Chennai Kendo Club
                </p>

                <div className="mt-10 space-y-5">

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="
                            w-full
                            rounded-xl
                            bg-white/10
                            border
                            border-white/10
                            px-5
                            py-4
                            outline-none
                            focus:border-primary
                            text-white
                            placeholder:text-white/40
                        "
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="
                            w-full
                            rounded-xl
                            bg-white/10
                            border
                            border-white/10
                            px-5
                            py-4
                            outline-none
                            focus:border-primary
                            text-white
                            placeholder:text-white/40
                        "
                    />

                </div>

                <button
                    onClick={login}
                    disabled={!username.trim() || !password.trim()}
                    className="
                        mt-8
                        w-full
                        rounded-xl
                        bg-primary
                        py-4
                        font-anton
                        tracking-[0.3em]
                        uppercase
                        transition
                        disabled:bg-white/10
                        disabled:text-white/30
                        disabled:cursor-not-allowed
                        hover:bg-gold-soft
                        hover:text-black
                    "
                >
                    Login
                </button>

            </div>

        </div>

    );

}