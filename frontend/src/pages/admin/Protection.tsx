import { Navigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
};

export default function Protection({ children }: Props) {

    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
}