import { productService } from "../services/productService";


export const productHandler = {

    addProduct(newProduct) {
        if (!newProduct) {
            return;
        }

        let imgStringData = newProduct.img;
        let imgStringDataSplit = imgStringData.split(',');
        let imgContent = imgStringDataSplit[1];

        let newProductRequestModel = {
            "productData": {
            "title": newProduct.title,
            "description": newProduct.description,
            "img": newProduct.img,
            "category": newProduct.category,
            "location": newProduct.location,
        },

        "fileData": {
            "fileName": updatedProduct.title + "-Photo",
            "base64FileContent": imgContent
        },

        }
        return productService.submitProduct(newProductRequestModel);
    },
    async loadProducts() {
        let result = await productService.getProducts();
        return result;
    },
    loadProduct(id) {
        return productService.getProduct(id);
    },
    deleteProduct(id) {
        return productService.deleteProduct(id);
    },
    updateProduct(updatedProduct) {
        if (!updatedProduct) {
            return;
        }

        let imgStringData = newProduct.img;
        let imgStringDataSplit = imgStringData.split(',');
        let imgContent = imgStringDataSplit[1];

        let updateProductRequestModel = {
            "productData": {
            "id": updatedProduct.id,
            "title": updatedProduct.title,
            "description": updatedProduct.description,
            "img": updatedProduct.img,
            "category": updatedProduct.category,
            "location": updatedProduct.location,
        },

        "fileData": {
            "fileName": updatedProduct.title + "-Photo",
            "base64FileContent": imgContent
        },
        
        }
        return productService.updateProduct(updateProductRequestModel);
    }

}