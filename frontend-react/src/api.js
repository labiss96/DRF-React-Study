import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export default {

    //모든 글 불러오기
    getAllPosts() {
        console.log('getAllPosts 실행.');
        return axios.get('/post/')
    }, //dict형과 같이 콤마(,)를 통해 함수를 구별.

    //글 작성하기
    createPost(data) {
        console.log('createPost 실행.');
        return axios.post('/post/', data)
    },

    deletePost(id) {
        console.log('deletePost 실행.');
        return axios.delete('/post/'+String(id))
    }


}