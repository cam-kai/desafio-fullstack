import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {deleteUser, getAllUser} from "../services/AppUserService.js";
import Swal from "sweetalert2";
import Card from "../components/Card.jsx";
import { Plus, Edit, Trash, Users } from "lucide-react";

const AppUserListPage = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  const  handleOnClickUpdate = (item) => {
    navigate('/detail/ ' + item.id);
  }
  const  handleOnClickInsert = () => {
    navigate('/detail');
  }

  const handleOnClickDelete = async (item) => {
    const id = parseInt(item.id);
    await deleteUser(id)
    loadAllUser();
  }

  useEffect(() => {
    loadAllUser();
  }, [])



  const loadAllUser = async () => {
    const allUser = await getAllUser();
    console.log(allUser);
    setUserList(allUser);
  }

  const fireAlert = (item) => {
    Swal.fire({
          title: '¿Estas seguro que deseas eliminar este Usuario?',
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: "Si",
          cancelButtonText: "No",
          icon: 'warning'
        }
    ).then((result) => {

      if (result.isConfirmed) {
        handleOnClickDelete(item);
        Swal.fire('Eliminado Correctamente', '', 'success');

      }

    })
  }
  ;

    return (
        <div className="flex flex-col items-center p-6 min-h-screen bg-gray-100">
          <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6">

            {/* Header */}
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h1 className="text-3xl font-semibold text-gray-800">Gestión de Usuarios</h1>
              <button
                  onClick={handleOnClickInsert}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                <Plus size={18}/>
                Agregar Usuario
              </button>
            </div>

            {/* Tabla o Mensaje de No Usuarios */}
            {userList.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                  <Users size={48} className="mb-4 text-gray-400"/>
                  <p className="text-lg font-medium">No hay usuarios registrados</p>
                  <p className="text-sm">Agrega un nuevo usuario para comenzar</p>
                </div>
            ) : (
                <Card className="overflow-hidden shadow-md rounded-lg">
                  <table className="w-full border-collapse">
                    <thead className="bg-blue-600 text-white">
                    <tr className="text-left">
                      <th className="p-4">ID</th>
                      <th className="p-4">Nombres</th>
                      <th className="p-4">Apellidos</th>
                      <th className="p-4">Rut</th>
                      <th className="p-4">Email</th>
                      <th className="p-4 text-center">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userList.map((item) => (
                        <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                          <td className="p-4">{item.id}</td>
                          <td className="p-4">{item.names}</td>
                          <td className="p-4">{item.lastNames}</td>
                          <td className="p-4">{item.rut} - {item.dv}</td>
                          <td className="p-4">{item.email}</td>
                          <td className="p-4 flex justify-center gap-3">
                            <button
                                onClick={() => handleOnClickUpdate(item)}
                                className="p-2 bg-blue-600 text-white rounded-md hover:bg-green-700 transition">
                              <Edit size={18}/>
                            </button>
                            <button
                                onClick={() => fireAlert(item)}
                                className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                              <Trash size={18}/>
                            </button>
                          </td>
                        </tr>
                    ))}
                    </tbody>
                  </table>
                </Card>
            )}
          </div>
        </div>
    );
}


export default AppUserListPage;