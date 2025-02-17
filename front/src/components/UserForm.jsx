import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const UserForm = ({ handleSubmit, initData, buttonText = "Guardar", onClickBack }) => {
    const [user, setUser] = useState({
        rut: "",
        dv: "",
        names: "",
        lastNames: "",
        birthdate: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        if (initData) {
            setUser(initData);
        }
    }, [initData]);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        handleSubmit(user);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    return (
        <form onSubmit={onHandleSubmit} className="space-y-4">
            {/* RUT y DV en la misma fila */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <label htmlFor="rut" className="text-sm font-medium text-gray-700">
                        RUT:
                    </label>
                    <input
                        type="text"
                        id="rut"
                        name="rut"
                        value={user.rut}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                <div className="w-16">
                    <label htmlFor="dv" className="text-sm font-medium text-gray-700">
                        DV:
                    </label>
                    <input
                        type="text"
                        id="dv"
                        name="dv"
                        value={user.dv}
                        onChange={handleChange}
                        required
                        maxLength={1}
                        className="w-full p-2 border rounded-lg text-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
            </div>

            {/* Nombres y Apellidos en la misma fila en versión desktop */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <label htmlFor="names" className="text-sm font-medium text-gray-700">
                        Nombres:
                    </label>
                    <input
                        type="text"
                        id="names"
                        name="names"
                        value={user.names}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="lastNames" className="text-sm font-medium text-gray-700">
                        Apellidos:
                    </label>
                    <input
                        type="text"
                        id="lastNames"
                        name="lastNames"
                        value={user.lastNames}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
            </div>

            {/* Otros Campos */}
            {[
                { label: "Fecha de Nacimiento", name: "birthdate", type: "date" },
                { label: "Email", name: "email", type: "email" },
                { label: "Contraseña", name: "password", type: "password" },
            ].map((field) => (
                <div key={field.name} className="flex flex-col">
                    <label htmlFor={field.name} className="text-sm font-medium text-gray-700">
                        {field.label}:
                    </label>
                    <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={user[field.name]}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
            ))}

            {/* Botones */}
            <div className="flex justify-end gap-3">
                <button
                    type="button"
                    onClick={onClickBack}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
                >
                    {buttonText}
                </button>
            </div>
        </form>
    );
};

UserForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    initData: PropTypes.object,
    buttonText: PropTypes.string.isRequired,
    onClickBack: PropTypes.func.isRequired,
};

export default UserForm;
