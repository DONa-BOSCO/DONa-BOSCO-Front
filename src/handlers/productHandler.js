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
            "ProductData": {
            "Title": newProduct.title,
            "Description": newProduct.description,
            "Img": newProduct.img,
            "Category": newProduct.category,
            "Location": newProduct.location,
            "Condition": newProduct.condition,
        },

        "fileData": {
            "fileName": newProduct.title + "-Photo",
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
            "ProductData": {
            "Id": updatedProduct.id,
            "Title": updatedProduct.title,
            "Description": updatedProduct.description,
            "Img": updatedProduct.img,
            "Category": updatedProduct.category,
            "Location": updatedProduct.location,
            "Condition": newProduct.condition,
        },

        "fileData": {
            "fileName": updatedProduct.title + "-Photo",
            "base64FileContent": imgContent
        },
        
        }
        return productService.updateProduct(updateProductRequestModel);
    }

}