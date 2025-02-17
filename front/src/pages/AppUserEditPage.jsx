import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserById, updateUser } from "../services/AppUserService.js";
import UserForm from "../components/UserForm";
import { ArrowLeft, Loader2 } from "lucide-react";
import Card from "../components/Card.jsx";

const AppUserEditPage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const loadUser = async () => {
                try {
                    const response = await getUserById(id);
                    setUser(response);
                } catch (error) {
                    console.error("Error loading user:", error);
                } finally {
                    setLoading(false);
                }
            };
            loadUser();
        }
    }, [id]);

    const handleOnClickBack = () => {
        navigate("/");
    };

    const handleSubmit = async (user) => {
        setUser(user);
        await updateUser(id, user);
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
                    <h1 className="text-2xl font-semibold text-gray-800">Editar Usuario</h1>
                </div>

                {/* Formulario o mensaje de carga */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                        <Loader2 size={48} className="animate-spin mb-4 text-gray-400" />
                        <p className="text-lg font-medium">Cargando usuario...</p>
                    </div>
                ) : user ? (
                    <Card className="p-6">
                        <UserForm
                            handleSubmit={handleSubmit}
                            initData={user}
                            buttonText="Editar"
                            onClickBack={handleOnClickBack}
                        />
                    </Card>
                ) : (
                    <p className="text-center text-gray-500">No se encontró el usuario.</p>
                )}
            </div>
        </div>
    );
};

export default AppUserEditPage;
