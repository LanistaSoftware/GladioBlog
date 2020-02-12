<template>
<<<<<<< HEAD
<footer>
<h5>{{msg}}</h5>
</footer>
=======
  <footer>
    <div class="footer-text">
      <h2> Lanista Software </h2>

    </div>
    <div class="footer-img">
      <img src="../assets/lg.png" alt="Footer ICON">
    </div>
  </footer>
>>>>>>> 5e33c3ac860df686ff01ed25cc8ba084bbf85f10
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="less"scoped>
@nbfcolor: #303030;
@bgcolor: #ffffff;
@incolor: #B5B5B5;
@redcolor: #e33;
@pagebgcolor: #E5E5E5;
@headingfont: 'Kanit', sans-serif;
@contentfont: 'Exo', sans-serif;

footer {

  .footer-text,
  .footer-img {
    width: 50%;
    float: left;
    
  }

  img {
    vertical-align: middle;
    float: right;
    width: 3rem;
    height: auto;
    margin: 2rem;
  }

  width :100%;
  color: @bgcolor;

  
  h2,
  h4 {
    padding: 2rem;
    
  }
  h2{
    font-family: @contentfont;
  }

}
</style>