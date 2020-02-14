<template>
  <section>
    <!-- comment -->
<div class="row">
  <CommentPage></CommentPage>
</div>
 <div class="title-item">
        <h4>Leave a Reply</h4>
        <p>Your email address will not be published. Required fields are marked *</p>
    </div>
    <!-- comment last -->
    <form>
      <div class="form-group">
    <label for="exampleFormControlTextarea1"><h5>Comment</h5> </label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" v-model="comments.content"></textarea>
  </div>
   <div class="form-group row">
    <label for="inputName" class="col-sm-2 col-form-label">Name*</label>
    <div class="col-5">
      <input type="text" class="form-control" id="inputName" placeholder="Name" v-model="comments.name">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email*</label>
    <div class="col-5">
      <input type="email" class="form-control" id="inputEmail" placeholder="Email" v-model="comments.email">
    </div>
  </div>
   <div class="form-group row">
    <label for="inputWebSite" class="col-sm-2 col-form-label">Web Site</label>
    <div class="col-5">
      <input type="text" class="form-control" id="inputWebSite" placeholder="Web site" v-model="comments.website">
    </div>
  </div>
  <div class="form-group">
    <div>
      <button type="submit" class="btnComment" @click="saveComment()">Post Comment</button>
    </div>
  </div>
</form>
  </section>
</template>

<script>
import Axios from 'axios'
import CommentPage from './Comment-page'
export default {
  components:{
    CommentPage,
  },
  data(){
    return{
      id:null,
      URL:`http://localhost:2500/api/comment/${this.$route.params.id}`,
      comments:{
        content:null,
        name:null,
        email:null,
        website:null,
        date: new Date().toLocaleDateString() + ' - ' + new Date().getHours() +' : '+new Date().getMinutes()
      }
      
    }
  },
  methods:{
    saveComment(){
      Axios.put(`http://localhost:2500/api/comment/${this.$route.params.id}?content=${this.comments.content}&name=${this.comments.name}&email=${this.comments.email}&website=${this.comments.website}&date=${this.comments.date}`)
    }
  }, watch:{
      '$route'(to,from){
          this.id =to.params._id
      }
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