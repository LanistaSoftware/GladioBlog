// import Vue from 'vue'
// import Axios from 'axios'
// const state={
//     comment:[],
// }
// const getters={
//     // getComments(state){
//     //     return state.comment;
//     // }
// }
// const mutations={
//     updateCommentList(state,comment){
//         state.comment.push(comment);
//     }
// }
// const actions = {

//     setApp({commit},payload){
//         //vue resource işlemleri
//     },
//     saveComment({dispatch,commit,state},comment){
//        Vue.Axios.post("http://localhost:2500/api/post/comment",comment)
//         .then((res)=>{
//             comment.key = res.body.name;
//             commit("updateCommentList",comment);
//             let commentResult={
//                 name:comment.name,
//                 email:comment.email,
//                 website:comment.website,
//                 content:comment.content
//             }
//             dispatch("setCommentResult",commentResult)
//         })
//     }
// }