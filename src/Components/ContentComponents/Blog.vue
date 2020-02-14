<template>
  <section>
    <div class="cardb clearfix" v-for="blog in blogs" :key="blog.id">
        <router-view></router-view>
      <div class="contentimg"><img :src="blog.image">
      </div>     

      <div class="contenttext">
        <div class="blog-meta"><time class="blogtime">{{blog.created}}</time><span></span>
        <router-link>
          <a class="authorname">  /  {{ blog.author}}</a>
        </router-link>
        
         <router-link :to="{name:'user',params:{id:blog._id,title:blog.title,author:blog.author,content:blog.content,imageUrl:blog.image,created:blog.cradetAt}}"><a href="" class="continuiereading">Continue reading <i class="fas fa-angle-double-right"></i> </a></router-link>
        
        </div><a>
          <h3>{{blog.title}}</h3>
        </a> 

        <p class="description">{{blog.content}}
        </p>   </div>
    </div>
    <hr>
    <div class="nav-previous">
      <a href=""><i class="fas fa-angle-double-left"></i> Prev</a>
       <div class="nav-next">
      <a href="">Next <i class="fas fa-angle-double-right"></i></a>
    </div>
    </div>
    
    <hr>
    <Comments></Comments>
  </section>
</template>

<script>
import {eventBus} from '../../main'
import Comments from './Comment'
import Axios from 'axios'
export default {
    components:{
        Comments
    },
  name: 'Blog',
  data() {
    return {
      msg: 'Lanista Gladio Blog Content',
      blogs:[]
    }
  },
  watch:{
    
  },
  mounted(){
     Axios.get(`http://localhost:2500/api/post/${this.$route.params.id}`).then(res=>{
      this.blogs=res.data
      Axios.get('http://localhost:2500/api/users').then(users=>{
        users.data.forEach(user => {
         // console.log(user)
          
        });
      })
    })
  },
  methods:{
    // getBlog(id){
   
    // }
  },
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
    padding-left: 2rem;
}
.cardb{
    padding-top: 2rem
}
.cardb .contentimg{
    text-align: center
}
.contenttext {
  padding-left: 1.4rem;
  font-size: 1rem;

  p {
    letter-spacing: 0.1rem;
    padding-bottom: 1.5rem;
    line-height: 1.8rem
  }
  h3{
      padding: 1rem 0 1.1rem 0;
  }
  .blog-meta{
      padding-top: 1.2rem;
  }
}
.blog-meta {
  color: @incolor;
}
.nav-previous{
  padding-bottom: 5rem;
  a{
    color: @redcolor;
  }
  a:hover{
    color: @blackHover;
    text-decoration: none;
  }
}
.nav-next{
  float: right;
}
</style>