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

        <div>

            <input

                placeholder="Username"

                value={username}

                onChange={(e) => setUsername(e.target.value)}

            />

            <input

                type="password"

                placeholder="Password"

                value={password}

                onChange={(e) => setPassword(e.target.value)}

            />

            <button onClick={login}>

                Login

            </button>

        </div>

    );

}