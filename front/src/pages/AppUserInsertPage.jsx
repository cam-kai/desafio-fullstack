import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { insertUser } from "../services/AppUserService.js";
import UserForm from "../components/UserForm";
import { ArrowLeft } from "lucide-react";
import Card from "../components/Card.jsx";

const AppUserInsertPage = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const handleOnClickBack = () => {
        navigate("/");
    };

    const handleSubmit = async (user) => {
        setUser(user);
        await insertUser(user);
        handleOnClickBack();
    };

    return (
        <div className="flex flex-col items-center p-6 min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
                {/* Header */}
                <div className="flex items-center gap-3 border-b pb-4 mb-4">
                    <button
                        onClick={handleOnClickBack}
                        className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-2xl font-semibold text-gray-800">Guardar Usuario</h1>
                </div>

                {/* Formulario */}
                <Card className="p-6">
                    <UserForm
                        handleSubmit={handleSubmit}
                        buttonText="Guardar"
                        onClickBack={handleOnClickBack}
                    />
                </Card>
            </div>
        </div>
    );
};

export default AppUserInsertPage;
