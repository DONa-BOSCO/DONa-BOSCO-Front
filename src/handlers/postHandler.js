import { postService } from "../services/postService.js";

export const postHandler = {
    addPost(newPost) {
        if (!newPost) {
            return;
        }
        let newPostRequestModel = {
            "postData": {
                "title": newPost.title,
                "description": newPost.description,
            },
            
        }
        console.log(newPostRequestModel)
        
        return postService.submitPost(newPostRequestModel);
    },
    async loadPosts() {
        var result = awaitpostService.getPosts();
        return result;
    },
    loadPost(id) {
        returnpostService.getPost(id);
    },
    deletePost(id) {
        returnpostService.deletePost(id);
    },
    updatePost(updatedPost) {
        if (!updatedPost) {
            return;
        }

        let updatePostRequestModel = {
            "postData": {
                "id": updatedPost.id,
                "title": updatedPost.title,
                "description": updatedPost.description,
            },
        }
        return postService.updatePost(updatePostRequestModel);
    }

}