import axios from "axios";
import Swal from 'sweetalert2';

const apiClient = axios.create({
    baseURL: 'https://localhost:7048/',
    // withCredentials: true,
    // headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
//      }
 }
)

export const postService = {
    async getPosts() {
        let response = await apiClient.get("/Posts/Get");
        if (!response==200)
            {
                alert('Hubo un error al traer los posts');
            };
        let allPosts = await response.data;
        return allPosts.filter(post => post.postItem.isActive == true);
    },

    async getPost(id) {
        let response = await apiClient.get("/Posts/Get?id=" + id);
        if (!response == 200)
            throw {
                status: response.status,
                statusText: "Not found",
            };
        let post = response.data;
        return post;
    },
    async submitPost(newPostRequestModel){
        let options={
            url:  '/Posts/Post',
            method: 'post',
            headers:{
                'Content-Type':'application/json',
                // 'Authorization':''
            }

        }

        let response = await apiClient.post("/Posts/Post", newPostRequestModel,options)
        if (response.status === 200)
        {
            Swal.fire({
            icon: 'success',
            title: 'Nuevo post añadido',
            showConfirmButton: true,
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' } })
         } else {
            alert("Upsi...");
         }
         
    },
    async deletePost(id) {
        await apiClient.delete("/Posts/Delete?id=" + id);
    },
    async updatePost(updatedPostRequestModel){
       
       let response = await apiClient.patch("/Post/UpdatePost", updatedPostRequestModel)
       if(response.status === 200)
        {
            Swal.fire({
            icon: 'success',
            title: 'el post ha sido eliminado',
            showConfirmButton: true,
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' } })
         }
    }
}