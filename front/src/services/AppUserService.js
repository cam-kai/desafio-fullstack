
const BASE_URI = "http://localhost:8091/api/user";

const getAllUser = async () => {
    try {
        const response = await fetch(BASE_URI, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            responseType: 'json'
        });
        return await response.json();
    } catch (error){
        console.error("Error consultando usuarios.", error);
    }

}

const getUserById = async (userId) => {
    try {
        const response = await fetch(BASE_URI+ "/" + userId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            responseType: 'json'
        });
        return await response.json();
    } catch (error){
        console.error("Error consultando usuario id :" + userId, error);
    }

}

const insertUser = async (userData) => {
    try {
        const response = await fetch(BASE_URI, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
        });
        return await response;
    } catch (error){
        console.error("Error guardando usuario.", error);
    }

}


const updateUser = async (userId, userData) => {
    try {
        const response = await fetch(BASE_URI+ "/" + userId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
        });
        return await response;
    } catch (error){
        console.error("Error editando usuario id :" + userId, error);
    }

}

const deleteUser = async (userId) => {
    try {
        const response = await fetch(BASE_URI+ "/" + userId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        return await response;
    } catch (error){
        console.error("Error borrando usuario id :" + userId, error);
    }

}

export {
    getAllUser,
    getUserById,
    insertUser,
    updateUser,
    deleteUser
}