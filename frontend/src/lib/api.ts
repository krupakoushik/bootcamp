const API =
    import.meta.env.MODE === "development"
        ? "http://localhost:8000"
        : "https://bootcamp-m8yr.onrender.com";

export default API;