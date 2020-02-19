import Vue from 'vue'
import Axios from 'axios'

export const setCommentResult = ({state,commit},commentResult)=>{
    commit("updateCommentResult",commentResult);
    let commentData={
        name:state.name,
        email:state.email,
        website:state.website,
        content:state.content
    }
    Vue.Axios.put("http://localhost:2500/api/post/comment",commentData)
    .then(res=>{

    })
}

export const getCommentResult =({commit})=>{
    Vue.Axios.get("http://localhost:2500/api/post/comment").then(res=>{
        console.log(res);
        commit("updateCommentResult",res.body)
    })
}