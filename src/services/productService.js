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

export const productService = {
    
    async getProducts() {
        let response = await apiClient.get("/Product/GetAllProduct");
        if (!response==200)
            {
                alert('Hubo un error al traer los productos');
            };
        let allProducts = await response.data;
        console.log("productos que vienen del servicio", allProducts)
        return allProducts.filter(product => product.producItem.isActive == true);
    },


async getProductsByUser(userId) {
    try {
        
      let response = await apiClient.get("/Product/GetProductsByUserId?userId="+userId);
     
      let allProducts = response.data;
      return allProducts.filter(product => product.producItem.isActive == true && product.producItem.userId === userId);  
    } catch (error) {
      alert('Hubo un error al traer los productos');
      return [];
    }
   
  },

    async getProduct(id) {
        let response = await apiClient.get("/Product/GetProductById?id=" + id);
        if (!response == 200)
            throw {
                status: response.status,
                statusText: "Not found",
            };
        let product = response.data;
        return product;
    },
    async submitProduct(newProductRequestModel){
        let options={
            url:  '/Product/AddProduct',
            method: 'post',
            headers:{
                'Content-Type':'application/json',
                // 'Authorization':''
            }

        }

        let response = await apiClient.post("/Product/AddProduct", newProductRequestModel,options)
        if (response.status === 200)
        {
            Swal.fire({
            icon: 'success',
            title: 'Nuevo producto añadido',
            showConfirmButton: true,
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' } })
         } else {
            alert("Upsi...");
         }
         
    },
    async deleteProduct(id) {
        await apiClient.delete("/Product/DeactivateProduct?id=" + id);
    },
    async updateProduct(updatedProductRequestModel){
       
       let response = await apiClient.patch("/Product/UpdateProduct", updatedProductRequestModel)
       if(response.status === 200)
        {
            Swal.fire({
            icon: 'success',
            title: 'el producto ha sido actualizado',
            showConfirmButton: true,
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' } })
         }
    }
}