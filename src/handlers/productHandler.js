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
            "ProductData": {
            "Title": newProduct.Title,
            "Description": newProduct.Description,
            "Img": newProduct.Img,
            "Category": newProduct.Category,
            "Location": newProduct.Location,
            "State": newProduct.State,
        },

        "fileData": {
            "fileName": updatedProduct.Title + "-Photo",
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
            "Id": updatedProduct.Id,
            "Title": updatedProduct.Title,
            "Description": updatedProduct.Description,
            "Img": updatedProduct.Img,
            "Category": updatedProduct.Category,
            "Location": updatedProduct.Location,
            "State": newProduct.State,
        },

        "fileData": {
            "fileName": updatedProduct.Title + "-Photo",
            "base64FileContent": imgContent
        },
        
        }
        return productService.updateProduct(updateProductRequestModel);
    }

}