import axios from "axios";
import Swal from 'sweetalert2';

const apiClient = axios.create({
    baseURL: 'https://localhost:7048/',
  
})

export const userService = {
    async getUser() {
        let response = await apiClient.get("/User/GetAllUsers");
        if (!response == 200) {
            alert('Hubo un error al buscar estos usuarios');
        };
        let allUser = await response.data;

        return allUser;
    },
    async getUser(id) {
        let response = await apiClient.get("/" + id);
        if (!response == 200)
            throw {
                status: response.status,
                statusText: "Not found",
            };
        let user = response.data;
        return user;
    },
    async insertUser(newUserRequestModel) {
        console.log(newUserRequestModel)
        let options = {

            headers: {
                'Content-Type': 'application/json',

            }

        }

        let response = await apiClient.post("/User/InsertUser", newUserRequestModel, options)

        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Nuevo Usuario Registrado',
                showConfirmButton: true,
                showClass: { popup: 'animate__animated animate__fadeInDown' },
                hideClass: { popup: 'animate__animated animate__fadeOutUp' }
            })
        } else {
            alert("Upsi...");
        }
    },
    async deleteUser(id) {
        await apiClient.delete("/User/DeactivateUser?id=" + id)
    },
    async updateUser(id, updatedUserRequestModel) {
        await apiClient.patch("/User/Patch" + id, updatedUserRequestModel)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'el usuario ha sido actualizado',
                showConfirmButton: true,
                showClass: { popup: 'animate__animated animate__fadeInDown' },
                hideClass: { popup: 'animate__animated animate__fadeOutUp' }
            })
        }
    },
    
}

export const loginUser = async(data) => {
    console.log('hola',data);
    let response= await apiClient.post ("/User/Login", data);
    let dataResponse= await response.data;
    console.log("desde el servicio",dataResponse);
    if (response.status === 200) {
        Swal.fire({
            icon: 'success',
            title: 'Ha iniciado sesión correctamente',
            showConfirmButton: true,
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' }
            
        })
    } 
    return dataResponse;
    
};

