import { productService } from "../services/productService.js";

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
                "category": newProduct.category,
                "location": newProduct.location,
                "condition": newProduct.condition,
                "userId" : newProduct.userId,
            },

            "fileData": {
                "fileName": newProduct.title + "-Photo",
                "base64FileContent": imgContent
            },

        }
        return productService.submitProduct(newProductRequestModel);
    },
    async loadProducts() {
        var result = await productService.getProducts();
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

        let imgStringData = updatedProduct.img;
        let imgStringDataSplit = imgStringData.split(',');
        let imgContent = imgStringDataSplit[1];

        let updateProductRequestModel = {
            "productData": {
                "id": updatedProduct.id,
                "title": updatedProduct.title,
                "description": updatedProduct.description,
                "category": updatedProduct.category,
                "location": updatedProduct.location,
                "condition": updatedProduct.condition,
            },

            "fileData": {
                "fileName": updatedProduct.title + "-Photo",
                "base64FileContent": imgContent
            },

        }
        return productService.updateProduct(updateProductRequestModel);
    }

}