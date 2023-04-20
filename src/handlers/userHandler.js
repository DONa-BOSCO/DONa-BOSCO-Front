import { userService } from '../services/userService';

export const userHandler = {
    insertUser(newUser) {
        if (!newUser) {
            return;
        }

        // let imgStringData = newUser.img;
        // let imgStringDataSplit = imgStringData.split(',');
        // let imgContent = imgStringDataSplit[1];

        let newUserRequestModel = {
            "userData": {
            
                "fullName": newUser.fullName,
                // "nickName": newUser.nickName,
                "email": newUser.email,
                "password": newUser.password,
                "phoneNumber": newUser.phoneNumber,
            },

            // "fileData": {
            //     "fileName": newUser.fullName + "-Photo",
            //     "base64FileContent": imgContent
            // }

        }

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

        let imgStringData = updatedUser.img;
        let imgStringDataSplit = imgStringData.split(',');
        let imgContent = imgStringDataSplit[1];

        let updatedUserRequestModel = {
            "userData": {             
                "fullName": updatedUser.fullName,
                // "nickName": updatedUser.nickName,
                "email": updatedUser.email,
                "password": updatedUser.password,
                "phoneNumber": updatedUser.phoneNumber,
            },
            "fileData": {
                "fileName": newUser.fullName + "-Photo",
                "base64FileContent": imgContent
            }
        }

        return userService.updateUser(id, updatedUserRequestModel);
    }
}