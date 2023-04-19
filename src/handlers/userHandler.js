import { userService } from '../services/userService';

export const userHandler = {
    insertUser(newUser) {
        if (!newUser) {
            return;
        }

        let newUserRequestModel = {
                "firstName": newUser.firstName,
                "lastName": newUser.lastName,
                 "userName": newUser.userName,
                "email": newUser.email,
                "password": newUser.password,

        }
        console.log(newUserRequestModel)
        return userService.insertUser(newUserRequestModel);

    },

    async loadUser() {
        var result = await userService.getUser();
        return result;
    },
    loadUser(id) {
        return userService.getUser(id);
    },
    deleteUser(id) {
        return userService.deleteUser(id);
    },
    updateUser(id, updatedUser) {
        if (!updatedUser) {
            return;
        }

        // let imgStringData = updatedUser.img;
        // let imgStringDataSplit = imgStringData.split(',');
        // let imgContent = imgStringDataSplit[1];

        let updatedUserRequestModel = {
            
            
                "firstName": updatedUser.firstName,
                "lastName": updatedUser.lastName,
                 "userName": updatedUser.userName,
                "email": updatedUser.email,
                "password": updatedUser.password,
           
            // "fileData": {
            //     "fileName": newUser.fullName + "-Photo",
            //     "base64FileContent": imgContent
            // }
        }

        return userService.updateUser(id, updatedUserRequestModel);
    }
}