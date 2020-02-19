<template>
    <div class="row">
        <div class="col-lg-12 col-sm-6 col-md-6">
            <div class="well well">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <img :src="user.img" alt="" class="img-rounded img-responsive" />
                    </div>
                    <div class="col-sm-6 col-md-8">
                        <h4>{{user.name}}</h4> <h6 style="color:red">{{user.author}}</h6>
                        <small><cite title="San Francisco, USA">Van, TURKEY <i class="glyphicon glyphicon-map-marker">
                        </i></cite></small>
                        <p>
                            <i class="fas fa-envelope"></i> {{user.email}}
                            <br />
                            <i class="fas fa-globe-americas"></i><a href="http://www.jquery2dotnet.com"> lanista.com.tr</a>
                            <br />
                            <i class="fas fa-clock"></i> {{user.pass}}</p>
                        <!-- Split button -->
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary">
                                Social</button>
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                <span class="sr-only">Social</span>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Twitter</a></li>
                                <li><a href="https://plus.google.com/+Jquery2dotnet/posts">Google +</a></li>
                                <li><a href="https://www.facebook.com/jquery2dotnet">Facebook</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Github</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
import Axios from '../../axios'
export default {
    data(){
        return{
            user:[],
            imageUrl:'https://i.picsum.photos/id/128/880/660.jpg',
        }
    },
     mounted(){
    Axios.get(`/users/${this.$route.params.id}`).then(users=>{
     this.user=users.data;
     console.log("user ,",this.user)
   }).catch(err=>{
     console.log(err);
   })
  }
  
}
</script>
<style lang="less" scoped>

body{padding-top:30px;}

.glyphicon {  margin-bottom: 10px;margin-right: 10px;}
.well{
    width: 100%;
}
.row{
    width: 100%;
}
small {
display: block;
line-height: 1.428571429;
color: #999;
}
</style>