<template>
<div class="a">
     <div class="col-md-11" v-for="comment in comment" :key="comment.id">
        <div class="media g-mb-30 media-comment">
            <img class="d-flex g-width-50 g-height-50 g-mt-3 g-mr-15" src="../../assets/img/default-profile.png" alt="Image Description">
            <div class="media-body"> 
              <div class="g-mb-15">
                <router-link :to="{name:'profile',params:{userid:comment.userid,name:comment.name,email:comment.email,website:comment.website}}" tag="b" class="fn">
                  <a href="#" rel="external nofollow ugc">{{comment[0].name}}</a>
                </router-link>
                <!-- <b class="fn">
                  <a href="#" rel="external nofollow ugc">{{comment.name}}</a>
                </b> -->
                <span class="g-color-gray-dark-v4 g-font-size-12">{{comment[0].author}} diyor ki:</span>
              </div>
              <div class="comment-metadata">
                  <small>tarih :
                <a href="#" rel="external nofollow ugc"> {{comment[0].date}}</a>
                </small>
              </div>
            </div>
        </div>
         <div class="description">
              <div class="comment-content">
                  <p>{{comment[0].content}}</p>

              </div>
                <div class="reply">
                  <a rel="nofollow" href="#" class="comment-reply-link">Reply</a>
                </div>
<hr>
              </div>

    </div>
    </div>
</template>
<script>

import Axios from '../../axios'
export default {
  data(){
    return{
      id:null,
      comment:[]
    }
  },
  methods:{
    saveComment(){
      //this.$store.dispatch("saveComment",this.comment)
      console.log(this.comment)
    }
  },
  mounted(){
   Axios.get(`/post/${this.$route.params.id}`).then(blogs=>{
    let com=[];
     com=blogs.data[0].comment
     for (let index = 0; index < com.length; index++) {
      this.comment.push(com[index])
     }
     console.log(this.comment)
   })
  }

}

</script>

<style lang="less"scoped>@nbfcolor: #303030;
@bgcolor: #ffffff;
@incolor: #999999;
@redcolor: #e33;
@pagebgcolor: #E5E5E5;
@btntextcolor: #eee;
@headingfont: 'Kanit', sans-serif;
@contentfont: 'Exo', sans-serif;
@blackHover:#303030;
section{
  padding-left: 2rem
}
/**comment-css */

@media (min-width: 0) {
    .g-mr-15 {
        margin-right: 1.07143rem !important;
    }
}
@media (min-width: 0){
    .g-mt-3 {
        margin-top: 0.21429rem !important;
    }
}

.g-height-50 {
    height: 50px;
}
.g-color-gray-dark-v4 {
    color: #777 !important;
}

.g-font-size-12 {
    font-size: 0.85714rem !important;
}

.media-comment {
    margin-top:20px
}
a:link, a:visited {
    color: @redcolor;
}
a:hover{
  text-decoration: none;
  color: @blackHover;
}
a{
  text-decoration: none;
  background-color: transparent
}
b, strong {
    font-weight: bold;
}
.comment-metadata {
    margin-top: 0.3em;
    font-size: 0.875rem;
}
.media-body{
  padding-bottom: .7rem;
}
.info{
  font-style: italic;
}
.description{
  padding-top: .7rem;
}
.comment-content{
  clear: left;
}
.reply{
  padding-top: 1rem;
}
.title-item{
  padding-top: 1.4rem;
    p{
        padding-bottom: 1rem;
    }
}

/**comment-last */
form{
  padding: 1rem 0 1rem 0;
  textarea{
    margin-bottom: 3rem;
  }
  input{
    padding: 1rem;
  }
  label{
    padding-left: 0;
    font-weight: bold;
    font-size: 1rem;
    margin-top: .1rem;
  }
  input{
    margin-bottom: 3rem
  }
  button{
    background-color: @redcolor;
    padding: 1rem 3rem 1rem 3rem;
    border:none;
    margin-left: 0;
    color: @btntextcolor;
  }
}
</style>